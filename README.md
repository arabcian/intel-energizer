# Intel Energizer

Standalone Linux CLI tools extracted from [Centurion](https://github.com/arabcian/centurion). The package builds three binaries and requires no Centurion installation or Qt. Build on x86-64 Linux with Rust 1.89 or newer and a system linker.

```sh
cargo build --release --locked
cargo test --locked --all-targets
```

## Intel undervolt

`intel-energizer` provides the original Intel tuning CLI, including voltage offsets, status, power measurement, boot profiles, and automatic undervolt search. It retains Centurion’s Lenovo Legion, LOQ, and IdeaPad Gaming machine check and the Intel CPU and firmware checks. Hardware writes require root and working MSR access.

Install the undervolt and CPU stress binaries together in a root-owned directory. Automatic search invokes the installed sibling and requires readable kernel logs.

```sh
sudo install -o root -g root -m 0755 target/release/intel-energizer target/release/intel-cpustress /usr/local/bin/
intel-energizer --help
sudo /usr/local/bin/intel-energizer read
```

The `boot` and `daemon` commands read a root-owned JSON file at `/etc/intel-energizer/intel-uv-boot.json`. It accepts either a single profile or separate `ac` and `battery` profiles. The CLI stores runtime state under `/run/intel-energizer` and persistent search state under `/var/lib/intel-energizer`. Boot startup is configured separately by the operator.

## CPU stress

The original CPU test runs per-core or all-core loads and checks each result against a known value. Run manually as a regular user. Output is newline-delimited JSON.

```sh
target/release/intel-cpustress info
target/release/intel-cpustress allcore --load sse --seconds 5
```

## Memory stress

Install `stressapptest` or `memtester` through your distribution. The CLI prefers `stressapptest` and uses `memtester` when it is the available backend. It sizes the test against available memory (70% by default), caps `memtester` to the process’s memory-lock limit, and requires at least 64 MiB. Run as a regular user.

```sh
target/release/intel-memtest --seconds 60 --percent 25
```

Exit codes are 0 for pass, 1 for detected errors, 2 for invalid arguments, and 3 for an incomplete test or setup error. The result comes from the test backend. Centurion’s GUI result history, BIOS timing snapshots, and live kernel-event monitoring are outside this CLI.

## License

GPL-3.0-or-later. Derived from Centurion commit [9cb06f3](https://github.com/arabcian/centurion/commit/9cb06f30d904cd86078d506cdb5625b53c9f513d), copyright 2026 arabcian. The Intel implementation references intel-undervolt, undervolt.py, throttled, and ThrottleStop. The source comments identify applicable references.
