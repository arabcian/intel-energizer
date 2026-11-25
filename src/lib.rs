//! Shared platform support for the extracted Centurion tools.
#![allow(clippy::doc_lazy_continuation, clippy::doc_overindented_list_items)]

use std::io::{self, Read, Write};
use std::os::unix::fs::{DirBuilderExt, MetadataExt, OpenOptionsExt, PermissionsExt};
use std::os::unix::io::AsRawFd;
use std::path::Path;

pub mod health;
pub mod intel_uv;
pub mod intel_uv_daemon;
pub mod intel_uv_search;
pub mod machine;
pub mod ocjournal;
pub mod power;

/// The first processor block of /proc/cpuinfo (vendor, family, model, name are
/// identical across CPUs), read once per process. The whole file is one
/// seq_file record per CPU and each record samples that CPU's current
/// frequency — on a 32-thread part a full read is ~40 KiB of kernel work that
/// can IPI idle cores awake. The Intel daemon used to do that on every
/// re-apply interval; now it is at most a few KiB, once.
pub fn cpuinfo_head() -> &'static str {
    static HEAD: std::sync::OnceLock<String> = std::sync::OnceLock::new();
    HEAD.get_or_init(|| {
        let Ok(mut f) = std::fs::File::open("/proc/cpuinfo") else { return String::new() };
        let mut buf = Vec::with_capacity(4096);
        let mut chunk = [0u8; 2048];
        loop {
            match f.read(&mut chunk) {
                Ok(0) => break,
                Ok(n) => buf.extend_from_slice(&chunk[..n]),
                Err(e) if e.kind() == io::ErrorKind::Interrupted => continue,
                Err(_) => break,
            }
            if let Some(end) = buf.windows(2).position(|w| w == b"\n\n") { buf.truncate(end + 1); break; }
            if buf.len() >= 64 * 1024 { break; }
        }
        String::from_utf8_lossy(&buf).into_owned()
    })
}

/// Writes `data` to a sysfs attribute with a single write() syscall.
/// sysfs store handlers parse one buffer per write and must not be fed
/// in pieces, so a short write is reported as an error instead of retried.
pub fn sysfs_write(path: &Path, data: &[u8]) -> io::Result<()> {
    let mut f = std::fs::OpenOptions::new()
        .write(true)
        .truncate(true)
        .custom_flags(libc::O_CLOEXEC | libc::O_NOFOLLOW)
        .open(path)?; // callers pass the canonical path; a symlink here is refused

    let n = f.write(data)?;
    if n != data.len() {
        return Err(io::Error::new(io::ErrorKind::WriteZero, "short write to sysfs"));
    }
    Ok(())
}

/// Creates (or verifies) a root-owned, non-symlink directory that is not
/// group/other-writable. Mode is set explicitly, never left to the umask.
pub fn secure_dir(p: &str) -> Result<(), String> {
    match std::fs::DirBuilder::new().mode(0o755).create(p) {
        Ok(()) => {}
        Err(e) if e.kind() == io::ErrorKind::AlreadyExists => {}
        Err(e) => return Err(format!("{p}: {e}")),
    }
    let m = std::fs::symlink_metadata(p).map_err(|e| format!("{p}: {e}"))?;
    if !m.is_dir() || m.uid() != 0 || m.mode() & 0o022 != 0 {
        return Err(format!("{p} is not a root-owned private directory; refusing to use it"));
    }
    Ok(())
}

/// Reads a root-owned, not group/other-writable regular file (no symlinks),
/// at most `max` bytes. The checks run on the opened descriptor, so the file
/// cannot be swapped between the check and the read.
pub fn read_root_file(p: &str, max: u64) -> Option<String> {
    let f = std::fs::OpenOptions::new().read(true)
        .custom_flags(libc::O_NOFOLLOW | libc::O_CLOEXEC | libc::O_NONBLOCK).open(p).ok()?;
    let m = f.metadata().ok()?;
    if !m.is_file() || m.uid() != 0 || m.mode() & 0o022 != 0 || m.len() > max { return None; }
    let mut s = String::new();
    (&f).take(max + 1).read_to_string(&mut s).ok()?;
    (s.len() as u64 <= max).then_some(s)
}

