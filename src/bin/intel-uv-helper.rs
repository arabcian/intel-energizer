//! Root helper for the Intel Undervolt tab (pkexec target, same contract as
//! the other helpers: one JSON request on stdin, one JSON line on stdout).
//!   {"op": "status"}
//!   {"op": "probe_uv_lock"}   1-tick write test of the Core offset, restored
//!   {"op": "apply",     "profile": {...}}   validated whole before any write
//!   {"op": "reset"}                          every voltage plane of this CPU → 0 mV
//!       apply / reset take "hold": true (scenes): the profile is recorded for centurion-intel-uv-daemon,
//!       which then keeps it alive instead of its boot profile until the boot config is saved again
//!   {"op": "set_boot",  "profile": {...}}   store the boot/resume profile
//!   {"op": "clear_boot"}
//!   {"op": "set_boot",  "config": {"ac": {...}|null, "battery": {...}|null, "daemon": {...}}}
//!   {"op": "boot"}                           apply the stored profile for the current power source
//!   {"op": "monitor",   "clear_logs": bool} one throttle/VCore/energy sample
//!   {"op": "monitor_stream", "interval_ms": n, "clear_logs": bool}
//!       one sample line every interval (500..10000 ms) until stdin reaches
//!       EOF or stdout goes away; a "clear" line on stdin clears the sticky
//!       log bits with the next sample. Replaces one pkexec round trip
//!       (fork, polkit D-Bus check, exec) per 2 s sample with one per session.
//!       The request line must end with '\n' so stdin can stay open.
//! Profile format: see intel_uv::parse_profile.

use intel_energizer::intel_uv::{self, parse_profile};
use intel_energizer::intel_uv_daemon::{apply_boot, clear_hold, parse_boot, write_hold};
use intel_energizer::*;
use intel_energizer::stream::{emit_line, wait_stdin};
use serde_json::{json, Value};
use std::path::Path;

const MAX_STDIN_BYTES: usize = 16 * 1024;
const BOOT_DIR: &str = "/etc/intel-energizer";
const BOOT_FILE: &str = "/etc/intel-energizer/intel-uv-boot.json";
/// The deepest offset the Intel tab offers (gui/src/inteltab.cpp UV_MIN). intel_uv itself accepts
/// down to -1000 mV; this pkexec entry point (password-free for a console admin) takes nothing the
/// GUI could not have sent. The boot service reads BOOT_FILE directly and is not affected.
const GUI_UV_FLOOR_MV: f64 = -300.0;

fn within_gui_floor(p: &intel_uv::Profile) -> Result<(), String> {
    match p.voltage.iter().find(|(_, _, mv)| *mv < GUI_UV_FLOOR_MV) {
        Some((plane, _, mv)) => Err(format!("voltage.{plane}: {mv} mV is below the Intel tab's {GUI_UV_FLOOR_MV} mV floor")),
        None => Ok(()),
    }
}

fn boot_within_gui_floor(c: &Value) -> Result<(), String> {
    let b = parse_boot(c)?;
    b.ac.iter().chain(&b.battery).try_for_each(within_gui_floor)
}

/// The boot profile is applied by root at every boot and resume, so it lives
/// in a verified root-owned directory and is replaced atomically (the old
/// version used create_dir_all under the caller's umask: `umask 000; pkexec`
/// left /etc/intel-energizer world-writable).
fn write_boot(profile: &Value) -> Result<(), String> {
    secure_dir(BOOT_DIR)?;
    let body = serde_json::to_vec_pretty(profile).map_err(|e| e.to_string())?;
    write_root_file(BOOT_FILE, &body)
}

