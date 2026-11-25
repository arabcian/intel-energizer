//! Processor eligibility for Intel hardware commands.
use crate::intel_uv::{cpu_id_ref, CpuId};

fn supported(cpu: &CpuId) -> bool {
    cpu.vendor == "GenuineIntel" && cpu.family == 6
}

pub fn check() -> Result<(), String> {
    let cpu = cpu_id_ref().ok_or("processor identity unavailable")?;
    if supported(cpu) { Ok(()) } else {
        Err(format!("unsupported processor: {} family {} model {}", cpu.vendor, cpu.family, cpu.model))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn requires_intel_family_six() {
        for (vendor, family, expected) in [("GenuineIntel", 6, true), ("AuthenticAMD", 6, false), ("GenuineIntel", 19, false), ("", 0, false)] {
            let cpu = CpuId { vendor: vendor.into(), family, model: 198, stepping: 0, name: String::new() };
            assert_eq!(supported(&cpu), expected);
        }
    }
}