/// Atomic root-owned write: tmp (O_EXCL, no symlink, 0644) + fsync + rename
/// + fsync(dir). A reader (boot service, GUI) sees the old file or the new
///
/// one, never a truncated one — also across a power cut.
pub fn write_root_file(p: &str, body: &[u8]) -> Result<(), String> {
    let path = Path::new(p);
    let dir = path.parent().ok_or_else(|| format!("{p}: no parent directory"))?;
    // Per-process name: two helpers writing the same file at once (state.json from an apply and the
    // detached guard) used to delete each other's half-written tmp file.
    let tmp = format!("{p}.{}.tmp", std::process::id());
    let _ = std::fs::remove_file(&tmp);
    let mut f = std::fs::OpenOptions::new().write(true).create_new(true).mode(0o644)
        .custom_flags(libc::O_NOFOLLOW | libc::O_CLOEXEC).open(&tmp)
        .map_err(|e| format!("{tmp}: {e}"))?;
    let res = f.write_all(body)
        .and_then(|_| f.set_permissions(std::fs::Permissions::from_mode(0o644)))
        .and_then(|_| f.sync_all());
    drop(f);
    if let Err(e) = res {
        let _ = std::fs::remove_file(&tmp);
        return Err(format!("{tmp}: {e}"));
    }
    if let Err(e) = std::fs::rename(&tmp, p) {
        let _ = std::fs::remove_file(&tmp);
        return Err(format!("{p}: {e}"));
    }
    if let Ok(d) = std::fs::OpenOptions::new().read(true)
        .custom_flags(libc::O_DIRECTORY | libc::O_CLOEXEC).open(dir) { let _ = d.sync_all(); }
    Ok(())
}

/// True if `path` and every directory above it is owned by root and not
/// group/other-writable (a sticky world-writable dir like /tmp fails too),
/// and the file itself carries no setuid/setgid bit. Used before exec'ing a
/// third-party binary as root: a user-owned /opt/<tool>/ directory would
/// otherwise let the user swap the binary between the check and the exec.
pub fn trusted_path(path: &Path) -> bool {
    let Ok(real) = std::fs::canonicalize(path) else { return false };
    let Ok(md) = std::fs::metadata(&real) else { return false };
    if !md.is_file() || md.uid() != 0 || md.mode() & 0o6022 != 0 { return false; }
    let mut dir = real.parent();
    while let Some(d) = dir {
        match std::fs::metadata(d) {
            Ok(m) if m.is_dir() && m.uid() == 0 && m.mode() & 0o022 == 0 => {}
            _ => return false,
        }
        dir = d.parent();
    }
    true
}

// ── kernel modules ─────────────────────────────────────────────────────────

/// True if the running kernel ships `module` (loadable or built in). Unknown
/// (no modules.dep) counts as present so that modprobe still gets its chance.
fn module_installed(module: &str) -> bool {
    let norm = |s: &str| s.replace('-', "_");
    let want = norm(module);
    let mut u: libc::utsname = unsafe { std::mem::zeroed() };
    if unsafe { libc::uname(&mut u) } != 0 { return true; }
    let rel = unsafe { std::ffi::CStr::from_ptr(u.release.as_ptr()) }.to_string_lossy().into_owned();
    let base = Path::new("/lib/modules").join(rel);
    let Ok(dep) = std::fs::read_to_string(base.join("modules.dep")) else { return true };
    let builtin = std::fs::read_to_string(base.join("modules.builtin")).unwrap_or_default();
    dep.lines().map(|l| l.split(':').next().unwrap_or("")).chain(builtin.lines()).any(|path| {
        let file = path.rsplit('/').next().unwrap_or("");
        file.find(".ko").is_some_and(|i| norm(&file[..i]) == want)
    })
}

/// Loads a kernel module at most once per process, and only when the running
/// kernel actually has it: a status poll on a machine without (say) acpi_call
/// no longer spawns a failing modprobe every time. Returns true if the module
/// is loaded afterwards (or was already).
pub fn modprobe(module: &str) -> bool {
    // Callers pass fixed names. Reject anything modprobe could treat as an option or a path.
    if module.is_empty() || module.len() > 64 || module.starts_with('-')
        || !module.bytes().all(|b| b.is_ascii_alphanumeric() || b == b'_' || b == b'-')
    {
        return false;
    }
    static TRIED: std::sync::Mutex<Vec<String>> = std::sync::Mutex::new(Vec::new());
    let loaded = || Path::new("/sys/module").join(module.replace('-', "_")).exists();
    if loaded() { return true; }
    {
        let mut t = TRIED.lock().unwrap_or_else(|e| e.into_inner());
        if t.iter().any(|m| m == module) { return false; }
        t.push(module.to_owned());
    }
    if !module_installed(module) { return false; }
    for p in ["/sbin/modprobe", "/usr/sbin/modprobe", "/usr/bin/modprobe", "/bin/modprobe"] {
        if trusted_path(Path::new(p)) {
            let _ = std::process::Command::new(p).arg(module).env_clear()
                .env("PATH", "/usr/sbin:/usr/bin:/sbin:/bin")
                .stdin(std::process::Stdio::null()).stdout(std::process::Stdio::null())
                .stderr(std::process::Stdio::null()).status();
            return loaded();
        }
    }
    false
}

