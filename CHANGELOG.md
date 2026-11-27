# Changelog

## 0.1.0 — 2026-11-25

First standalone release, extracted from Centurion.

- `intel-energizer` CLI: voltage offsets, IccMax, TCC offset, power limits, boot profiles, AC/battery daemon and automatic undervolt search.
- `intel-uv-helper` root helper and the Qt desktop application with the Intel Undervolt, CPU Test and Memory Test panels.
- `intel-cpustress` and `intel-memtest` stress tools.

Fixes made during the release review:

- The systemd unit is installed to `<prefix>/lib/systemd/system`. With `/usr` on Debian/Ubuntu or Fedora it used to land in a multiarch or `lib64` directory that systemd never reads.
- `intel-energizer apply`, `apply-file` and `throttlestop --apply` roll back the fields already written when one fails, and print the rollback. They used to leave a partial profile.
- The CLI rejects `nan` and `inf` arguments. `--core nan` used to be dropped silently and `measure --sleep nan` panicked.
- The undervolt lock probe restores the core offset it read in the same locked transaction. A profile written by the daemon just before the probe was overwritten with the older value.
- `cargo test` builds tests with optimisation. The unoptimised stress-kernel tests took more than ten minutes.
