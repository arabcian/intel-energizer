//! Command-line port of Centurion's memory test runner.

use std::io::{self, BufRead, BufReader};
use std::os::fd::OwnedFd;
use std::os::unix::net::UnixStream;
use std::os::unix::process::{CommandExt, ExitStatusExt};
use std::path::Path;
use std::process::{Command, ExitCode, Stdio};
use std::sync::atomic::{AtomicBool, Ordering};
use std::time::{Duration, Instant};

const USAGE: &str = "usage: intel-memtest --seconds SECONDS [--percent 10-90]";
static CANCELLED: AtomicBool = AtomicBool::new(false);

extern "C" fn cancel(_: libc::c_int) {
    CANCELLED.store(true, Ordering::Relaxed);
}

#[derive(Clone, Copy, PartialEq, Eq)]
enum Tool {
    Stressapptest,
    Memtester,
}

impl Tool {
    fn name(self) -> &'static str {
        match self {
            Self::Stressapptest => "stressapptest",
            Self::Memtester => "memtester",
        }
    }

    fn find() -> io::Result<(Self, std::path::PathBuf)> {
        let path = std::env::var_os("PATH").unwrap_or_default();
        for tool in [Self::Stressapptest, Self::Memtester] {
            for dir in std::env::split_paths(&path) {
                let file = dir.join(tool.name());
                use std::os::unix::fs::PermissionsExt;
                if file.metadata().is_ok_and(|m| m.is_file() && m.permissions().mode() & 0o111 != 0) {
                    return Ok((tool, std::path::absolute(file)?));
                }
            }
        }
        Err(io::Error::other("install stressapptest or memtester"))
    }
}

fn memory_mib(tool: Tool, percent: u64) -> io::Result<u64> {
    let meminfo = std::fs::read_to_string("/proc/meminfo")?;
    let mut available_kib: u64 = meminfo
        .lines()
        .find_map(|line| line.strip_prefix("MemAvailable:"))
        .and_then(|value| value.split_whitespace().next()?.parse().ok())
        .ok_or_else(|| io::Error::other("MemAvailable is missing from /proc/meminfo"))?;
    if let Ok(cgroup) = std::fs::read_to_string("/proc/self/cgroup") {
        if let Some(path) = cgroup.lines().find_map(|line| line.strip_prefix("0::/")) {
            // Each ancestor can impose a tighter memory limit.
            let root = Path::new("/sys/fs/cgroup");
            if Path::new(path).components().all(|p| matches!(p, std::path::Component::Normal(_))) {
                for dir in root.join(path).ancestors().take_while(|dir| dir.starts_with(root)) {
                    let read = |file| std::fs::read_to_string(dir.join(file)).ok()?.trim().parse::<u64>().ok();
                    if let (Some(limit), Some(used)) = (read("memory.max"), read("memory.current")) {
                        available_kib = available_kib.min(limit.saturating_sub(used) / 1024);
                    }
                }
            }
        }
    }
    let mut mib = available_kib.saturating_mul(percent) / 100 / 1024;
    if tool == Tool::Memtester {
        let mut lock = libc::rlimit { rlim_cur: 0, rlim_max: 0 };
        if unsafe { libc::getrlimit(libc::RLIMIT_MEMLOCK, &mut lock) } != 0 {
            return Err(io::Error::last_os_error());
        }
        let cap = lock.rlim_cur / (1024 * 1024);
        if cap < mib {
            eprintln!("memtester limited to {cap} MiB by RLIMIT_MEMLOCK");
            mib = cap;
        }
    }
    if mib < 64 {
        return Err(io::Error::other("less than 64 MiB available for the test"));
    }
    Ok(mib)
}

#[derive(Default)]
struct Report {
    errors: bool,
    passed: bool,
    unlocked: bool,
}

impl Report {
    fn feed(&mut self, tool: Tool, line: &str) {
        if tool == Tool::Memtester {
            self.errors |= line.contains("FAILURE");
            self.unlocked |= line.contains("unlocked");
            return;
        }
        self.errors |= line.contains("Hardware Error:") || line.contains("Status: FAIL")
            || line.split_once("Found ").is_some_and(|(_, tail)| {
                tail.split_once(" hardware incidents").is_some_and(|(n, _)| n.parse::<u64>().is_ok_and(|n| n > 0))
            });
        self.passed |= line.contains("Status: PASS");
    }
}