/// Start time of `pid` (clock ticks since boot, /proc/<pid>/stat field 22).
/// With the pid it identifies one process for its whole life: a recycled pid
/// has a different start time.
pub fn proc_start_time(pid: i32) -> Option<u64> {
    if pid <= 1 { return None; }
    let s = std::fs::read_to_string(format!("/proc/{pid}/stat")).ok()?;
    // comm (field 2) may contain spaces and ')' — fields after the last ')'.
    let rest = &s[s.rfind(')')? + 1..];
    rest.split_whitespace().nth(19)?.parse().ok()
}

/// True while the tracked process is still the one that was recorded.
pub fn session_alive(pid: Option<i64>, start: Option<u64>) -> bool {
    match (pid, start) {
        (Some(p), Some(t)) => i32::try_from(p).ok().and_then(proc_start_time) == Some(t),
        _ => true, // untracked session: only an explicit release ends it
    }
}

/// Exclusive advisory lock on an already-open file, released on drop.
/// Serialises multi-step hardware transactions (MSR mailbox write → read,
/// acpi_call write → read) between our own helpers and the daemon, which
/// would otherwise be able to interleave and read each other's replies.
pub struct FdLock(libc::c_int);
impl FdLock {
    pub fn exclusive<F: AsRawFd>(f: &F) -> io::Result<FdLock> {
        let fd = f.as_raw_fd();
        loop {
            if unsafe { libc::flock(fd, libc::LOCK_EX) } == 0 { return Ok(FdLock(fd)); }
            let e = io::Error::last_os_error();
            if e.kind() != io::ErrorKind::Interrupted { return Err(e); }
        }
    }
}
impl Drop for FdLock {
    fn drop(&mut self) { unsafe { libc::flock(self.0, libc::LOCK_UN); } }
}

/// While centurion-calibrate measures (or waits to measure at boot), nothing else may change the power
/// profile, firmware limits, fan mode or curves under it: a scene switched by a charger event in the
/// middle of a session used to be measured as if it were the knob under test. The file is
/// world-readable ({"pid", "start", "why"}); a hold whose process is gone is no hold.
pub const CALIBRATION_HOLD: &str = "/run/centurion/calibrating.json";

/// The pid holding the calibration hold, if that process is alive.
pub fn calibration_hold() -> Option<i64> {
    let v: serde_json::Value = serde_json::from_str(&read_root_file(CALIBRATION_HOLD, 16 * 1024)?).ok()?;
    let pid = v["pid"].as_i64()?;
    match v["start"].as_u64() {
        Some(st) => session_alive(Some(pid), Some(st)).then_some(pid),
        None => Path::new(&format!("/proc/{pid}")).exists().then_some(pid),
    }
}

/// Hardware helpers refuse writes while another process holds the calibration hold. The holder
/// itself (centurion-calibrate runs the helpers directly as root) passes its own pid in
/// CENTURION_CALIBRATE_OWNER; pkexec clears the environment, so no user-run caller can.
pub fn refuse_during_calibration() -> Option<serde_json::Value> {
    let pid = calibration_hold()?;
    if std::env::var("CENTURION_CALIBRATE_OWNER").ok().and_then(|s| s.parse::<i64>().ok()) == Some(pid) { return None; }
    Some(serde_json::json!({"ok": false, "calibrating": true,
        "error": format!("centurion-calibrate (pid {pid}) is measuring: power profile, firmware limits, fan and curves stay as they are until it ends")}))
}

fn boot_id() -> String {
    std::fs::read_to_string("/proc/sys/kernel/random/boot_id").map(|s| s.trim().to_owned()).unwrap_or_default()
}

pub mod stream;