fn monitor_stream(obj: &serde_json::Map<String, Value>) -> Value {
    let msr = match intel_uv::Msr::open(true) {
        Ok(m) => m,
        Err(e) => return json!({"ok": false, "error": format!("/dev/cpu/0/msr: {e}")}),
    };
    let interval = obj.get("interval_ms").and_then(Value::as_u64).unwrap_or(2000).clamp(500, 10_000);
    let mut clear = obj.get("clear_logs").and_then(Value::as_bool).unwrap_or(false);
    let mut pending = Vec::new();
    // Hard ceiling: a GUI that hangs with the pipe open cannot keep a root
    // process sampling MSRs forever (the tab restarts the stream if needed).
    unsafe { libc::alarm(4 * 3600 + 15); }
    let stop_at = std::time::Instant::now() + std::time::Duration::from_secs(4 * 3600);
    loop {
        if !emit_line(&intel_uv::monitor_sample(&msr, std::mem::take(&mut clear))) { break; }
        if std::time::Instant::now() >= stop_at { break; }
        match wait_stdin(interval, &mut pending) {
            Some(c) => clear = c,
            None => break,
        }
    }
    json!({"ok": true, "stream_end": true})
}

fn run() -> Value {
    let req = match intel_energizer::stream::read_request_line(MAX_STDIN_BYTES) { Ok(v) => v, Err(e) => return e };
    let Some(obj) = req.as_object() else { return json!({"ok": false, "error": "payload must be a JSON object"}) };
    let profile = || -> Result<(Value, intel_uv::Profile), Value> {
        let v = obj.get("profile").cloned().unwrap_or(Value::Null);
        parse_profile(&v).and_then(|p| within_gui_floor(&p).map(|()| p)).map(|p| (v, p)).map_err(|e| json!({"ok": false, "error": format!("invalid profile: {e}")}))
    };
    let hold = obj.get("hold").and_then(Value::as_bool).unwrap_or(false);
    // Every op that writes voltages or limits: "boot" applies the stored profile, "probe_uv_lock" writes the core offset.
    if matches!(obj.get("op").and_then(Value::as_str), Some("apply" | "reset" | "boot" | "probe_uv_lock")) {
        if let Some(r) = intel_energizer::refuse_during_calibration() { return r; }
    }
    let mut out = match obj.get("op").and_then(Value::as_str) {
        Some("status") => intel_uv::read_status(),
        Some("probe_uv_lock") => intel_uv::probe_uv_lock(),
        Some("probe_fabric") => intel_uv::probe_fabric(),
        // "hold" (scenes): tell centurion-intel-uv-daemon this profile now owns the CPU (see intel_uv_daemon).
        Some("apply") => match profile() {
            Ok((v, p)) => {
                let mut out = intel_uv::apply_atomic(&p);
                if out["ok"] == true {
                    let name = v["name"].as_str().filter(|n| !n.is_empty() && n.len() <= 64).unwrap_or("custom");
                    intel_energizer::ocjournal::record("cpu_uv", &format!("profile:{name}"));
                }
                if hold && out["ok"] == true {
                    if let Err(e) = write_hold(Some(&v)) { out["hold_error"] = json!(e); out["ok"] = json!(false); }
                }
                out
            }
            Err(e) => e,
        },
        Some("reset") => {
            // Not atomic: a reset puts back as much as it can; one field that cannot (a locked limit)
            // must not undo the voltage reset of the others.
            let mut out = intel_uv::apply(&intel_uv::reset_profile());
            if out["ok"] == true { intel_energizer::ocjournal::record("cpu_uv", "reset"); }
            if hold && out["ok"] == true {
                if let Err(e) = write_hold(None) { out["hold_error"] = json!(e); out["ok"] = json!(false); }
            }
            out
        }
        Some("set_boot") => {
            let cfg = match obj.get("config") {
                Some(c) => boot_within_gui_floor(c).map(|()| c.clone()).map_err(|e| json!({"ok": false, "error": format!("invalid config: {e}")})),
                None => profile().map(|(v, _)| v),
            };
            match cfg {
                // A new boot configuration takes the CPU back from a scene's hold.
                Ok(v) => match write_boot(&v) { Ok(()) => { clear_hold(); json!({"ok": true, "message": format!("saved {BOOT_FILE}")}) }
                                                Err(e) => json!({"ok": false, "error": e}) },
                Err(e) => e,
            }
        }
        Some("monitor") => match intel_uv::Msr::open(true) {
            Ok(m) => intel_uv::monitor_sample(&m, obj.get("clear_logs").and_then(Value::as_bool).unwrap_or(false)),
            Err(e) => json!({"ok": false, "error": format!("/dev/cpu/0/msr: {e}")}),
        },
        Some("monitor_stream") => return monitor_stream(obj),
        Some("clear_boot") => match std::fs::remove_file(BOOT_FILE) {
            Ok(()) => { clear_hold(); json!({"ok": true, "message": "boot profile removed"}) }
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => json!({"ok": true, "message": "no boot profile"}),
            Err(e) => json!({"ok": false, "error": format!("{BOOT_FILE}: {e}")}),
        },
        Some("boot") => apply_boot(),
        other => json!({"ok": false, "error": format!("unknown op: {}", other.unwrap_or("None"))}),
    };
    if out.is_object() { out["boot_profile"] = json!(Path::new(BOOT_FILE).is_file()); }
    out
}

