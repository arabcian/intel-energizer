# Intel Energizer

Standalone Linux Qt application and CLI tools extracted from [Centurion](https://github.com/arabcian/centurion). The Qt application includes the Intel Undervolt page, CPU Test and Memory Test panels. Each can run independently of Centurion. The command-line tools can also be built separately. Build on x86-64 Linux with Rust 1.89 or newer and a system linker.

```sh
cargo build --release --locked
cargo test --locked --all-targets
```

## Desktop application

Build the Rust binaries above, then build the GUI with CMake 3.20+, a C++20 compiler and the Qt 6 Widgets development package. Install with the same prefix used at configure time. The commands below use /usr/local.

```sh
cmake -S gui -B build/gui -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr/local
cmake --build build/gui --parallel
ctest --test-dir build/gui --output-on-failure
sudo cmake --install build/gui
sudo install -m 0755 target/release/{intel-energizer,intel-cpustress,intel-memtest} /usr/local/bin/
sudo install -D -o root -g root -m 0755 target/release/intel-uv-helper /usr/local/libexec/intel-energizer/intel-uv-helper
intel-energizer-gui
```

Launch the GUI as your desktop user. Intel register operations use pkexec with a polkit authentication agent. The CPU test uses intel-cpustress and the memory panel uses stressapptest or memtester. Both panels store results under the user's XDG state directory. The BIOS column on Intel reports SMBIOS Type 17 configured speed when accessible. The original AMD AOD timing interface is specific to AMD firmware. Saving a boot profile writes configuration for the CLI's boot and daemon commands. On systemd, after verifying and saving a profile, run `sudo systemctl daemon-reload` and `sudo systemctl enable --now intel-energizer-daemon.service` to apply it at startup and after resume.

## Intel undervolt

`intel-energizer` provides the original Intel tuning CLI, including voltage offsets, status, power measurement, boot profiles, and automatic undervolt search. It identifies Intel family 6 processors independently of laptop or motherboard brand. Voltage writes require a verified model-specific domain map and firmware permission. Run `intel-energizer voltage-domains` to list mapped offsets and `intel-energizer offset-preview -50` to see the representable millivolt value without hardware access. On Arrow Lake-S/HX model 198, `apply --memss MV` and `--ngu MV` expose the memory-subsystem and fabric offsets. Hardware writes require root and working MSR access.

Install the undervolt and CPU stress binaries together in a root-owned directory. Automatic search invokes the installed sibling and requires readable kernel logs.

```sh
sudo install -o root -g root -m 0755 target/release/intel-energizer target/release/intel-cpustress /usr/local/bin/
intel-energizer --help
sudo /usr/local/bin/intel-energizer read
```

The `boot` and `daemon` commands read a root-owned JSON file at `/etc/intel-energizer/intel-uv-boot.json`. It accepts either a single profile or separate `ac` and `battery` profiles. The CLI stores runtime state under `/run/intel-energizer` and persistent search state under `/var/lib/intel-energizer`. The desktop installation includes an optional systemd daemon unit.

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

Exit codes are 0 for pass, 1 for detected errors, 2 for invalid arguments, and 3 for an incomplete test or setup error. The result comes from the test backend. The GUI keeps test history, captures firmware-reported configured memory speeds when readable, and monitors machine checks when the user can read /dev/kmsg.

## Disclaimer

Intel Energizer was written with the assistance of AI. It writes to CPU model-specific registers and can change voltage, power and memory settings. Incorrect values can cause system instability, crashes, data loss or hardware damage. You use this software entirely at your own risk and are solely responsible for any consequences. It is provided "as is", without warranty of any kind, as stated in the license below.

## License

GPL-3.0-or-later. Derived from Centurion commit [9cb06f3](https://github.com/arabcian/centurion/commit/9cb06f30d904cd86078d506cdb5625b53c9f513d), copyright 2026 arabcian. The Intel implementation references intel-undervolt, undervolt.py, throttled, and ThrottleStop. The source comments identify applicable references.