fn run(seconds: u32, percent: u64) -> io::Result<u8> {
    if unsafe { libc::geteuid() } == 0 {
        return Err(io::Error::other("run the memory test as an unprivileged user"));
    }
    let (tool, path) = Tool::find()?;
    let mib = memory_mib(tool, percent)?;
    let mut cmd = Command::new(path);
    match tool {
        Tool::Stressapptest => cmd.args(["-M", &mib.to_string(), "-s", &seconds.to_string()]),
        Tool::Memtester => cmd.arg(format!("{mib}M")),
    };
    let (reader, writer) = UnixStream::pair()?;
    let stderr: OwnedFd = writer.try_clone()?.into();
    let stdout: OwnedFd = writer.into();
    eprintln!("Testing {mib} MiB with {} for {seconds} seconds", tool.name());
    let mut child = cmd.stdin(Stdio::null()).stdout(stdout).stderr(stderr)
        .env("LC_ALL", "C").process_group(0).spawn()?;
    drop(cmd);
    let reader = std::thread::spawn(move || -> io::Result<Report> {
        let mut report = Report::default();
        for line in BufReader::new(reader).split(b'\n') {
            let line = line?;
            let line = String::from_utf8_lossy(&line);
            report.feed(tool, &line);
            eprintln!("{line}");
        }
        Ok(report)
    });
    let start = Instant::now();
    let duration = Duration::from_secs(u64::from(seconds));
    let mut ended_at_deadline = false;
    let process_group = -(child.id() as libc::pid_t);
    let status = loop {
        match child.try_wait() {
            Ok(Some(status)) => break status,
            Ok(None) => {}
            Err(error) => {
                unsafe { libc::kill(process_group, libc::SIGKILL) };
                let _ = child.wait();
                return Err(error);
            }
        }
        let elapsed = start.elapsed();
        let cancelled = CANCELLED.load(Ordering::Relaxed);
        if cancelled || elapsed >= duration + Duration::from_secs(120) {
            unsafe { libc::kill(process_group, libc::SIGKILL) };
        } else if tool == Tool::Memtester && elapsed >= duration && !ended_at_deadline {
            // A live child keeps its PID until the next try_wait.
            ended_at_deadline = unsafe { libc::kill(process_group, libc::SIGTERM) } == 0;
        }
        std::thread::sleep(Duration::from_millis(50));
    };
    let report = reader.join().map_err(|_| io::Error::other("output reader failed"))??;
    if report.unlocked {
        eprintln!("memtester could not lock its memory");
    }
    let failed = report.errors
        || (tool == Tool::Memtester && status.code().is_some_and(|code| code & 0x06 != 0));
    let passed = match tool {
        Tool::Stressapptest => status.success() && report.passed,
        Tool::Memtester => !report.unlocked && (status.success()
            || (ended_at_deadline && status.signal() == Some(libc::SIGTERM))),
    };
    Ok(if failed { 1 } else if passed && !CANCELLED.load(Ordering::Relaxed) { 0 } else { 3 })
}

fn main() -> ExitCode {
    let args: Vec<String> = std::env::args().skip(1).collect();
    if matches!(args.as_slice(), [flag] if flag == "--help" || flag == "-h") {
        println!("{USAGE}");
        return ExitCode::SUCCESS;
    }
    let (mut seconds, mut percent) = (None, None);
    for pair in args.chunks(2) {
        match pair {
            [flag, value] if flag == "--seconds" && seconds.is_none() => seconds = value.parse::<u32>().ok().filter(|s| *s > 0),
            [flag, value] if flag == "--percent" && percent.is_none() => percent = value.parse::<u64>().ok().filter(|p| (10..=90).contains(p)),
            _ => {
                eprintln!("{USAGE}");
                return ExitCode::from(2);
            }
        }
        if (pair[0] == "--seconds" && seconds.is_none()) || (pair[0] == "--percent" && percent.is_none()) {
            eprintln!("{USAGE}");
            return ExitCode::from(2);
        }
    }
    let Some(seconds) = seconds else {
        eprintln!("{USAGE}");
        return ExitCode::from(2);
    };
    unsafe {
        libc::signal(libc::SIGINT, cancel as *const () as libc::sighandler_t);
        libc::signal(libc::SIGTERM, cancel as *const () as libc::sighandler_t);
    }
    match run(seconds, percent.unwrap_or(70)) {
        Ok(code) => {
            println!("{}", match code { 0 => "pass", 1 => "fail", _ => "incomplete" });
            ExitCode::from(code)
        }
        Err(error) => {
            eprintln!("intel-memtest: {error}");
            ExitCode::from(3)
        }
    }
}