fn watch_faults() -> std::io::Result<()> {
    use std::io::{Read, Seek, SeekFrom};
    let mut log = std::fs::File::open("/dev/kmsg")?;
    log.seek(SeekFrom::End(0))?;
    if !emit_line(&json!({"ready": true})) { return Ok(()); }
    let mut record = vec![0; 65536];
    loop {
        let n = match log.read(&mut record) {
            Ok(n) => n,
            // EPIPE: records were overwritten before this read; the next read continues. Without this a
            // burst of kernel messages ended the machine-check watch.
            Err(e) if e.raw_os_error() == Some(libc::EPIPE) || e.kind() == std::io::ErrorKind::Interrupted => continue,
            Err(e) => return Err(e),
        };
        if n == 0 { return Ok(()); }
        let text = String::from_utf8_lossy(&record[..n]);
        if let Some((_, message)) = text.split_once(';') {
            if let Some(event) = health::classify(message.trim_end()) {
                if matches!(event["kind"].as_str(), Some("mce" | "lockup")) && !emit_line(&event) {
                    return Ok(());
                }
            }
        }
    }
}

fn main() {
    if std::env::args().nth(1).as_deref() == Some("--watch-faults") {
        if unsafe { libc::geteuid() } == 0 { std::process::exit(1); }
        std::process::exit(if watch_faults().is_ok() { 0 } else { 1 });
    }
    unsafe { libc::umask(0o022); libc::alarm(120); }
    let mut reply = match machine::check() {
        Ok(()) => run(),
        Err(error) => json!({"ok": false, "error": error}),
    };
    reply["helper_version"] = json!(env!("CARGO_PKG_VERSION"));
    println!("{reply}");
    std::process::exit(if reply["ok"] == true { 0 } else { 1 });
}

#[cfg(test)]
mod tests {
    use super::*;

    fn core(mv: f64) -> Result<(), String> { within_gui_floor(&parse_profile(&json!({"voltage": {"core": mv}})).unwrap()) }

    #[test]
    fn gui_floor_is_the_limit() {
        assert!(core(-300.0).is_ok() && core(-50.0).is_ok());
        assert!(core(-300.5).is_err() && core(-1000.0).is_err());
    }

    #[test]
    fn boot_config_profiles_are_checked() {
        let ok = json!({"ac": {"voltage": {"core": -300}}, "battery": null});
        let deep = json!({"ac": {"voltage": {"core": -100}}, "battery": {"voltage": {"core": -400}}});
        assert!(boot_within_gui_floor(&ok).is_ok());
        assert!(boot_within_gui_floor(&deep).is_err());
    }
}
