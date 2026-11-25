<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="tr_TR">
    <context>
        <name>MemTestBox</name>
        <message>
            <source>Memory Test</source>
            <translation>Bellek testi</translation>
        </message>
        <message>
            <source>Checks memory timings by writing and reading back most of the free memory. Needs stressapptest or memtester: %1</source>
            <translation>Boş belleğin çoğunu yazıp geri okuyarak bellek zamanlamalarını denetler. stressapptest ya da memtester gerekir: %1</translation>
        </message>
        <message>
            <source>Writes and reads back a share of the free memory with %1 and watches for machine checks meanwhile. The machine is slow while it runs. Each result is kept with the BIOS memory timings in effect.</source>
            <translation>Boş belleğin bir kısmını %1 ile yazıp geri okur, bu sırada makine denetimi (MCE) olaylarını izler. Test sürerken makine yavaşlar. Her sonuç, o anki BIOS bellek zamanlamalarıyla birlikte saklanır.</translation>
        </message>
        <message>
            <source>Free Memory to Test</source>
            <translation>Test edilecek boş bellek</translation>
        </message>
        <message>
            <source>Duration</source>
            <translation>Süre</translation>
        </message>
        <message numerus="yes">
            <source>%n min</source>
            <translation>
                <numerusform>%n dk</numerusform>
            </translation>
        </message>
        <message>
            <source>Start</source>
            <translation>Başlat</translation>
        </message>
        <message>
            <source>Date</source>
            <translation>Tarih</translation>
        </message>
        <message>
            <source>Tool</source>
            <translation>Araç</translation>
        </message>
        <message>
            <source>Memory</source>
            <translation>Bellek</translation>
        </message>
        <message>
            <source>Result</source>
            <translation>Sonuç</translation>
        </message>
        <message>
            <source>BIOS Memory Timings</source>
            <translation>BIOS bellek zamanlamaları</translation>
        </message>
        <message>
            <source>memtester must lock the memory it tests, and this session may lock only %1 MiB (RLIMIT_MEMLOCK). Raise the limit (for example "@wheel - memlock unlimited" in /etc/security/limits.conf, then log in again) or install stressapptest, which needs no lock.</source>
            <translation>memtester test ettiği belleği kilitlemek zorunda ve bu oturum yalnızca %1 MiB kilitleyebiliyor (RLIMIT_MEMLOCK). Sınırı yükseltin (örneğin /etc/security/limits.conf içine "@wheel - memlock unlimited", sonra yeniden oturum açın) ya da kilit gerektirmeyen stressapptest'i kurun.</translation>
        </message>
        <message>
            <source>Too little free memory to test (under %1 MiB).</source>
            <translation>Test için boş bellek çok az (%1 MiB'ın altında).</translation>
        </message>
        <message>
            <source>Reading the BIOS memory timings…</source>
            <translation>BIOS bellek zamanlamaları okunuyor…</translation>
        </message>
        <message>
            <source>Stop</source>
            <translation>Durdur</translation>
        </message>
        <message numerus="yes">
            <source>Testing %1 MiB with %2: %3 of %4 min, %n error(s)</source>
            <translation>
                <numerusform>%2 ile %1 MiB test ediliyor: %3 / %4 dk, %n hata</numerusform>
            </translation>
        </message>
        <message numerus="yes">
            <source>%n machine check(s)</source>
            <translation>
                <numerusform>%n makine denetimi</numerusform>
            </translation>
        </message>
        <message>
            <source>held to the memlock limit</source>
            <translation>memlock sınırıyla kısıtlı</translation>
        </message>
        <message>
            <source>No errors.</source>
            <translation>Hata yok.</translation>
        </message>
        <message>
            <source>Memory errors: %1 from the test, %2 machine check(s). The memory timings or speed are not stable.</source>
            <translation>Bellek hataları: testten %1, %2 makine denetimi. Bellek zamanlamaları ya da hızı kararlı değil.</translation>
        </message>
        <message>
            <source>Not finished: the test was stopped or ended early (exit code %1).</source>
            <translation>Tamamlanmadı: test durduruldu ya da erken bitti (çıkış kodu %1).</translation>
        </message>
        <message>
            <source>memtester could not lock its memory: parts of it may have been swapped out and not tested.</source>
            <translation>memtester belleğini kilitleyemedi: bir kısmı takas alanına taşınmış ve test edilmemiş olabilir.</translation>
        </message>
        <message>
            <source>The result could not be saved to %1.</source>
            <translation>Sonuç %1 dosyasına kaydedilemedi.</translation>
        </message>
        <message>
            <source>Memory test failed</source>
            <translation>Bellek testi başarısız</translation>
        </message>
        <message numerus="yes">
            <source>%n error(s) during the memory test.</source>
            <translation>
                <numerusform>Bellek testi sırasında %n hata.</numerusform>
            </translation>
        </message>
        <message>
            <source>not readable on this machine</source>
            <translation>bu makinede okunamıyor</translation>
        </message>
        <message>
            <source>%1 MT/s</source>
            <translation>%1 MT/s</translation>
        </message>
        <message>
            <source>all Auto</source>
            <translation>tümü Auto</translation>
        </message>
        <message>
            <source>(changed this boot: not in effect until the next boot)</source>
            <translation>(bu açılışta değiştirildi: bir sonraki açılışa kadar etkin değil)</translation>
        </message>
        <message>
            <source>pass</source>
            <translation>geçti</translation>
        </message>
        <message>
            <source>fail</source>
            <translation>kaldı</translation>
        </message>
        <message>
            <source>incomplete</source>
            <translation>tamamlanmadı</translation>
        </message>
        <message>
            <source>%1 MiB</source>
            <translation>%1 MiB</translation>
        </message>
        <message>
            <source>The kernel log is not readable without a password here, so machine checks are not counted during the test; only the test's own results are.</source>
            <translation>Kernel günlüğü burada parolasız okunamıyor, bu yüzden test sırasında makine denetimleri sayılmaz; yalnızca testin kendi sonuçları sayılır.</translation>
        </message>
    </context>
    <context>
        <name>CpuStressBox</name>
        <message>
            <source>Reading CPU test capabilities…</source>
            <translation>CPU test yetenekleri okunuyor…</translation>
        </message>
        <message>
            <source>CPU Test</source>
            <translation>CPU testi</translation>
        </message>
        <message>
            <source>Checks a Curve Optimizer offset or an undervolt core by core. Needs centurion-cpustress, which is installed next to centurion-cooltest.</source>
            <translation>Curve Optimizer ofsetini ya da undervolt'u çekirdek çekirdek denetler. centurion-cooltest'in yanına kurulan centurion-cpustress gerekir.</translation>
        </message>
        <message>
            <source>Runs work whose correct result is known and compares every result, and watches for machine checks and lockups in the kernel log meanwhile. Per core: one thread visits every core in turn at its highest boost, where a Curve Optimizer or undervolt offset fails first; use it after per-core offsets. All cores: every CPU at once; use it after an all-core offset. SSE keeps the clock highest; AVX2 / AVX-512 add heat and current. An unstable offset can also freeze or reset the machine: the core that was loaded is then shown here after the reboot. A pass is evidence, not proof. Each result is kept with the CPU curve in effect.</source>
            <translation>Doğru sonucu bilinen işler çalıştırır, her sonucu karşılaştırır ve bu sırada kernel günlüğünde makine denetimi (MCE) ile kilitlenme olaylarını izler. Çekirdek başına: tek iş parçacığı sırayla her çekirdeğe en yüksek boost'ta gider; Curve Optimizer ya da undervolt ofseti ilk orada çöker. Çekirdek başına ofsetlerden sonra kullanın. Tüm çekirdekler: bütün CPU'lar aynı anda; tüm çekirdek ofsetinden sonra kullanın. SSE saati en yüksekte tutar; AVX2 / AVX-512 ısı ve akım ekler. Kararsız bir ofset makineyi dondurabilir ya da yeniden başlatabilir: o zaman yüklenen çekirdek yeniden başlatmadan sonra burada gösterilir. Geçmek kanıttır, kesinlik değil. Her sonuç o an etkin CPU eğrisiyle saklanır.</translation>
        </message>
        <message>
            <source>The kernel log is not readable without a password here, so machine checks are not counted during the test; only the test's own results are.</source>
            <translation>Kernel günlüğü burada parolasız okunamıyor, bu yüzden test sırasında makine denetimleri sayılmaz; yalnızca testin kendi sonuçları sayılır.</translation>
        </message>
        <message>
            <source>Per core</source>
            <translation>Çekirdek başına</translation>
        </message>
        <message>
            <source>All cores</source>
            <translation>Tüm çekirdekler</translation>
        </message>
        <message>
            <source>SSE (highest boost)</source>
            <translation>SSE (en yüksek boost)</translation>
        </message>
        <message>
            <source>Rounds</source>
            <translation>Tur</translation>
        </message>
        <message>
            <source>How many times every core is visited.</source>
            <translation>Her çekirdeğin kaç kez test edileceği.</translation>
        </message>
        <message>
            <source>Start</source>
            <translation>Başlat</translation>
        </message>
        <message>
            <source>Idle ↔ load transitions</source>
            <translation>Boşta ↔ yük geçişleri</translation>
        </message>
        <message>
            <source>The last third of each core's time (all cores: of the run) alternates short bursts with pauses of
1-200 ms, so the core keeps leaving idle states and boosting again. Curve Optimizer offsets often
fail there although a steady load passes.</source>
            <translation>Her çekirdeğin süresinin (tüm çekirdeklerde: testin) son üçte biri kısa yük patlamalarını 1-200 ms
duraklamalarla değiştirir; çekirdek sürekli boşta durumlarından çıkıp yeniden boost'a geçer. Curve Optimizer
ofsetleri sabit yükü geçse bile çoğu zaman burada çöker.</translation>
        </message>
        <message>
            <source>Hold the "CO validation" preset during the test</source>
            <translation>Test boyunca "CO validation" preset'ini uygula</translation>
        </message>
        <message>
            <source>Optimizations preset: boost on, every idle state on, machine checks polled every 10 s.
Applied when the test starts and taken back when it ends, returning the tuning that was in
effect before (it is held like a game session, so it also comes back if Centurion quits).
Asks for the administrator password; not applied while a game holds the tuning.</source>
            <translation>Optimizations preset'i: boost açık, tüm boşta durumları açık, makine denetimleri 10 sn'de bir yoklanır.
Test başlarken uygulanır, bitince geri alınır ve önceki ayarlar döner (oyun oturumu gibi tutulur;
Centurion kapanırsa da geri döner). Yönetici parolası sorar; bir oyun ayarları tutarken uygulanmaz.</translation>
        </message>
        <message>
            <source>centurion-cpustress could not read the CPU topology.</source>
            <translation>centurion-cpustress CPU topolojisini okuyamadı.</translation>
        </message>
        <message>
            <source>Date</source>
            <translation>Tarih</translation>
        </message>
        <message>
            <source>Test</source>
            <translation>Test</translation>
        </message>
        <message>
            <source>Duration</source>
            <translation>Süre</translation>
        </message>
        <message>
            <source>Errors</source>
            <translation>Hatalar</translation>
        </message>
        <message>
            <source>Result</source>
            <translation>Sonuç</translation>
        </message>
        <message>
            <source>Failed</source>
            <translation>Hatalı</translation>
        </message>
        <message>
            <source>CPU Curve</source>
            <translation>CPU eğrisi</translation>
        </message>
        <message>
            <source>while %1 was loaded</source>
            <translation>%1 yükteyken</translation>
        </message>
        <message>
            <source>during the all-core test</source>
            <translation>tüm çekirdek testi sırasında</translation>
        </message>
        <message>
            <source>The machine went down %1 (CPU curve: %2). Back that offset off before trusting it.</source>
            <translation>Makine %1 kapandı (CPU eğrisi: %2). Güvenmeden önce o ofseti geri çekin.</translation>
        </message>
        <message>
            <source>CPU test: the machine went down</source>
            <translation>CPU testi: makine kapandı</translation>
        </message>
        <message numerus="yes">
            <source>%n min</source>
            <translation>
                <numerusform>%n dk</numerusform>
            </translation>
        </message>
        <message>
            <source>CPU %1 (CCD%2 slot %3)</source>
            <translation>CPU %1 (CCD%2 slot %3)</translation>
        </message>
        <message>
            <source>CPU %1</source>
            <translation>CPU %1</translation>
        </message>
        <message>
            <source>The test settings are not valid.</source>
            <translation>Test ayarları geçerli değil.</translation>
        </message>
        <message>
            <source>Applying the "CO validation" preset…</source>
            <translation>"CO validation" preset'i uygulanıyor…</translation>
        </message>
        <message>
            <source>The preset was not applied (%1); the test did not start.</source>
            <translation>Preset uygulanmadı (%1); test başlamadı.</translation>
        </message>
        <message>
            <source>A game holds the tuning, so the "CO validation" preset is not in effect for this test.</source>
            <translation>Ayarları bir oyun tutuyor, bu yüzden "CO validation" preset'i bu testte etkin değil.</translation>
        </message>
        <message>
            <source>Some preset values could not be applied: %1</source>
            <translation>Bazı preset değerleri uygulanamadı: %1</translation>
        </message>
        <message>
            <source>Stop</source>
            <translation>Durdur</translation>
        </message>
        <message>
            <source>Per-core test: %1 of about %2 min, %3 of %4 cores done</source>
            <translation>Çekirdek başına test: yaklaşık %2 dk'nın %1. dk'sı, %4 çekirdekten %3 tanesi bitti</translation>
        </message>
        <message>
            <source>All-core test: %1 of %2 min</source>
            <translation>Tüm çekirdek testi: %2 dk'nın %1. dk'sı</translation>
        </message>
        <message>
            <source>now on %1</source>
            <translation>şimdi %1</translation>
        </message>
        <message numerus="yes">
            <source>%n error(s)</source>
            <translation>
                <numerusform>%n hata</numerusform>
            </translation>
        </message>
        <message numerus="yes">
            <source>%n machine check(s) / lockup(s)</source>
            <translation>
                <numerusform>%n makine denetimi / kilitlenme</numerusform>
            </translation>
        </message>
        <message>
            <source>The tuning from before the test could not be restored: %1. Use Optimizations → Restore originals.</source>
            <translation>Testten önceki ayarlar geri yüklenemedi: %1. Optimizations → Restore originals kullanın.</translation>
        </message>
        <message>
            <source>No errors. A pass is evidence, not proof: the offset may still fail under another load or at idle.</source>
            <translation>Hata yok. Geçmek kanıttır, kesinlik değil: ofset başka bir yükte ya da boştayken yine çökebilir.</translation>
        </message>
        <message>
            <source>%1 wrong result(s), %2 machine check(s) / lockup(s). The CPU curve in effect is not stable.</source>
            <translation>%1 yanlış sonuç, %2 makine denetimi / kilitlenme. Etkin CPU eğrisi kararlı değil.</translation>
        </message>
        <message>
            <source>Wrong results on: %1.</source>
            <translation>Yanlış sonuç verenler: %1.</translation>
        </message>
        <message>
            <source>Kernel errors named: %1.</source>
            <translation>Kernel hatalarının adlandırdıkları: %1.</translation>
        </message>
        <message>
            <source>Make the offset of those slots less negative (for example by 5) in Ryzen Curve and test again.</source>
            <translation>Ryzen Curve'de bu slotların ofsetini daha az negatif yapın (örneğin 5) ve yeniden test edin.</translation>
        </message>
        <message>
            <source>Not finished: the test was stopped or ended early (exit code %1).</source>
            <translation>Bitmedi: test durduruldu ya da erken bitti (çıkış kodu %1).</translation>
        </message>
        <message>
            <source>The result could not be saved to %1.</source>
            <translation>Sonuç %1 dosyasına kaydedilemedi.</translation>
        </message>
        <message>
            <source>CPU test failed</source>
            <translation>CPU testi başarısız</translation>
        </message>
        <message numerus="yes">
            <source>%n error(s) during the CPU test.</source>
            <translation>
                <numerusform>CPU testi sırasında %n hata.</numerusform>
            </translation>
        </message>
        <message>
            <source>pass</source>
            <translation>geçti</translation>
        </message>
        <message>
            <source>fail</source>
            <translation>başarısız</translation>
        </message>
        <message>
            <source>machine went down</source>
            <translation>makine kapandı</translation>
        </message>
        <message>
            <source>running</source>
            <translation>sürüyor</translation>
        </message>
        <message>
            <source>incomplete</source>
            <translation>tamamlanmadı</translation>
        </message>
        <message>
            <source>transitions</source>
            <translation>geçişler</translation>
        </message>
        <message numerus="yes">
            <source>%n kernel</source>
            <translation>
                <numerusform>%n kernel</numerusform>
            </translation>
        </message>
        <message>
            <source>Wait for the previous tuning preset to be restored.</source>
            <translation>Önceki optimizasyon ön ayarının geri yüklenmesini bekleyin.</translation>
        </message>
    </context>
    <context>
        <name>IntelTab</name>
        <message>
            <source>Voltage &amp;&amp; safety</source>
            <translation>Voltaj ve güvenlik</translation>
        </message>
        <message>
            <source>Limits &amp;&amp; throttling</source>
            <translation>Sınırlar ve kısıtlama</translation>
        </message>
        <message>
            <source>ACTIVITY LOG  ·  MSR operations</source>
            <translation>ETKİNLİK GÜNLÜĞÜ  ·  MSR işlemleri</translation>
        </message>
        <message>
            <source>Voltage, safety &amp;&amp; startup</source>
            <translation>Voltaj, güvenlik ve başlangıç</translation>
        </message>
        <message>
            <source>Compare…</source>
            <translation>Karşılaştır…</translation>
        </message>
        <message>
        <source>Domain sharing is not inferred from names or frequencies. A raw core type is shown only when the kernel reports it.</source>
        <translation>Alan paylaşımı adlardan veya frekanslardan çıkarılmaz. Ham çekirdek türü yalnızca çekirdek bildirirse gösterilir.</translation>
    </message>
    <message>
        <source>Draft</source>
        <translation>Taslak</translation>
    </message>
    <message>
        <source>Intel Voltage Domains and CPU Topology</source>
        <translation>Intel Gerilim Alanları ve CPU Topolojisi</translation>
    </message>
    <message>
        <source>Last voltage readback: %1 (snapshot, not live)</source>
        <translation>Son gerilim okuması: %1 (anlık görüntü, canlı değil)</translation>
    </message>
    <message>
        <source>Mailbox status</source>
        <translation>Mailbox durumu</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Hayır</translation>
    </message>
    <message>
        <source>No voltage readback has been captured.</source>
        <translation>Gerilim okuması kaydedilmedi.</translation>
    </message>
    <message>
        <source>Offset</source>
        <translation>Ofset</translation>
    </message>
    <message>
        <source>Plane</source>
        <translation>Gerilim düzlemi</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation>Seçili</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>Kullanılamıyor</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Bilinmiyor</translation>
    </message>
    <message>
        <source>Voltage Domain Readback</source>
        <translation>Gerilim Alanı Okuması</translation>
    </message>
    <message>
        <source>Voltage Domains and CPU Topology…</source>
        <translation>Gerilim Alanları ve CPU Topolojisi…</translation>
    </message>
    <message>
        <source>Voltage plane support is based on the last OC mailbox response. Logical CPU topology comes from sysfs. No voltage probe or write is started here.</source>
        <translation>Gerilim düzlemi desteği son OC mailbox yanıtına dayanır. Mantıksal CPU topolojisi sysfs'ten gelir. Burada gerilim testi veya yazma işlemi başlatılmaz.</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Evet</translation>
    </message>
</context>
    <context>
        <name>privileged</name>
        <message>
            <source>pkexec was not found. Install polkit (sys-auth/polkit).</source>
            <translation>pkexec bulunamadı. polkit'i kurun (sys-auth/polkit).</translation>
        </message>
        <message>
            <source>helper not found: %1</source>
            <translation>yardımcı bulunamadı: %1</translation>
        </message>
        <message>
            <source>the helper did not finish in time. If an authorization dialog is still open, close it and try again. Otherwise the helper may still be finishing in the background (it stops on its own within a few minutes): check the current values before retrying.</source>
            <translation>yardımcı zamanında bitmedi. Bir yetkilendirme penceresi hâlâ açıksa kapatıp yeniden deneyin. Aksi hâlde yardımcı arka planda bitmeye devam ediyor olabilir (birkaç dakika içinde kendiliğinden durur): yeniden denemeden önce güncel değerleri kontrol edin.</translation>
        </message>
        <message>
            <source>could not start pkexec: %1</source>
            <translation>pkexec başlatılamadı: %1</translation>
        </message>
        <message>
            <source>the authorization request was dismissed.</source>
            <translation>yetkilendirme isteği kapatıldı.</translation>
        </message>
        <message>
            <source>polkit did not authorize this action.</source>
            <translation>polkit bu işleme izin vermedi.</translation>
        </message>
        <message>
            <source>polkit did not authorize this action: %1</source>
            <translation>polkit bu işleme izin vermedi: %1</translation>
        </message>
        <message>
            <source>This helper is outside %1, so the pinned polkit actions do not apply to it.</source>
            <translation>Bu yardımcı %1 dışında olduğundan sabitlenmiş polkit eylemleri ona uygulanmaz.</translation>
        </message>
        <message>
            <source>helper exited with code %1.</source>
            <translation>yardımcı %1 koduyla çıktı.</translation>
        </message>
        <message>
            <source>pkexec was not found. Install polkit (%1).</source>
            <translation>pkexec bulunamadı. polkit paketini kurun (%1).</translation>
        </message>
        <message>
        <source>The helper crashed or exceeded the reply size limit; its result is unknown.</source>
        <translation>Yardımcı program çöktü veya yanıt boyutu sınırını aştı; sonucu bilinmiyor.</translation>
    </message>
        <message>
        <source>The helper reported success but exited with code %1; its result is unknown.</source>
        <translation>Yardımcı program başarı bildirdi ancak %1 koduyla çıktı; sonucu bilinmiyor.</translation>
    </message>
        <message>
            <source>Running</source>
            <translation>Çalışıyor</translation>
        </message>
        <message>
            <source>Timed out; process still tracked</source>
            <translation>Zaman aşımı; süreç hâlâ izleniyor</translation>
        </message>
        <message>
            <source>Owner closed; process still tracked</source>
            <translation>Sahip kapandı; süreç hâlâ izleniyor</translation>
        </message>
        <message>
            <source>Exited; outcome unknown</source>
            <translation>Sonlandı; sonuç bilinmiyor</translation>
        </message>
        <message>
            <source>Exited; helper reported OK (not independent verification)</source>
            <translation>Sonlandı; yardımcı başarılı bildirdi (bağımsız doğrulama değil)</translation>
        </message>
        <message>
            <source>Exited; helper reported failure</source>
            <translation>Sonlandı; yardımcı hata bildirdi</translation>
        </message>
        <message>
            <source>Failed to start</source>
            <translation>Başlatılamadı</translation>
        </message>
            <message><source>Rejected: conflicting resource reservation</source><translation>Reddedildi: çakışan kaynak rezervasyonu</translation></message>
        <message><source>A conflicting operation is still running; no helper was started.</source><translation>Çakışan işlem hâlâ çalışıyor; yardımcı program başlatılmadı.</translation></message>
        <message>
            <source>The helper timed out; it has now exited, but its result is unknown.</source>
            <translation>Yardımcı zaman aşımına uğradı; artık sonlandı, ancak sonucu bilinmiyor.</translation>
        </message>
            <message>
            <source>CO Search session</source>
            <translation>CO Arama oturumu</translation>
        </message>
        </context>
    <context>
        <name>diag</name>
        <message>
            <source>The requested EDID bytes are missing or invalid.</source>
            <translation>İstenen EDID baytları eksik veya geçersiz.</translation>
        </message>
        <message>
            <source>Some connector captures contain invalid byte rows and were omitted.</source>
            <translation>Geçersiz bayt satırları içeren bağlantı noktası kayıtları gösterilmedi.</translation>
        </message>
        <message>
            <source>Needs attention</source>
            <translation>İlgilenilmeli</translation>
        </message>
        <message>
            <source>Review</source>
            <translation>İncele</translation>
        </message>
        <message>
            <source>Unknown</source>
            <translation>Bilinmiyor</translation>
        </message>
        <message>
            <source>No problem found</source>
            <translation>Sorun bulunamadı</translation>
        </message>
        <message>
            <source>Information</source>
            <translation>Bilgi</translation>
        </message>
        <message>
            <source>1 finding needs attention</source>
            <translation>1 bulgu ilgilenilmeli</translation>
        </message>
        <message>
            <source>%1 findings need attention</source>
            <translation>%1 bulgu ilgilenilmeli</translation>
        </message>
        <message>
            <source>, %1 to review</source>
            <translation>, %1 incelenecek</translation>
        </message>
        <message>
            <source>1 finding to review</source>
            <translation>1 bulgu incelenecek</translation>
        </message>
        <message>
            <source>%1 findings to review</source>
            <translation>%1 bulgu incelenecek</translation>
        </message>
        <message>
            <source>No problem found in the data that could be read</source>
            <translation>Okunabilen verilerde sorun bulunamadı</translation>
        </message>
        <message>
            <source>Not enough data for a verdict</source>
            <translation>Karar için yeterli veri yok</translation>
        </message>
        <message>
            <source>Information only</source>
            <translation>Yalnızca bilgi</translation>
        </message>
        <message>
            <source> · %1 source(s) unavailable</source>
            <translation> · %1 kaynak okunamadı</translation>
        </message>
        <message>
            <source>Verdict: %1 — %2</source>
            <translation>Karar: %1 — %2</translation>
        </message>
        <message>
            <source>(nothing to list)</source>
            <translation>(listelenecek bir şey yok)</translation>
        </message>
        <message>
            <source>Limits of this check:</source>
            <translation>Bu denetimin sınırları:</translation>
        </message>
        <message>
            <source>Technical details:</source>
            <translation>Teknik ayrıntılar:</translation>
        </message>
        <message>
            <source>ⓘ Terms: %1</source>
            <translation>ⓘ Terimler: %1</translation>
        </message>
        <message>
            <source>Makes this change now (asks for the administrator password).</source>
            <translation>Bu değişikliği şimdi yapar (yönetici parolası ister).</translation>
        </message>
        <message>
            <source>%1

%2?</source>
            <translation>%1

%2?</translation>
        </message>
        <message>
        <source>Explore hierarchy…</source>
        <translation>Hiyerarşiyi incele…</translation>
    </message>
    <message>
        <source>Filter hierarchy…</source>
        <translation>Hiyerarşiyi filtrele…</translation>
    </message>
    <message>
        <source>Incompatible diagnostic snapshot schema or report code.</source>
        <translation>Uyumsuz tanılama anlık görüntüsü şeması veya rapor kodu.</translation>
    </message>
    <message>
        <source>Invalid diagnostic snapshot record.</source>
        <translation>Geçersiz tanılama anlık görüntüsü kaydı.</translation>
    </message>
    <message>
        <source>Report verdict changed.</source>
        <translation>Rapor değerlendirmesi değişti.</translation>
    </message>
    <message>
        <source>No verified progressive timing or explicit VRR range to plot.</source>
        <translation>Grafikte gösterilebilecek doğrulanmış progresif zamanlama veya açık VRR aralığı yok.</translation>
    </message>
        <message>
        <source>Active</source>
        <translation>Etkin</translation>
    </message>
        <message>
        <source>Total</source>
        <translation>Toplam</translation>
    </message>
        <message>
        <source>Selected byte offset</source>
        <translation>Seçili bayt konumu</translation>
    </message>
        <message>
        <source>Explicit VRR: %1–%2 Hz (%3)</source>
        <translation>Açık VRR: %1–%2 Hz (%3)</translation>
    </message>
        <message>
        <source>Explicit VRR range unavailable; a general refresh range is not VRR evidence.</source>
        <translation>Açık VRR aralığı mevcut değil; genel yenileme aralığı VRR kanıtı değildir.</translation>
    </message>
        <message>
        <source>The table lists verified base and CTA detailed timings. The plot shows progressive timings and the explicit VRR range.</source>
        <translation>Tablo, temel EDID ve CTA bloklarındaki doğrulanmış ayrıntılı zamanlamaları listeler. Grafik, aşamalı zamanlamaları ve açıkça bildirilen VRR aralığını gösterir.</translation>
    </message>
    <message><source>Scan mode</source><translation>Tarama modu</translation></message>
    <message><source>Frame rate (Hz)</source><translation>Kare hızı (Hz)</translation></message>
    <message><source>Field rate (Hz)</source><translation>Alan hızı (Hz)</translation></message>
    <message><source>Interlaced</source><translation>Geçmeli</translation></message>
    <message><source>Progressive</source><translation>Aşamalı</translation></message>
        <message>
        <source>Save captured EDID…</source>
        <translation>Yakalanan EDID’yi kaydet…</translation>
    </message>
        <message>
        <source>Export EDID</source>
        <translation>EDID dışa aktarımı</translation>
    </message>
        <message>
        <source>The captured bytes may contain a display serial number and may be incomplete or damaged. This saves a diagnostic copy, not a validated override. Continue?</source>
        <translation>Yakalanan baytlar ekran seri numarası içerebilir, eksik veya bozuk olabilir. Bu işlem doğrulanmış bir EDID geçersiz kılma dosyası değil, tanılama kopyası kaydeder. Devam edilsin mi?</translation>
    </message>
        <message>
        <source>Binary files (*.bin)</source>
        <translation>İkili dosyalar (*.bin)</translation>
    </message>
        <message>
        <source>USB-C PD Profile View</source>
        <translation>USB-C PD Profil Görünümü</translation>
    </message>
        <message>
        <source>Captured partner capabilities only. Negotiated contract is unknown; the supply measurements below are not attributed to the selected port.</source>
        <translation>Yalnızca yakalanan karşı cihaz kapasiteleri. Anlaşılan PD sözleşmesi bilinmiyor; aşağıdaki güç kaynağı ölçümleri seçili bağlantı noktasına atfedilmez.</translation>
    </message>
        <message>
        <source>Independent supply measurements and reported limits</source>
        <translation>Bağımsız güç kaynağı ölçümleri ve bildirilen sınırlar</translation>
    </message>
        <message>
        <source>Port %1 · role %2 · partner %3 · reported maximum %4</source>
        <translation>Bağlantı noktası %1 · rol %2 · karşı cihaz %3 · bildirilen üst sınır %4</translation>
    </message>
        <message>
        <source>No verified positive source capacity in this capture.</source>
        <translation>Bu kayıtta doğrulanmış pozitif kaynak kapasitesi bulunmuyor.</translation>
    </message>
        <message>
        <source>First 32 verified profiles plotted; the table contains all captured profiles.</source>
        <translation>İlk 32 doğrulanmış profil çizildi; tablo yakalanan tüm profilleri içerir.</translation>
    </message>
        <message>
        <source>Live ACPI notifications</source>
        <translation>Canlı ACPI bildirimleri</translation>
    </message>
    <message>
        <source>Live ACPI notifications…</source>
        <translation>Canlı ACPI bildirimleri…</translation>
    </message>
    <message>
        <source>Events are received only while this viewer is open. Device links use exact identifiers in the captured inventory; they are not proof of historical binding or cause.</source>
        <translation>Olaylar yalnızca bu pencere açıkken alınır. Aygıt bağlantıları kaydedilmiş envanterdeki tam tanımlayıcıları kullanır; geçmiş bağlantının veya nedenselliğin kanıtı değildir.</translation>
    </message>
    <message>
        <source>Received (UTC)</source>
        <translation>Alınma zamanı (UTC)</translation>
    </message>
    <message>
        <source>Device class</source>
        <translation>Aygıt sınıfı</translation>
    </message>
    <message>
        <source>Bus ID</source>
        <translation>Veriyolu kimliği</translation>
    </message>
    <message>
        <source>Type (hex)</source>
        <translation>Tür (onaltılık)</translation>
    </message>
    <message>
        <source>Data (hex)</source>
        <translation>Veri (onaltılık)</translation>
    </message>
    <message>
        <source>Inventory match</source>
        <translation>Envanter eşleşmesi</translation>
    </message>
    <message>
        <source>Inspect matched device…</source>
        <translation>Eşleşen aygıtı incele…</translation>
    </message>
    <message>
        <source>Clear visible notifications</source>
        <translation>Görünen bildirimleri temizle</translation>
    </message>
    <message>
        <source>Received: %1 · older rows omitted: %2 · observed capture gaps: %3</source>
        <translation>Alınan: %1 · çıkarılan eski satır: %2 · gözlenen kayıt boşluğu: %3</translation>
    </message>
    <message>
        <source>ACPI netlink subscription unavailable (unsupported or inaccessible).</source>
        <translation>ACPI netlink aboneliği kullanılamıyor (desteklenmiyor veya erişilemiyor).</translation>
    </message>
    <message>
        <source>Exact identifier candidate</source>
        <translation>Tam tanımlayıcı adayı</translation>
    </message>
    <message>
        <source>Ambiguous identifier</source>
        <translation>Belirsiz tanımlayıcı</translation>
    </message>
    <message>
        <source>No verified inventory link</source>
        <translation>Doğrulanmış envanter bağlantısı yok</translation>
    </message>
    <message>
        <source>Power operation mode: %1</source>
        <translation>Güç çalışma modu: %1</translation>
    </message>
    <message>
        <source>Kernel sequence</source>
        <translation>Kernel sıra numarası</translation>
    </message>
</context>
    <context>
        <name>systemdiagnostics</name>
        <message>
            <source>The firmware interfaces the kernel found: WMI objects with the driver that claims each, firmware settings exposed through firmware-attributes, and the ACPI tables present. No setting is changed. Reading some kernel attributes (an ACPI device's status, some firmware-attributes values) makes the kernel evaluate the matching firmware method.</source>
            <translation>Çekirdeğin bulduğu firmware arayüzleri: bağlı sürücüleriyle WMI nesneleri, firmware-attributes üzerinden sunulan firmware ayarları ve mevcut ACPI tabloları. Hiçbir ayar değiştirilmez. Bazı çekirdek özniteliklerini okumak (ACPI aygıtının status değeri, bazı firmware-attributes değerleri) çekirdeğin ilgili firmware metodunu çalıştırmasına yol açar.</translation>
        </message>
        <message>
            <source>Device inventory unavailable or inaccessible: %1</source>
            <translation>Aygıt envanteri yok veya erişilemiyor: %1</translation>
        </message>
        <message>
            <source>Device inventory capped at 512 entries: %1</source>
            <translation>Aygıt envanteri 512 kayıtla sınırlandırıldı: %1</translation>
        </message>
        <message>
            <source>Device unavailable or detached</source>
            <translation>Aygıt yok veya bağlantısı kopmuş</translation>
        </message>
        <message>
            <source>Bound driver observed</source>
            <translation>Bağlı sürücü gözlemlendi</translation>
        </message>
        <message>
            <source>Driver link unresolved</source>
            <translation>Sürücü bağlantısı çözümlenemedi</translation>
        </message>
        <message>
            <source>No driver link observed</source>
            <translation>Sürücü bağlantısı gözlemlenmedi</translation>
        </message>
        <message>
            <source>Driver evidence</source>
            <translation>Sürücü kanıtı</translation>
        </message>
        <message>
            <source>GUID instances</source>
            <translation>GUID örnekleri</translation>
        </message>
        <message>
            <source>%1 object(s) have no observed driver link. A missing link is not proof of a firmware failure. GUID instance counts describe this inventory only.</source>
            <translation>%1 nesnede sürücü bağlantısı gözlemlenmedi. Eksik bağlantı firmware arızasının kanıtı değildir. GUID örnek sayıları yalnızca bu envanteri tanımlar.</translation>
        </message>
        <message>
            <source>Only kernel-exposed device objects are shown, not the complete AML namespace. Centurion invokes no AML, EC or WMI method itself; reading Status makes the kernel evaluate the device's _STA.</source>
            <translation>Yalnız çekirdeğin sunduğu aygıt nesneleri gösterilir, AML ad alanının tamamı değil. Centurion kendisi AML, EC veya WMI metodu çağırmaz; Status değerini okumak çekirdeğin aygıtın _STA metodunu çalıştırmasına yol açar.</translation>
        </message>
        <message>
            <source>ACPI / WMI Kernel Evidence</source>
            <translation>ACPI / WMI Çekirdek Kanıtları</translation>
        </message>
        <message>
            <source>Time</source>
            <translation>Zaman</translation>
        </message>
        <message>
            <source>Boot ID</source>
            <translation>Açılış kimliği</translation>
        </message>
        <message>
            <source>Sequence</source>
            <translation>Sıra</translation>
        </message>
        <message>
            <source>Evidence type</source>
            <translation>Kanıt türü</translation>
        </message>
        <message>
            <source>Candidate devices</source>
            <translation>Aday aygıtlar</translation>
        </message>
        <message>
            <source>Candidates in inventory</source>
            <translation>Envanterdeki adaylar</translation>
        </message>
        <message>
            <source>Kernel message</source>
            <translation>Çekirdek mesajı</translation>
        </message>
        <message>
            <source>Currently observed drivers</source>
            <translation>Şu anda gözlemlenen sürücüler</translation>
        </message>
        <message>
            <source>Exact identifier mentions and driver-prefix candidates refer to the current inventory, not proof of the historical binding or cause. Only full matching boot IDs are used; legacy prefixes are excluded. Saved kernel logs are incomplete and no new scan is started.</source>
            <translation>Tam kimlik ifadeleri ve sürücü öneki adayları güncel envanteri gösterir; geçmişteki sürücü bağlantısının veya olay nedeninin kanıtı değildir. Yalnızca tam eşleşen açılış kimlikleri kullanılır; eski kısa önekler dışlanır. Kayıtlı çekirdek günlükleri eksik olabilir ve yeni tarama başlatılmaz.</translation>
        </message>
        <message>
            <source>Exact instance mention</source>
            <translation>Tam örnek kimliği ifadesi</translation>
        </message>
        <message>
            <source>GUID or mixed identifier mention</source>
            <translation>GUID veya karma kimlik ifadesi</translation>
        </message>
        <message>
            <source>Driver prefix candidate</source>
            <translation>Sürücü öneki adayı</translation>
        </message>
        <message>
            <source>ACPI / WMI class only</source>
            <translation>Yalnızca ACPI / WMI sınıfı</translation>
        </message>
        <message>
            <source>More candidates omitted</source>
            <translation>Diğer adaylar gösterilmiyor</translation>
        </message>
        <message>
            <source>No matching current-boot ACPI / WMI evidence in the supplied saved kernel log; absence of evidence does not mean no events occurred.</source>
            <translation>Verilen kayıtlı çekirdek günlüğünde güncel açılışa ait eşleşen ACPI / WMI kanıtı yok; kanıt yokluğu olay gerçekleşmediği anlamına gelmez.</translation>
        </message>
        <message>
            <source>ACPI / WMI evidence capped at 256 newest matching records.</source>
            <translation>ACPI / WMI kanıtları en yeni 256 eşleşen kayıtla sınırlandırıldı.</translation>
        </message>
        <message>
            <source>Only fixed-size table headers are inspected. Length is the value declared by the header, not a verified file size. AML is not interpreted or executed; checksum verification is not claimed.</source>
            <translation>Yalnızca sabit boyutlu tablo başlıkları incelenir. Uzunluk, başlığın bildirdiği değerdir; doğrulanmış dosya boyutu değildir. AML yorumlanmaz veya çalıştırılmaz; sağlama toplamı doğrulaması yapıldığı iddia edilmez.</translation>
        </message>
        <message>
            <source>ACPI table directory unavailable or inaccessible: %1</source>
            <translation>ACPI tablo dizini yok veya erişilemiyor: %1</translation>
        </message>
        <message>
            <source>ACPI table inventory is bounded; additional entries may be omitted.</source>
            <translation>ACPI tablo envanteri sınırlıdır; ek kayıtlar gösterilmeyebilir.</translation>
        </message>
        <message>
            <source>%1 (%2): link width could not be verified</source>
            <translation>%1 (%2): bağlantı genişliği doğrulanamadı</translation>
        </message>
        <message>
            <source>%1 (%2): uncorrectable PCIe errors recorded</source>
            <translation>%1 (%2): düzeltilemeyen PCIe hataları kaydedildi</translation>
        </message>
        <message>
            <source>Comparison</source>
            <translation>Karşılaştırma</translation>
        </message>
        <message>
            <source>Current link</source>
            <translation>Mevcut bağlantı</translation>
        </message>
        <message>
            <source>Endpoint identity changed at this PCI address or is unverified</source>
            <translation>Bu PCI adresindeki uç aygıt kimliği değişti veya doğrulanamadı</translation>
        </message>
        <message>
            <source>Link Changes Since Previous Scan</source>
            <translation>Önceki Taramadan Sonraki Bağlantı Değişiklikleri</translation>
        </message>
        <message>
            <source>Link comparison starts with the next scan of this boot.</source>
            <translation>Bağlantı karşılaştırması bu açılışın sonraki taramasında başlar.</translation>
        </message>
        <message>
            <source>Link reading changed; power state may differ</source>
            <translation>Bağlantı ölçümü değişti; güç durumu farklı olabilir</translation>
        </message>
        <message>
            <source>Link width unknown</source>
            <translation>Bağlantı genişliği bilinmiyor</translation>
        </message>
        <message>
            <source>No link reading changed among the sampled devices.</source>
            <translation>Ölçülen aygıtlarda bağlantı değeri değişmedi.</translation>
        </message>
        <message>
            <source>Not readable in this scan</source>
            <translation>Bu taramada okunamadı</translation>
        </message>
        <message>
            <source>PCI address</source>
            <translation>PCI adresi</translation>
        </message>
        <message>
            <source>Previous link</source>
            <translation>Önceki bağlantı</translation>
        </message>
        <message>
            <source>PCIe Link Check</source>
            <translation>PCIe Bağlantı Denetimi</translation>
        </message>
        <message>
            <source>The PCIe link every device trained at, against what both ends of the link can do. A narrower link than possible is a hardware or BIOS limit; a slower one at idle is normal power saving.</source>
            <translation>Her aygıtın kurduğu PCIe bağlantısı, bağlantının iki ucunun yapabildiğiyle karşılaştırmalı. Olabileceğinden dar bir bağlantı donanım ya da BIOS sınırıdır; boştayken daha yavaş olması normal güç tasarrufudur.</translation>
        </message>
        <message>
            <source>Speed drops to save power when a device is idle (GPUs go to PCIe 1.0 at the desktop); check under load before judging the speed.</source>
            <translation>Aygıt boştayken güç tasarrufu için hız düşer (masaüstünde GPU'lar PCIe 1.0'a iner); hızı değerlendirmeden önce yük altında kontrol edin.</translation>
        </message>
        <message>
            <source>A device that is runtime-suspended shows the last link it had.</source>
            <translation>Çalışırken askıya alınmış bir aygıt sahip olduğu son bağlantıyı gösterir.</translation>
        </message>
        <message>
            <source>Device Links</source>
            <translation>Aygıt bağlantıları</translation>
        </message>
        <message>
            <source>Device</source>
            <translation>Aygıt</translation>
        </message>
        <message>
            <source>Driver</source>
            <translation>Sürücü</translation>
        </message>
        <message>
            <source>Link now</source>
            <translation>Şu anki bağlantı</translation>
        </message>
        <message>
            <source>Possible</source>
            <translation>Olası</translation>
        </message>
        <message>
            <source>Power</source>
            <translation>Güç</translation>
        </message>
        <message>
            <source>AER (corr / non-fatal / fatal)</source>
            <translation>AER (düzeltilen / ölümcül olmayan / ölümcül)</translation>
        </message>
        <message>
            <source>Status</source>
            <translation>Durum</translation>
        </message>
        <message>
            <source>full link</source>
            <translation>tam bağlantı</translation>
        </message>
        <message>
            <source>narrower: x%1 of x%2</source>
            <translation>daha dar: x%2 yerine x%1</translation>
        </message>
        <message>
            <source>%1 (%2) runs at x%3 of a possible x%4</source>
            <translation>%1 (%2), olası x%4 yerine x%3 ile çalışıyor</translation>
        </message>
        <message>
            <source>Width does not drop for power saving the way speed does: a narrower link usually means a seating, riser or BIOS lane-split limit, or lanes the board does not wire (check the laptop's specification).</source>
            <translation>Genişlik, hız gibi güç tasarrufu için düşmez: daha dar bir bağlantı genellikle yerleşim, riser ya da BIOS hat bölme sınırı ya da kartın bağlamadığı hatlar demektir (dizüstünün teknik özelliklerine bakın).</translation>
        </message>
        <message>
            <source>Compare after a cold boot; if it stays narrow on a desktop, reseat the card.</source>
            <translation>Soğuk açılıştan sonra karşılaştırın; masaüstünde dar kalırsa kartı yeniden yerleştirin.</translation>
        </message>
        <message>
            <source>slower now (PCIe %1 of %2)</source>
            <translation>şu an daha yavaş (PCIe %2 yerine %1)</translation>
        </message>
        <message>
            <source>%1 PCIe port(s) / bridge(s) not listed. Possible = the lower of the device's and its port's maximum.</source>
            <translation>%1 PCIe bağlantı noktası / köprü listelenmedi. Olası = aygıtın ve bağlı olduğu noktanın maksimumundan düşük olanı.</translation>
        </message>
        <message>
            <source>No device reports a PCIe link</source>
            <translation>Hiçbir aygıt PCIe bağlantısı bildirmiyor</translation>
        </message>
        <message>
            <source>Every device trained at its full link width</source>
            <translation>Her aygıt tam bağlantı genişliğinde kuruldu</translation>
        </message>
        <message>
            <source>Lower speeds shown are power saving unless they stay low under load.</source>
            <translation>Gösterilen düşük hızlar, yük altında da düşük kalmadıkça güç tasarrufudur.</translation>
        </message>
        <message>
            <source>Wi-Fi &amp; Bluetooth Check</source>
            <translation>Wi-Fi ve Bluetooth Denetimi</translation>
        </message>
        <message>
            <source>Each wireless adapter with its driver and state, radio kill switches, and firmware files the kernel asked for and did not find.</source>
            <translation>Her kablosuz bağdaştırıcı, sürücüsü ve durumuyla; radyo kapatma anahtarları ve çekirdeğin isteyip bulamadığı firmware dosyaları.</translation>
        </message>
        <message>
            <source>A firmware file present on disk is not proof that it is the version the driver wants; the kernel log says what it loaded.</source>
            <translation>Diskte bulunan bir firmware dosyası, sürücünün istediği sürüm olduğunun kanıtı değildir; neyi yüklediğini çekirdek günlüğü söyler.</translation>
        </message>
        <message>
            <source>Adapters</source>
            <translation>Bağdaştırıcılar</translation>
        </message>
        <message>
            <source>Interface</source>
            <translation>Arayüz</translation>
        </message>
        <message>
            <source>State</source>
            <translation>Durum</translation>
        </message>
        <message>
            <source>registered</source>
            <translation>kayıtlı</translation>
        </message>
        <message>
            <source>No wireless adapter registered</source>
            <translation>Kayıtlı kablosuz bağdaştırıcı yok</translation>
        </message>
        <message>
            <source>Either there is none, or its driver did not load (S18 lists devices without a driver).</source>
            <translation>Ya hiç yok ya da sürücüsü yüklenmedi (S18 sürücüsü olmayan aygıtları listeler).</translation>
        </message>
        <message>
            <source>Radio Switches (rfkill)</source>
            <translation>Radyo anahtarları (rfkill)</translation>
        </message>
        <message>
            <source>Name</source>
            <translation>Ad</translation>
        </message>
        <message>
            <source>Type</source>
            <translation>Tür</translation>
        </message>
        <message>
            <source>Software</source>
            <translation>Yazılım</translation>
        </message>
        <message>
            <source>Hardware</source>
            <translation>Donanım</translation>
        </message>
        <message>
            <source>blocked</source>
            <translation>engelli</translation>
        </message>
        <message>
            <source>on</source>
            <translation>açık</translation>
        </message>
        <message>
            <source>%1 (%2) is blocked in hardware</source>
            <translation>%1 (%2) donanımsal olarak engelli</translation>
        </message>
        <message>
            <source>A switch, key combination or BIOS setting turned it off; software cannot undo it.</source>
            <translation>Bir anahtar, tuş kombinasyonu ya da BIOS ayarı onu kapattı; yazılım bunu geri alamaz.</translation>
        </message>
        <message>
            <source>%1 (%2) is turned off in software</source>
            <translation>%1 (%2) yazılımla kapatılmış</translation>
        </message>
        <message>
            <source>Airplane mode or the desktop's switch; rfkill unblock turns it back on.</source>
            <translation>Uçak modu ya da masaüstünün anahtarı; rfkill unblock onu yeniden açar.</translation>
        </message>
        <message>
            <source>Firmware the Kernel Could Not Load (Saved Kernel Log)</source>
            <translation>Çekirdeğin yükleyemediği firmware (kaydedilen çekirdek günlüğü)</translation>
        </message>
        <message>
            <source>File</source>
            <translation>Dosya</translation>
        </message>
        <message>
            <source>Requested by</source>
            <translation>İsteyen</translation>
        </message>
        <message>
            <source>On disk now</source>
            <translation>Şu an diskte</translation>
        </message>
        <message>
            <source>missing</source>
            <translation>eksik</translation>
        </message>
        <message>
            <source>Radio firmware %1 is missing</source>
            <translation>Radyo firmware'i %1 eksik</translation>
        </message>
        <message>
            <source>%1 asked for it and the file is not installed. Drivers sometimes try several versions; it matters if the adapter does not work.</source>
            <translation>%1 bunu istedi ve dosya kurulu değil. Sürücüler bazen birkaç sürümü dener; bağdaştırıcı çalışmıyorsa önemlidir.</translation>
        </message>
        <message>
            <source>Install / update the firmware package (Gentoo: sys-kernel/linux-firmware; check its USE / savedconfig selection).</source>
            <translation>Firmware paketini kurun / güncelleyin (Gentoo: sys-kernel/linux-firmware; USE / savedconfig seçimini kontrol edin).</translation>
        </message>
        <message>
            <source>Some drivers ask for optional or newer files first and fall back quietly; a missing file matters when its device does not work.</source>
            <translation>Bazı sürücüler önce isteğe bağlı ya da daha yeni dosyaları ister ve sessizce geri düşer; eksik bir dosya, aygıtı çalışmadığında önemlidir.</translation>
        </message>
        <message>
            <source>Adapters registered, no radio blocked, no radio firmware missing</source>
            <translation>Bağdaştırıcılar kayıtlı, engelli radyo yok, eksik radyo firmware'i yok</translation>
        </message>
        <message>
            <source>Power Limits</source>
            <translation>Güç Sınırları</translation>
        </message>
        <message>
            <source>Every place a CPU / platform power limit is visible without waking anything: firmware power settings (PPT), the platform profile, cpufreq caps, RAPL, and the power source.</source>
            <translation>Hiçbir şeyi uyandırmadan bir CPU / platform güç sınırının görülebildiği her yer: firmware güç ayarları (PPT), platform profili, cpufreq sınırları, RAPL ve güç kaynağı.</translation>
        </message>
        <message>
            <source>The SMU's live limits (STAPM, fast / slow PPT in effect) are not exported by the kernel; the firmware settings here are the targets it was given.</source>
            <translation>SMU'nun canlı sınırları (STAPM, etkin hızlı / yavaş PPT) çekirdek tarafından sunulmaz; buradaki firmware ayarları ona verilen hedeflerdir.</translation>
        </message>
        <message>
            <source>The NVIDIA GPU's power limit needs nvidia-smi, which wakes the GPU: see the NVIDIA tab.</source>
            <translation>NVIDIA GPU'nun güç sınırı nvidia-smi gerektirir ve bu GPU'yu uyandırır: NVIDIA sekmesine bakın.</translation>
        </message>
        <message>
            <source>Limits and Their Sources</source>
            <translation>Sınırlar ve kaynakları</translation>
        </message>
        <message>
            <source>Source</source>
            <translation>Kaynak</translation>
        </message>
        <message>
            <source>Setting</source>
            <translation>Ayar</translation>
        </message>
        <message>
            <source>Value</source>
            <translation>Değer</translation>
        </message>
        <message>
            <source>Range</source>
            <translation>Aralık</translation>
        </message>
        <message>
            <source>ACPI platform profile</source>
            <translation>ACPI platform profili</translation>
        </message>
        <message>
            <source>Firmware (%1)</source>
            <translation>Firmware (%1)</translation>
        </message>
        <message>
            <source>unreadable</source>
            <translation>okunamıyor</translation>
        </message>
        <message>
            <source>cpufreq</source>
            <translation>cpufreq</translation>
        </message>
        <message>
            <source>highest clock (hardware)</source>
            <translation>en yüksek saat (donanım)</translation>
        </message>
        <message>
            <source>scaling_max_freq cap</source>
            <translation>scaling_max_freq sınırı</translation>
        </message>
        <message>
            <source>%1 of %2 policies</source>
            <translation>%2 politikadan %1</translation>
        </message>
        <message>
            <source>%1 CPU policies are capped below their top clock (lowest cap %2 MHz)</source>
            <translation>%1 CPU politikası en yüksek saatinin altında sınırlanmış (en düşük sınır %2 MHz)</translation>
        </message>
        <message>
            <source>Something set scaling_max_freq: a power daemon (TLP, power-profiles-daemon, auto-cpufreq), a thermal tool or a script.</source>
            <translation>Bir şey scaling_max_freq ayarladı: bir güç servisi (TLP, power-profiles-daemon, auto-cpufreq), bir ısı aracı ya da bir betik.</translation>
        </message>
        <message>
            <source>If it is not deliberate, find the tool that writes it; Optimizations shows Centurion's own settings.</source>
            <translation>Kasıtlı değilse onu yazan aracı bulun; Optimizasyonlar Centurion'ın kendi ayarlarını gösterir.</translation>
        </message>
        <message>
            <source>off</source>
            <translation>kapalı</translation>
        </message>
        <message>
            <source>CPU boost is off</source>
            <translation>CPU boost kapalı</translation>
        </message>
        <message>
            <source>The CPU stays at its base clock: much slower, cooler, less power.</source>
            <translation>CPU taban saatinde kalır: çok daha yavaş, daha serin, daha az güç.</translation>
        </message>
        <message>
            <source>amd-pstate</source>
            <translation>amd-pstate</translation>
        </message>
        <message>
            <source>energy preference (EPP)</source>
            <translation>enerji tercihi (EPP)</translation>
        </message>
        <message>
            <source>enabled</source>
            <translation>etkin</translation>
        </message>
        <message>
            <source>not enforced</source>
            <translation>uygulanmıyor</translation>
        </message>
        <message>
            <source>Power source</source>
            <translation>Güç kaynağı</translation>
        </message>
        <message>
            <source>now</source>
            <translation>şu an</translation>
        </message>
        <message>
            <source>AC adapter</source>
            <translation>AC adaptör</translation>
        </message>
        <message>
            <source>battery</source>
            <translation>pil</translation>
        </message>
        <message>
            <source>unknown</source>
            <translation>bilinmiyor</translation>
        </message>
        <message>
            <source>Running on battery</source>
            <translation>Pille çalışıyor</translation>
        </message>
        <message>
            <source>Firmware applies its battery power limits (often less than half the AC limits); measurements taken now do not hold on AC.</source>
            <translation>Firmware pil güç sınırlarını uygular (çoğu zaman AC sınırlarının yarısından az); şimdi alınan ölçümler AC'de geçerli olmaz.</translation>
        </message>
        <message>
            <source>NVIDIA Dynamic Boost</source>
            <translation>NVIDIA Dynamic Boost</translation>
        </message>
        <message>
            <source>running</source>
            <translation>çalışıyor</translation>
        </message>
        <message>
            <source>not running</source>
            <translation>çalışmıyor</translation>
        </message>
        <message>
            <source>NVIDIA Dynamic Boost is active</source>
            <translation>NVIDIA Dynamic Boost etkin</translation>
        </message>
        <message>
            <source>nvidia-powerd shifts the shared power budget between CPU and GPU: CPU limits measured under a GPU load are lower than at a CPU-only load.</source>
            <translation>nvidia-powerd ortak güç bütçesini CPU ile GPU arasında kaydırır: GPU yükü altında ölçülen CPU sınırları, yalnızca CPU yükündekinden düşüktür.</translation>
        </message>
        <message>
            <source>No unexpected cap on CPU clocks or boost</source>
            <translation>CPU saatlerinde ya da boost'ta beklenmeyen bir sınır yok</translation>
        </message>
        <message>
            <source>Memory Layout</source>
            <translation>Bellek Düzeni</translation>
        </message>
        <message>
            <source>How RAM, swap, compressed swap (zram / zswap), huge pages and memory pressure are set up and behaving right now.</source>
            <translation>RAM, takas, sıkıştırılmış takas (zram / zswap), büyük sayfalar ve bellek baskısının şu an nasıl ayarlandığı ve davrandığı.</translation>
        </message>
        <message>
            <source>Pressure (PSI) is an average over the last seconds / minutes, not since boot.</source>
            <translation>Baskı (PSI) son saniyelerin / dakikaların ortalamasıdır, açılıştan beri değil.</translation>
        </message>
        <message>
            <source>DIMM details (speed, timings, part numbers) need root: System tools → DMI.</source>
            <translation>DIMM ayrıntıları (hız, zamanlamalar, parça numaraları) root gerektirir: Sistem araçları → DMI.</translation>
        </message>
        <message>
            <source>Memory Now</source>
            <translation>Şu anki bellek</translation>
        </message>
        <message>
            <source>Item</source>
            <translation>Öğe</translation>
        </message>
        <message>
            <source>Note</source>
            <translation>Not</translation>
        </message>
        <message>
            <source>RAM</source>
            <translation>RAM</translation>
        </message>
        <message>
            <source>%1 available (%2 %)</source>
            <translation>%1 boş (%%2)</translation>
        </message>
        <message>
            <source>Less than 10 % of RAM is available</source>
            <translation>RAM'in yüzde 10'undan azı boş</translation>
        </message>
        <message>
            <source>The kernel is close to reclaiming hard or swapping.</source>
            <translation>Çekirdek sert geri kazanıma ya da takasa çok yakın.</translation>
        </message>
        <message>
            <source>Close something large or add swap.</source>
            <translation>Büyük bir şeyi kapatın ya da takas ekleyin.</translation>
        </message>
        <message>
            <source>Swap</source>
            <translation>Takas</translation>
        </message>
        <message>
            <source>%1 of %2 used</source>
            <translation>%2 içinden %1 kullanılıyor</translation>
        </message>
        <message>
            <source>none</source>
            <translation>yok</translation>
        </message>
        <message>
            <source>%1 · %2 stored, ratio %3:1</source>
            <translation>%1 · %2 saklanıyor, oran %3:1</translation>
        </message>
        <message>
            <source>%1, pool up to %2 % of RAM</source>
            <translation>%1, havuz RAM'in en fazla %%2'si</translation>
        </message>
        <message>
            <source>zswap and zram are both on</source>
            <translation>zswap ve zram ikisi de açık</translation>
        </message>
        <message>
            <source>zswap compresses pages on their way to swap, and the swap is itself compressed by zram: pages are compressed twice and zswap's pool takes RAM that zram would use.</source>
            <translation>zswap sayfaları takasa giderken sıkıştırır, takas da zram tarafından sıkıştırılır: sayfalar iki kez sıkıştırılır ve zswap havuzu zram'ın kullanacağı RAM'i alır.</translation>
        </message>
        <message>
            <source>Use one of them: turn zswap off (zswap.enabled=0) when the swap is zram.</source>
            <translation>Birini kullanın: takas zram ise zswap'i kapatın (zswap.enabled=0).</translation>
        </message>
        <message>
            <source>with zram, 100–180 is common</source>
            <translation>zram ile 100–180 yaygındır</translation>
        </message>
        <message>
            <source>default 60</source>
            <translation>varsayılan 60</translation>
        </message>
        <message>
            <source>Transparent huge pages</source>
            <translation>Şeffaf büyük sayfalar</translation>
        </message>
        <message>
            <source>defrag: %1</source>
            <translation>defrag: %1</translation>
        </message>
        <message>
            <source>Huge pages: always, with synchronous defragmentation</source>
            <translation>Büyük sayfalar: her zaman, eşzamanlı birleştirmeyle</translation>
        </message>
        <message>
            <source>Allocations can stall while the kernel compacts memory (stutter in games). defrag=madvise or defer keeps the gain without the stalls.</source>
            <translation>Çekirdek belleği sıkıştırırken bellek ayırmaları takılabilir (oyunlarda takılma). defrag=madvise ya da defer kazancı takılmalar olmadan korur.</translation>
        </message>
        <message>
            <source>Multi-gen LRU</source>
            <translation>Çok nesilli LRU</translation>
        </message>
        <message>
            <source>on (%1)</source>
            <translation>açık (%1)</translation>
        </message>
        <message>
            <source>Memory pressure (last minute)</source>
            <translation>Bellek baskısı (son dakika)</translation>
        </message>
        <message>
            <source>some %1 % · full %2 %</source>
            <translation>kısmi %%1 · tam %%2</translation>
        </message>
        <message>
            <source>share of time tasks waited for memory</source>
            <translation>görevlerin bellek beklediği zamanın payı</translation>
        </message>
        <message>
            <source>Programs are waiting for memory (%1 % of the last minute)</source>
            <translation>Programlar bellek bekliyor (son dakikanın %%1'i)</translation>
        </message>
        <message>
            <source>The kernel is reclaiming or swapping to keep up; the desktop feels sluggish.</source>
            <translation>Çekirdek yetişmek için geri kazanıyor ya da takas yapıyor; masaüstü ağır hissettirir.</translation>
        </message>
        <message>
            <source>Free memory or add swap / zram.</source>
            <translation>Bellek boşaltın ya da takas / zram ekleyin.</translation>
        </message>
        <message>
            <source>Memory pressure (PSI) is not available: kernel without CONFIG_PSI or psi=0.</source>
            <translation>Bellek baskısı (PSI) yok: CONFIG_PSI olmayan çekirdek ya da psi=0.</translation>
        </message>
        <message>
            <source>NUMA and Cache Domains</source>
            <translation>NUMA ve önbellek alanları</translation>
        </message>
        <message>
            <source>Domain</source>
            <translation>Alan</translation>
        </message>
        <message>
            <source>CPUs</source>
            <translation>CPU'lar</translation>
        </message>
        <message>
            <source>NUMA %1</source>
            <translation>NUMA %1</translation>
        </message>
        <message>
            <source>L3 %1</source>
            <translation>L3 %1</translation>
        </message>
        <message>
            <source>%1 MB</source>
            <translation>%1 MB</translation>
        </message>
        <message>
            <source>%1 L3 domains: on Ryzen each is one CCD. Threads that talk a lot run faster on one of them.</source>
            <translation>%1 L3 alanı: Ryzen'de her biri bir CCD'dir. Çok iletişim kuran iş parçacıkları bunlardan birinde daha hızlı çalışır.</translation>
        </message>
        <message>
            <source>Memory set up sensibly and not under pressure</source>
            <translation>Bellek mantıklı ayarlanmış ve baskı altında değil</translation>
        </message>
        <message>
            <source>ACPI &amp; WMI Firmware</source>
            <translation>ACPI ve WMI Firmware</translation>
        </message>
        <message>
            <source>The firmware interfaces the kernel found: WMI objects with the driver that claims each, firmware settings exposed through firmware-attributes, and the ACPI tables present. Nothing is called or changed.</source>
            <translation>Çekirdeğin bulduğu firmware arayüzleri: her birini sahiplenen sürücüyle WMI nesneleri, firmware-attributes ile sunulan firmware ayarları ve bulunan ACPI tabloları. Hiçbir şey çağrılmaz ya da değiştirilmez.</translation>
        </message>
        <message>
            <source>Passwords and authentication attributes are never read.</source>
            <translation>Parolalar ve kimlik doğrulama öznitelikleri asla okunmaz.</translation>
        </message>
        <message>
            <source>WMI Objects</source>
            <translation>WMI nesneleri</translation>
        </message>
        <message>
            <source>GUID</source>
            <translation>GUID</translation>
        </message>
        <message>
            <source>Known as</source>
            <translation>Bilinen adı</translation>
        </message>
        <message>
            <source>Lenovo battery information — used by Centurion</source>
            <translation>Lenovo pil bilgisi — Centurion kullanıyor</translation>
        </message>
        <message>
            <source>No WMI object exported (no ACPI-WMI on this machine, or CONFIG_ACPI_WMI off)</source>
            <translation>Sunulan WMI nesnesi yok (bu makinede ACPI-WMI yok ya da CONFIG_ACPI_WMI kapalı)</translation>
        </message>
        <message>
            <source>%1 object(s) have no driver: normal for objects no Linux driver knows; Centurion talks to the Lenovo ones through ACPI directly.</source>
            <translation>%1 nesnenin sürücüsü yok: hiçbir Linux sürücüsünün tanımadığı nesneler için normal; Centurion Lenovo nesneleriyle doğrudan ACPI üzerinden konuşur.</translation>
        </message>
        <message>
            <source>Firmware Settings (firmware-attributes)</source>
            <translation>Firmware ayarları (firmware-attributes)</translation>
        </message>
        <message>
            <source>Provider</source>
            <translation>Sağlayıcı</translation>
        </message>
        <message>
            <source>Allowed</source>
            <translation>İzin verilen</translation>
        </message>
        <message>
            <source>A firmware setting waits for a reboot (%1)</source>
            <translation>Bir firmware ayarı yeniden başlatmayı bekliyor (%1)</translation>
        </message>
        <message>
            <source>A changed BIOS / firmware value takes effect only after restarting.</source>
            <translation>Değiştirilen bir BIOS / firmware değeri yalnızca yeniden başlatmadan sonra etkili olur.</translation>
        </message>
        <message>
            <source>(not read)</source>
            <translation>(okunmadı)</translation>
        </message>
        <message>
            <source>ACPI Tables Present</source>
            <translation>Bulunan ACPI tabloları</translation>
        </message>
        <message>
            <source>Tables</source>
            <translation>Tablolar</translation>
        </message>
        <message>
            <source>Their contents are readable by root only (acpidump).</source>
            <translation>İçerikleri yalnızca root tarafından okunabilir (acpidump).</translation>
        </message>
        <message>
            <source>%1 WMI object(s), %2 firmware setting(s)</source>
            <translation>%1 WMI nesnesi, %2 firmware ayarı</translation>
        </message>
        <message>
            <source>USB-C Charger</source>
            <translation>USB-C Şarj Cihazı</translation>
        </message>
        <message>
            <source>What the connected charger offers (its USB Power Delivery profiles), what the laptop is drawing, and the battery's condition.</source>
            <translation>Bağlı şarj cihazının sundukları (USB Power Delivery profilleri), dizüstünün çektiği güç ve pilin durumu.</translation>
        </message>
        <message>
            <source>USB-PD profiles are visible only through the UCSI driver (typec_ucsi); barrel and proprietary chargers show as an online AC adapter only.</source>
            <translation>USB-PD profilleri yalnızca UCSI sürücüsüyle (typec_ucsi) görülebilir; yuvarlak uçlu ve özel şarj cihazları yalnızca bağlı bir AC adaptör olarak görünür.</translation>
        </message>
        <message>
            <source>Battery power figures are the battery's own estimate.</source>
            <translation>Pil güç değerleri pilin kendi tahminidir.</translation>
        </message>
        <message>
            <source>USB-C Ports</source>
            <translation>USB-C bağlantı noktaları</translation>
        </message>
        <message>
            <source>Port</source>
            <translation>Bağlantı noktası</translation>
        </message>
        <message>
            <source>Role</source>
            <translation>Rol</translation>
        </message>
        <message>
            <source>Partner</source>
            <translation>Karşı taraf</translation>
        </message>
        <message>
            <source>Charger offers</source>
            <translation>Şarj cihazının sundukları</translation>
        </message>
        <message>
            <source>Best</source>
            <translation>En iyisi</translation>
        </message>
        <message>
            <source>PPS ≤%1 V %2 A</source>
            <translation>PPS ≤%1 V %2 A</translation>
        </message>
        <message>
            <source>connected (PD %1)</source>
            <translation>bağlı (PD %1)</translation>
        </message>
        <message>
            <source>nothing</source>
            <translation>hiçbir şey</translation>
        </message>
        <message>
            <source>not reported</source>
            <translation>bildirilmiyor</translation>
        </message>
        <message>
            <source>The USB-C charger offers at most %1</source>
            <translation>USB-C şarj cihazı en fazla %1 sunuyor</translation>
        </message>
        <message>
            <source>Gaming laptops draw far more under load: on this charger the battery can drain while plugged in, and the firmware lowers power limits.</source>
            <translation>Oyun dizüstüleri yük altında çok daha fazla çeker: bu şarj cihazıyla pil takılıyken bile boşalabilir ve firmware güç sınırlarını düşürür.</translation>
        </message>
        <message>
            <source>Use the original adapter for gaming; a USB-C charger is fine for light use.</source>
            <translation>Oyun için orijinal adaptörü kullanın; USB-C şarj cihazı hafif kullanım için uygundur.</translation>
        </message>
        <message>
            <source>Power Supplies</source>
            <translation>Güç kaynakları</translation>
        </message>
        <message>
            <source>Supply</source>
            <translation>Kaynak</translation>
        </message>
        <message>
            <source>Detail</source>
            <translation>Ayrıntı</translation>
        </message>
        <message>
            <source>health %1 % of design</source>
            <translation>sağlık: tasarımın %%1'i</translation>
        </message>
        <message>
            <source>%1 cycles</source>
            <translation>%1 döngü</translation>
        </message>
        <message>
            <source>charges to %1 %</source>
            <translation>%%1'e kadar şarj eder</translation>
        </message>
        <message>
            <source>Battery holds %1 % of its design capacity</source>
            <translation>Pil tasarım kapasitesinin %%1'ini tutuyor</translation>
        </message>
        <message>
            <source>Below 80 % most makers consider a battery worn.</source>
            <translation>Çoğu üretici yüzde 80'in altındaki bir pili yıpranmış sayar.</translation>
        </message>
        <message>
            <source>Health → Battery use shows how fast it drains.</source>
            <translation>Sağlık → Pil kullanımı ne kadar hızlı boşaldığını gösterir.</translation>
        </message>
        <message>
            <source>Battery not charging: charge limit %1 %</source>
            <translation>Pil şarj olmuyor: şarj sınırı %%1</translation>
        </message>
        <message>
            <source>Charging stops at the limit to slow battery wear (conservation mode).</source>
            <translation>Pil yıpranmasını yavaşlatmak için şarj sınırda durur (koruma modu).</translation>
        </message>
        <message>
            <source>online</source>
            <translation>bağlı</translation>
        </message>
        <message>
            <source>offline</source>
            <translation>bağlı değil</translation>
        </message>
        <message>
            <source>contract %1 V × %2 A</source>
            <translation>sözleşme %1 V × %2 A</translation>
        </message>
        <message>
            <source>Plugged in, yet the battery is discharging</source>
            <translation>Fişe takılı ama pil boşalıyor</translation>
        </message>
        <message>
            <source>The load is above what the adapter supplies (or the adapter is not recognised).</source>
            <translation>Yük, adaptörün sağladığından fazla (ya da adaptör tanınmıyor).</translation>
        </message>
        <message>
            <source>Use a stronger adapter, or lower the load; check that the barrel plug is fully seated.</source>
            <translation>Daha güçlü bir adaptör kullanın ya da yükü azaltın; yuvarlak fişin tam oturduğunu kontrol edin.</translation>
        </message>
        <message>
            <source>No battery, charger or USB-C port is reported by the kernel</source>
            <translation>Çekirdek hiçbir pil, şarj cihazı ya da USB-C bağlantı noktası bildirmiyor</translation>
        </message>
        <message>
            <source>No charging problem visible</source>
            <translation>Görünür bir şarj sorunu yok</translation>
        </message>
        <message>
            <source>Audio (PipeWire)</source>
            <translation>Ses (PipeWire)</translation>
        </message>
        <message>
            <source>Sound cards and codecs, which sound servers are running (and whether two fight over the devices), and PipeWire's own view.</source>
            <translation>Ses kartları ve kodekler, hangi ses sunucularının çalıştığı (ve ikisinin aygıtlar için çakışıp çakışmadığı) ve PipeWire'ın kendi görünümü.</translation>
        </message>
        <message>
            <source>Only your own user's sound servers are seen; nothing is restarted or re-routed.</source>
            <translation>Yalnızca kendi kullanıcınızın ses sunucuları görülür; hiçbir şey yeniden başlatılmaz ya da yeniden yönlendirilmez.</translation>
        </message>
        <message>
            <source>Sound Cards</source>
            <translation>Ses kartları</translation>
        </message>
        <message>
            <source>Card</source>
            <translation>Kart</translation>
        </message>
        <message>
            <source>Codec</source>
            <translation>Kodek</translation>
        </message>
        <message>
            <source>No sound card registered</source>
            <translation>Kayıtlı ses kartı yok</translation>
        </message>
        <message>
            <source>The audio driver did not load (S18 lists devices without a driver; SOF laptops also need their firmware).</source>
            <translation>Ses sürücüsü yüklenmedi (S18 sürücüsü olmayan aygıtları listeler; SOF dizüstüleri firmware'lerine de ihtiyaç duyar).</translation>
        </message>
        <message>
            <source>Sound Servers Running</source>
            <translation>Çalışan ses sunucuları</translation>
        </message>
        <message>
            <source>Process</source>
            <translation>Süreç</translation>
        </message>
        <message>
            <source>PulseAudio and pipewire-pulse are both running</source>
            <translation>PulseAudio ve pipewire-pulse ikisi birden çalışıyor</translation>
        </message>
        <message>
            <source>Both try to own the sound devices: missing devices, no sound, or sound on one app only.</source>
            <translation>İkisi de ses aygıtlarını sahiplenmeye çalışır: eksik aygıtlar, ses yok ya da yalnızca bir uygulamada ses.</translation>
        </message>
        <message>
            <source>Keep one: with PipeWire, disable PulseAudio's autospawn (autospawn = no) and remove it from the session start.</source>
            <translation>Birini tutun: PipeWire ile PulseAudio'nun autospawn'ını kapatın (autospawn = no) ve oturum başlangıcından çıkarın.</translation>
        </message>
        <message>
            <source>PipeWire runs without a session manager</source>
            <translation>PipeWire bir oturum yöneticisi olmadan çalışıyor</translation>
        </message>
        <message>
            <source>Without WirePlumber nothing connects devices to programs: there is no sound.</source>
            <translation>WirePlumber olmadan hiçbir şey aygıtları programlara bağlamaz: ses yoktur.</translation>
        </message>
        <message>
            <source>Start wireplumber with the session (Gentoo: media-video/wireplumber, started by the desktop or gentoo-pipewire-launcher).</source>
            <translation>wireplumber'ı oturumla başlatın (Gentoo: media-video/wireplumber; masaüstü ya da gentoo-pipewire-launcher başlatır).</translation>
        </message>
        <message>
            <source>No sound server is running for this user</source>
            <translation>Bu kullanıcı için çalışan ses sunucusu yok</translation>
        </message>
        <message>
            <source>Programs that use PulseAudio or PipeWire get no sound.</source>
            <translation>PulseAudio ya da PipeWire kullanan programlar ses alamaz.</translation>
        </message>
        <message>
            <source>HDA codec power saving after %1 s of silence</source>
            <translation>HDA kodeki %1 sn sessizlikten sonra güç tasarrufuna geçiyor</translation>
        </message>
        <message>
            <source>If sound starts with a pop or its first moment is cut off, this is why (snd_hda_intel power_save=0 stops it at a small power cost).</source>
            <translation>Ses bir patlamayla başlıyor ya da ilk anı kesiliyorsa nedeni budur (snd_hda_intel power_save=0 küçük bir güç maliyetiyle bunu durdurur).</translation>
        </message>
        <message>
            <source>Server</source>
            <translation>Sunucu</translation>
        </message>
        <message>
            <source>The default output is the dummy output</source>
            <translation>Varsayılan çıkış sahte çıkış</translation>
        </message>
        <message>
            <source>No real sound device is available to the server.</source>
            <translation>Sunucunun kullanabileceği gerçek bir ses aygıtı yok.</translation>
        </message>
        <message>
            <source>Check the cards above and the session manager.</source>
            <translation>Yukarıdaki kartları ve oturum yöneticisini kontrol edin.</translation>
        </message>
        <message>
            <source>(not installed or no answer)</source>
            <translation>(kurulu değil ya da yanıt yok)</translation>
        </message>
        <message>
            <source>Sound cards present and one sound server stack running</source>
            <translation>Ses kartları var ve bir ses sunucusu yığını çalışıyor</translation>
        </message>
        <message>
            <source>Kernel Features &amp; Firmware</source>
            <translation>Çekirdek Özellikleri ve Firmware</translation>
        </message>
        <message>
            <source>Kernel options Centurion's features rely on, firmware files the kernel could not load, the firmware compression the kernel can read, and devices no driver has claimed.</source>
            <translation>Centurion özelliklerinin dayandığı çekirdek seçenekleri, çekirdeğin yükleyemediği firmware dosyaları, çekirdeğin okuyabildiği firmware sıkıştırması ve hiçbir sürücünün sahiplenmediği aygıtlar.</translation>
        </message>
        <message>
            <source>A built-in option (y) or a module (m) both work; a module must also be installed for this kernel.</source>
            <translation>Gömülü bir seçenek (y) ya da modül (m) ikisi de çalışır; modülün bu çekirdek için kurulu olması da gerekir.</translation>
        </message>
        <message>
            <source>Kernel Options</source>
            <translation>Çekirdek seçenekleri</translation>
        </message>
        <message>
            <source>Option</source>
            <translation>Seçenek</translation>
        </message>
        <message>
            <source>Needed for</source>
            <translation>Gerektiği yer</translation>
        </message>
        <message>
            <source>The running kernel's configuration is not readable</source>
            <translation>Çalışan çekirdeğin yapılandırması okunamıyor</translation>
        </message>
        <message>
            <source>Neither /boot/config-%1 nor /proc/config.gz (CONFIG_IKCONFIG_PROC) is available, so no option is judged.</source>
            <translation>Ne /boot/config-%1 ne de /proc/config.gz (CONFIG_IKCONFIG_PROC) var, bu yüzden hiçbir seçenek değerlendirilmedi.</translation>
        </message>
        <message>
            <source>Gentoo: keep the config in /boot (make install does), or enable CONFIG_IKCONFIG_PROC.</source>
            <translation>Gentoo: yapılandırmayı /boot'ta tutun (make install bunu yapar) ya da CONFIG_IKCONFIG_PROC'u etkinleştirin.</translation>
        </message>
        <message>
            <source>not in config</source>
            <translation>yapılandırmada yok</translation>
        </message>
        <message>
            <source>%1 is off: %2 cannot work</source>
            <translation>%1 kapalı: %2 çalışamaz</translation>
        </message>
        <message>
            <source>Enable it in the kernel configuration and rebuild.</source>
            <translation>Çekirdek yapılandırmasında etkinleştirip yeniden derleyin.</translation>
        </message>
        <message>
            <source>Firmware files are zstd-compressed but the kernel cannot read them</source>
            <translation>Firmware dosyaları zstd ile sıkıştırılmış ama çekirdek bunları okuyamıyor</translation>
        </message>
        <message>
            <source>%1+ .zst files in /lib/firmware and CONFIG_FW_LOADER_COMPRESS_ZSTD is not set: every driver that needs one of them fails to load its firmware.</source>
            <translation>/lib/firmware içinde %1+ .zst dosyası var ve CONFIG_FW_LOADER_COMPRESS_ZSTD ayarlı değil: bunlardan birine ihtiyaç duyan her sürücü firmware'ini yükleyemez.</translation>
        </message>
        <message>
            <source>Enable CONFIG_FW_LOADER_COMPRESS_ZSTD, or install linux-firmware without compression (Gentoo: USE=-compress-zstd).</source>
            <translation>CONFIG_FW_LOADER_COMPRESS_ZSTD'yi etkinleştirin ya da linux-firmware'i sıkıştırmasız kurun (Gentoo: USE=-compress-zstd).</translation>
        </message>
        <message>
            <source>Firmware files are xz-compressed but the kernel cannot read them</source>
            <translation>Firmware dosyaları xz ile sıkıştırılmış ama çekirdek bunları okuyamıyor</translation>
        </message>
        <message>
            <source>%1+ .xz files and CONFIG_FW_LOADER_COMPRESS_XZ is not set.</source>
            <translation>%1+ .xz dosyası var ve CONFIG_FW_LOADER_COMPRESS_XZ ayarlı değil.</translation>
        </message>
        <message>
            <source>Enable CONFIG_FW_LOADER_COMPRESS_XZ, or install the firmware uncompressed.</source>
            <translation>CONFIG_FW_LOADER_COMPRESS_XZ'yi etkinleştirin ya da firmware'i sıkıştırmasız kurun.</translation>
        </message>
        <message>
            <source>Firmware Files the Kernel Could Not Load</source>
            <translation>Çekirdeğin yükleyemediği firmware dosyaları</translation>
        </message>
        <message>
            <source>Last boot</source>
            <translation>Son açılış</translation>
        </message>
        <message>
            <source>Drivers often try newer or optional files first and fall back without a word; a missing file matters when its device misbehaves.</source>
            <translation>Sürücüler çoğu zaman önce daha yeni ya da isteğe bağlı dosyaları dener ve sessizce geri düşer; eksik bir dosya, aygıtı sorun çıkardığında önemlidir.</translation>
        </message>
        <message>
            <source>%1 firmware file(s) requested by drivers are not installed</source>
            <translation>Sürücülerin istediği %1 firmware dosyası kurulu değil</translation>
        </message>
        <message>
            <source>See the table: the requesting driver says which device needs it.</source>
            <translation>Tabloya bakın: isteyen sürücü hangi aygıtın ihtiyaç duyduğunu söyler.</translation>
        </message>
        <message>
            <source>Devices Without a Driver</source>
            <translation>Sürücüsü olmayan aygıtlar</translation>
        </message>
        <message>
            <source>Class</source>
            <translation>Sınıf</translation>
        </message>
        <message>
            <source>Kernel would match</source>
            <translation>Çekirdeğin eşleyeceği</translation>
        </message>
        <message>
            <source>The modalias is what a module must declare to claim the device: `modprobe --resolve-alias &lt;modalias&gt;` names one if it is installed.</source>
            <translation>Modalias, bir modülün aygıtı sahiplenmek için bildirmesi gereken şeydir: kuruluysa `modprobe --resolve-alias &lt;modalias&gt;` birini adlandırır.</translation>
        </message>
        <message>
            <source>%1 PCI device(s) have no driver</source>
            <translation>%1 PCI aygıtının sürücüsü yok</translation>
        </message>
        <message>
            <source>They do not work until a driver claims them (or they are deliberately unused).</source>
            <translation>Bir sürücü sahiplenene kadar çalışmazlar (ya da kasıtlı olarak kullanılmıyorlardır).</translation>
        </message>
        <message>
            <source>Every option Centurion relies on is enabled, no firmware is missing, every device has a driver</source>
            <translation>Centurion'ın dayandığı her seçenek etkin, eksik firmware yok, her aygıtın sürücüsü var</translation>
        </message>
        <message>
            <source>Unknown diagnostic %1</source>
            <translation>Bilinmeyen tanılama %1</translation>
        </message>
        <message>
            <source>Lenovo GameZone (profiles, GPU, thermal) — used by Centurion</source>
            <translation>Lenovo GameZone (profiller, GPU, ısı) — Centurion kullanıyor</translation>
        </message>
        <message>
            <source>Lenovo Other Method (power limits) — used by Centurion</source>
            <translation>Lenovo Other Method (güç sınırları) — Centurion kullanıyor</translation>
        </message>
        <message>
            <source>Lenovo Fan Method (fan tables) — used by Centurion</source>
            <translation>Lenovo Fan Method (fan tabloları) — Centurion kullanıyor</translation>
        </message>
        <message>
            <source>Lenovo Capability Data 00 — used by Centurion</source>
            <translation>Lenovo Capability Data 00 — Centurion kullanıyor</translation>
        </message>
        <message>
            <source>Lenovo Capability Data 01</source>
            <translation>Lenovo Capability Data 01</translation>
        </message>
        <message>
            <source>PCIe error counters (Evidence Lab H03, PCIe Link Lab)</source>
            <translation>PCIe hata sayaçları (Donanım Kanıt Analizi H03, PCIe Bağlantı Laboratuvarı)</translation>
        </message>
        <message>
            <source>crash records kept across a reboot (Boot history)</source>
            <translation>yeniden başlatmada korunan çökme kayıtları (Açılış geçmişi)</translation>
        </message>
        <message>
            <source>pstore storage in EFI variables</source>
            <translation>EFI değişkenlerinde pstore depolaması</translation>
        </message>
        <message>
            <source>readable machine-check decoding (H02, CO Search crash watcher)</source>
            <translation>okunabilir makine denetimi çözümlemesi (H02, CO Arama çökme izleyicisi)</translation>
        </message>
        <message>
            <source>AMD machine-check threshold counters (CO Search crash watcher)</source>
            <translation>AMD makine denetimi eşik sayaçları (CO Arama çökme izleyicisi)</translation>
        </message>
        <message>
            <source>hardware sleep residency on AMD (Sleep &amp; wake, H12)</source>
            <translation>AMD'de donanım uyku süresi (Uyku ve uyanma, H12)</translation>
        </message>
        <message>
            <source>suspend and its counters (H12)</source>
            <translation>uyku ve sayaçları (H12)</translation>
        </message>
        <message>
            <source>memory pressure (S10)</source>
            <translation>bellek baskısı (S10)</translation>
        </message>
        <message>
            <source>platform power profiles</source>
            <translation>platform güç profilleri</translation>
        </message>
        <message>
            <source>Lenovo WMI controls (fans, power limits, battery info)</source>
            <translation>Lenovo WMI denetimleri (fanlar, güç sınırları, pil bilgisi)</translation>
        </message>
        <message>
            <source>amd-pstate CPU frequency driver</source>
            <translation>amd-pstate CPU frekans sürücüsü</translation>
        </message>
        <message>
            <source>package power readings (flight recorder, Power Limit map)</source>
            <translation>paket güç okumaları (uçuş kaydedicisi, Güç Sınırı haritası)</translation>
        </message>
        <message>
            <source>NVMe temperatures in hwmon</source>
            <translation>hwmon'da NVMe sıcaklıkları</translation>
        </message>
        <message>
            <source>USB-C PD details (S13)</source>
            <translation>USB-C PD ayrıntıları (S13)</translation>
        </message>
        <message>
            <source>Network protection's per-program guard (nftables queue)</source>
            <translation>Ağ korumasının program başına koruyucusu (nftables kuyruğu)</translation>
        </message>
        <message>
            <source>Network protection's per-program guard (netlink queue)</source>
            <translation>Ağ korumasının program başına koruyucusu (netlink kuyruğu)</translation>
        </message>
        <message>
            <source>compressed swap in RAM</source>
            <translation>RAM'de sıkıştırılmış takas</translation>
        </message>
        <message>
            <source>F2FS file systems (H05)</source>
            <translation>F2FS dosya sistemleri (H05)</translation>
        </message>
        <message>
            <source>Not in this kernel's configuration: %1</source>
            <translation>Bu çekirdeğin yapılandırmasında yok: %1</translation>
        </message>
        <message>
            <source>An option missing from the config is usually unavailable because an option it depends on is off; a few have other names in some kernel versions.</source>
            <translation>Yapılandırmada bulunmayan bir seçenek genellikle bağlı olduğu bir seçenek kapalı olduğu için kullanılamaz; birkaçının bazı çekirdek sürümlerinde başka adı vardır.</translation>
        </message>
        <message>
            <source>PCIe Upstream Relationships</source>
            <translation>PCIe Üst Bağlantı İlişkileri</translation>
        </message>
        <message>
            <source>Upstream PCI address</source>
            <translation>Üst PCI adresi</translation>
        </message>
        <message>
            <source>Device maximum</source>
            <translation>Aygıt maksimumu</translation>
        </message>
        <message>
            <source>Upstream maximum</source>
            <translation>Üst bağlantı maksimumu</translation>
        </message>
        <message>
            <source>Parent relationships come from resolved sysfs device paths. Unknown or root-bus parents are not inferred.</source>
            <translation>Üst aygıt ilişkileri çözümlenen sysfs aygıt yollarından gelir. Bilinmeyen veya kök veri yolundaki üst aygıtlar tahmin edilmez.</translation>
        </message>
        <message>
        <source>%1 reported L3 sharing domains; CCD identity is not inferred from cache sharing.</source>
        <translation>Bildirilen %1 L3 paylaşım alanı; önbellek paylaşımından CCD kimliği çıkarılmaz.</translation>
    </message>
    <message>
        <source>Bus</source>
        <translation>Veri yolu</translation>
    </message>
    <message>
        <source>CPU Package and Core Topology</source>
        <translation>CPU Paket ve Çekirdek Topolojisi</translation>
    </message>
    <message>
        <source>CPU cap or boost state is incomplete</source>
        <translation>CPU sınırı veya boost durumu eksik</translation>
    </message>
    <message>
        <source>Charging information is limited to reported readings</source>
        <translation>Şarj bilgisi bildirilen ölçümlerle sınırlıdır</translation>
    </message>
    <message>
        <source>Core %1</source>
        <translation>Çekirdek %1</translation>
    </message>
    <message>
        <source>Core type</source>
        <translation>Çekirdek türü</translation>
    </message>
    <message>
        <source>Current max (A)</source>
        <translation>Azami akım (A)</translation>
    </message>
    <message>
        <source>Current now (A)</source>
        <translation>Anlık akım (A)</translation>
    </message>
    <message>
        <source>Distance vector</source>
        <translation>Uzaklık vektörü</translation>
    </message>
    <message>
        <source>Exposed ACPI / WMI Device Hierarchy</source>
        <translation>Çekirdeğin Sunduğu ACPI / WMI Aygıt Hiyerarşisi</translation>
    </message>
    <message>
        <source>Grouped by reported source, not a causal enforcement order. Firmware attribute units are not inferred; live SMU limits may differ.</source>
        <translation>Nedensel uygulama sırasına göre değil, bildirilen kaynağa göre gruplandı. Ürün yazılımı özniteliklerinin birimi varsayılmaz; canlı SMU sınırları farklı olabilir.</translation>
    </message>
    <message>
        <source>HID / GUID</source>
        <translation>HID / GUID</translation>
    </message>
    <message>
        <source>Hardware Device Tree</source>
        <translation>Donanım Aygıt Ağacı</translation>
    </message>
    <message>
        <source>Instance</source>
        <translation>Örnek kimliği</translation>
    </message>
    <message>
        <source>Logical CPU</source>
        <translation>Mantıksal CPU</translation>
    </message>
    <message>
        <source>Measured power</source>
        <translation>Ölçülen güç</translation>
    </message>
    <message>
        <source>Measured power (W)</source>
        <translation>Ölçülen güç (W)</translation>
    </message>
    <message>
        <source>Memory pressure reading is incomplete</source>
        <translation>Bellek baskısı ölçümü eksik</translation>
    </message>
    <message>
        <source>Memory total (KiB)</source>
        <translation>Toplam bellek (KiB)</translation>
    </message>
    <message>
        <source>Modalias</source>
        <translation>Modalias</translation>
    </message>
    <message>
        <source>NUMA Memory and Distances</source>
        <translation>NUMA Belleği ve Uzaklıkları</translation>
    </message>
    <message>
        <source>NUMA node</source>
        <translation>NUMA düğümü</translation>
    </message>
    <message>
        <source>No exposed ACPI or WMI device hierarchy could be read</source>
        <translation>Sunulan ACPI veya WMI aygıt hiyerarşisi okunamadı</translation>
    </message>
    <message>
        <source>Node</source>
        <translation>Düğüm</translation>
    </message>
    <message>
        <source>Online</source>
        <translation>Çevrimiçi</translation>
    </message>
    <message>
        <source>Only kernel-exposed device objects are shown, not the complete AML namespace. No method is executed.</source>
        <translation>Tam AML ad alanı değil, yalnızca çekirdeğin sunduğu aygıt nesneleri gösterilir. Hiçbir metot çalıştırılmaz.</translation>
    </message>
    <message>
        <source>Package %1</source>
        <translation>Paket %1</translation>
    </message>
    <message>
        <source>Parent</source>
        <translation>Üst aygıt</translation>
    </message>
    <message>
        <source>Power Limit Sources</source>
        <translation>Güç Sınırı Kaynakları</translation>
    </message>
    <message>
        <source>RAM availability is incomplete</source>
        <translation>Kullanılabilir RAM bilgisi eksik</translation>
    </message>
    <message>
        <source>Relationships use canonical sysfs paths only. Link and AER readings are reused from the existing PCIe scan; missing relationships and readings are unknown.</source>
        <translation>İlişkiler yalnızca kanonik sysfs yollarını kullanır. Bağlantı ve AER ölçümleri mevcut PCIe taramasından alınır; eksik ilişkiler ve ölçümler bilinmiyor olarak gösterilir.</translation>
    </message>
    <message>
        <source>Reported maxima are capabilities, not a negotiated USB-PD contract. Signed measurements are preserved; direction follows the driver convention.</source>
        <translation>Bildirilen azami değerler kapasitedir, anlaşılmış USB-PD sözleşmesi değildir. İşaretli ölçümler korunur; yön sürücünün kuralına bağlıdır.</translation>
    </message>
    <message>
        <source>Runtime state</source>
        <translation>Çalışma zamanı durumu</translation>
    </message>
    <message>
        <source>Supply Measurements and Reported Limits</source>
        <translation>Güç Kaynağı Ölçümleri ve Bildirilen Sınırlar</translation>
    </message>
    <message>
        <source>Thread siblings</source>
        <translation>Aynı çekirdeğin iş parçacıkları</translation>
    </message>
    <message>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <source>Vendor / device</source>
        <translation>Üretici / aygıt</translation>
    </message>
    <message>
        <source>Voltage max (V)</source>
        <translation>Azami gerilim (V)</translation>
    </message>
    <message>
        <source>Voltage now (V)</source>
        <translation>Anlık gerilim (V)</translation>
    </message>
    <message>
            <source>Die ID</source>
            <translation>Die kimliği</translation>
        </message>
        <message>
            <source>Topology evidence</source>
            <translation>Topoloji kanıtı</translation>
        </message>
        <message>
            <source>Core groups require mutually consistent sibling lists. Core type is the kernel's raw value; frequency and SMT do not establish P/E type.</source>
            <translation>Çekirdek grupları karşılıklı tutarlı kardeş işlemci listeleri gerektirir. Çekirdek türü kernel tarafından bildirilen ham değerdir; frekans ve SMT, P/E türünü kanıtlamaz.</translation>
        </message>
        <message>
            <source>Consistent sibling declarations</source>
            <translation>Tutarlı kardeş işlemci bildirimleri</translation>
        </message>
        <message>
            <source>Unverified core relationship</source>
            <translation>Doğrulanmamış çekirdek ilişkisi</translation>
        </message>
        <message>
        <source>Negotiated contract is not exposed by these sources. Source profiles and supply measurements are separate.</source>
        <translation>Bu kaynaklar anlaşılan PD sözleşmesini göstermiyor. Kaynak profilleri ve güç kaynağı ölçümleri ayrıdır.</translation>
    </message>
        <message>
        <source>Maximum unknown (incomplete profiles)</source>
        <translation>Üst sınır bilinmiyor (eksik profiller)</translation>
    </message>
        <message>
        <source>Endpoint maximum</source>
        <translation>Uç aygıtın azami bağlantısı</translation>
    </message>
    <message>
        <source>Link / AER capture (UTC)</source>
        <translation>Bağlantı / AER ölçüm zamanı (UTC)</translation>
    </message>
    <message>
        <source>Identity is boot-scoped sysfs continuity, not proof of physical identity. NUMA -1 means no assigned node. Link reads are skipped for non-active devices; runtime PM may still race an active read.</source>
        <translation>Kimlik yalnızca aynı açılıştaki sysfs sürekliliğidir; fiziksel kimliğin kanıtı değildir. NUMA -1 atanmış düğüm olmadığını belirtir. Etkin olmayan aygıtların bağlantısı okunmaz; çalışma zamanı güç yönetimi etkin okuma ile yarışabilir.</translation>
    </message>
    <message>
        <source>Non-active or unknown runtime state is not probed for PCIe link registers. Runtime PM may race an active read.</source>
        <translation>Etkin olmayan veya çalışma zamanı durumu bilinmeyen aygıtların PCIe bağlantı yazmaçları sorgulanmaz. Çalışma zamanı güç yönetimi etkin okuma ile yarışabilir.</translation>
    </message>
    <message>
        <source>Same-boot sysfs identity is best-effort continuity; identical physical replacement may not be detectable.</source>
        <translation>Aynı açılıştaki sysfs kimliği sürekliliğin yaklaşık kanıtıdır; özdeş fiziksel aygıt değişimi tespit edilemeyebilir.</translation>
    </message>
    <message>
        <source>Link not probed (runtime state)</source>
        <translation>Bağlantı sorgulanmadı (çalışma zamanı durumu)</translation>
    </message>
    <message>
        <source>%1: link not probed (runtime state)</source>
        <translation>%1: bağlantı sorgulanmadı (çalışma zamanı durumu)</translation>
    </message>
    <message>
        <source>%1: link reading unavailable</source>
        <translation>%1: bağlantı ölçümü alınamadı</translation>
    </message>
    <message>
        <source>%1: device or runtime state changed during capture</source>
        <translation>%1: ölçüm sırasında aygıt veya çalışma zamanı durumu değişti</translation>
    </message>
    <message>
        <source>Link speed or width unknown</source>
        <translation>Bağlantı hızı veya genişliği bilinmiyor</translation>
    </message>
    <message>
        <source>%1 (%2): link speed or width could not be verified</source>
        <translation>%1 (%2): bağlantı hızı veya genişliği doğrulanamadı</translation>
    </message>
    <message>
        <source>If upstream capability is unavailable, Possible shows the endpoint maximum only.</source>
        <translation>Üst bağlantının kapasitesi bilinmiyorsa Olası sütunu yalnızca uç aygıtın azami kapasitesini gösterir.</translation>
    </message>
    <message>
        <source>Newly readable or added endpoint</source>
        <translation>Yeni okunabilen veya eklenen uç aygıt</translation>
    </message>
        <message>
            <source>RAM and swap totals are the kernel /proc view, not necessarily the current cgroup limit or physical DIMM capacity. Separate snapshots may differ; do not add zram logical capacity to RAM or swap totals.</source>
            <translation>RAM ve takas toplamları çekirdeğin /proc görünümüdür; mevcut cgroup sınırı veya fiziksel DIMM kapasitesi olmak zorunda değildir. Ayrı anlık görüntüler farklı olabilir; zram mantıksal kapasitesini RAM veya takas toplamına eklemeyin.</translation>
        </message>
        <message>
            <source>Active Swap Entries</source>
            <translation>Etkin Takas Girdileri</translation>
        </message>
        <message>
            <source>Capacity (KiB)</source>
            <translation>Kapasite (KiB)</translation>
        </message>
        <message>
            <source>Used (KiB)</source>
            <translation>Kullanılan (KiB)</translation>
        </message>
        <message>
            <source>Kernel swap entries only. Canonical zram names are recognized; other paths are omitted for privacy. Aliases are not resolved and no device is opened.</source>
            <translation>Yalnızca çekirdek takas girdileri. Asıl zram adları tanınır; gizlilik için diğer yollar gösterilmez. Takma adlar çözümlenmez ve hiçbir aygıt açılmaz.</translation>
        </message>
        <message>
            <source>Swap entry %1</source>
            <translation>Takas girdisi %1</translation>
        </message>
        <message>
            <source>Active swap entries are unavailable or incomplete.</source>
            <translation>Etkin takas girdileri erişilemez veya eksik.</translation>
        </message>
        <message>
            <source>No active swap entries in this snapshot.</source>
            <translation>Bu anlık görüntüde etkin takas girdisi yok.</translation>
        </message>
        <message>
            <source>Active swap</source>
            <translation>Etkin takas</translation>
        </message>
        <message>
            <source>Not listed as canonical active swap</source>
            <translation>Asıl adıyla etkin takas listesinde yok</translation>
        </message>
        <message>
            <source>Swap activity unknown</source>
            <translation>Takas etkinliği bilinmiyor</translation>
        </message>
        <message>
            <source>%1 · %2 · stored: %3 · compressed: %4 · resident RAM: %5 · ratio: %6</source>
            <translation>%1 · %2 · saklanan: %3 · sıkıştırılmış: %4 · kullanılan fiziksel RAM: %5 · oran: %6</translation>
        </message>
        <message>
            <source>zswap is enabled and a canonical zram swap entry is active. Pages evicted from zswap to zram may be compressed again; this snapshot does not prove actual double compression.</source>
            <translation>zswap etkin ve asıl adıyla bir zram takas girdisi etkin. zswap üzerinden zram aygıtına çıkarılan sayfalar yeniden sıkıştırılabilir; bu anlık görüntü gerçekten çift sıkıştırma yapıldığını kanıtlamaz.</translation>
        </message>
        <message>
            <source>Swap accounting is incomplete</source>
            <translation>Takas hesaplaması eksik</translation>
        </message>
        <message>
            <source>Canonical zram swap names could not be corroborated with a configured sysfs device.</source>
            <translation>Asıl zram takas adları yapılandırılmış bir sysfs aygıtıyla doğrulanamadı.</translation>
        </message>
        <message>
            <source>ACPI table headers are readable only by root; they are not read without privileges.</source>
            <translation>ACPI tablo başlıklarını yalnız root okuyabilir; yetki olmadan okunmazlar.</translation>
        </message>
        <message>
            <source>Turn %1 on</source>
            <translation>%1 aç</translation>
        </message>
        <message>
            <source>Raise the cap to the hardware maximum</source>
            <translation>Sınırı donanım azamisine yükselt</translation>
        </message>
        <message>
            <source>Turn CPU boost on</source>
            <translation>İşlemci boost'unu aç</translation>
        </message>
        <message>
            <source>Turn zswap off (until reboot)</source>
            <translation>zswap'ı kapat (yeniden başlatmaya kadar)</translation>
        </message>
        <message>
            <source>Set defrag to madvise (until reboot)</source>
            <translation>Defrag'ı madvise yap (yeniden başlatmaya kadar)</translation>
        </message>
        <message>
            <source>Level</source>
            <translation>Seviye</translation>
        </message>
        <message>
            <source>Unreadable</source>
            <translation>Okunamıyor</translation>
        </message>
        <message>
            <source>USB-PD profiles depend on kernel and driver exposure; barrel and proprietary chargers may show only as an online AC adapter.</source>
            <translation>USB-PD profilleri çekirdeğin ve sürücünün sunduğu bilgiye bağlıdır; barrel ve özel şarj cihazları yalnızca çevrimiçi bir AC adaptörü olarak görünebilir.</translation>
        </message>
        <message>
            <source>Restart PipeWire and WirePlumber</source>
            <translation>PipeWire ve WirePlumber'ı yeniden başlat</translation>
        </message>
        <message>
            <source>Turn codec power saving off (until reboot)</source>
            <translation>Codec güç tasarrufunu kapat (yeniden başlatmaya kadar)</translation>
        </message>
        <message>
            <source>CPU Cache Sharing Domains</source>
            <translation>CPU Önbellek Paylaşım Alanları</translation>
        </message>
        <message>
            <source>Size</source>
            <translation>Boyut</translation>
        </message>
        <message>
            <source>Shared CPUs</source>
            <translation>Paylaşan CPU'lar</translation>
        </message>
        <message>
            <source>Cache sharing is kernel-reported topology, not proof of physical CCD identity.</source>
            <translation>Önbellek paylaşımı çekirdeğin bildirdiği topolojidir; fiziksel CCD kimliğinin kanıtı değildir.</translation>
        </message>
        <message>
            <source>SMBIOS Memory Devices</source>
            <translation>SMBIOS Bellek Aygıtları</translation>
        </message>
        <message>
            <source>Entry</source>
            <translation>Kayıt</translation>
        </message>
        <message>
            <source>Capacity (MiB)</source>
            <translation>Kapasite (MiB)</translation>
        </message>
        <message>
            <source>Rated transfer rate (MT/s)</source>
            <translation>Bildirilen aktarım hızı (MT/s)</translation>
        </message>
        <message>
            <source>Configured transfer rate (MT/s)</source>
            <translation>Yapılandırılan aktarım hızı (MT/s)</translation>
        </message>
        <message>
            <source>Invalid or incomplete record</source>
            <translation>Geçersiz veya eksik kayıt</translation>
        </message>
        <message>
            <source>Empty slot</source>
            <translation>Boş yuva</translation>
        </message>
        <message>
            <source>Reported device</source>
            <translation>Bildirilen aygıt</translation>
        </message>
        <message>
            <source>Firmware-reported records, not measured RAM speed. Missing or inaccessible SMBIOS data is unknown; no privilege escalation.</source>
            <translation>Firmware kayıtlarıdır, ölçülmüş RAM hızı değildir. Eksik veya erişilemeyen SMBIOS verisi bilinmiyor; yetki yükseltme yapılmaz.</translation>
        </message>
        <message>
            <source>SMBIOS memory device entries are unavailable.</source>
            <translation>SMBIOS bellek aygıtı kayıtları kullanılamıyor.</translation>
        </message>
        <message>
            <source>Table</source>
            <translation>Tablo</translation>
        </message>
        <message>
            <source>Signature</source>
            <translation>İmza</translation>
        </message>
        <message>
            <source>Length (bytes)</source>
            <translation>Uzunluk (bayt)</translation>
        </message>
        <message>
            <source>Revision</source>
            <translation>Revizyon</translation>
        </message>
        <message>
            <source>Read status</source>
            <translation>Okuma durumu</translation>
        </message>
        <message>
            <source>Unsupported or incomplete header</source>
            <translation>Desteklenmeyen veya eksik başlık</translation>
        </message>
        <message>
            <source>Header read</source>
            <translation>Başlık okundu</translation>
        </message>
        <message>
            <source>ACPI table listing is unavailable or inaccessible.</source>
            <translation>ACPI tablo listesi kullanılamıyor veya erişilemiyor.</translation>
        </message>
        <message>
            <source>Partner source capabilities</source>
            <translation>Karşı aygıtın kaynak kapasiteleri</translation>
        </message>
        <message>
            <source>Best capacity</source>
            <translation>En yüksek kapasite</translation>
        </message>
        <message>
            <source>USB Power Delivery Source Profiles</source>
            <translation>USB Power Delivery Kaynak Profilleri</translation>
        </message>
        <message>
            <source>Partner profile</source>
            <translation>Karşı aygıt profili</translation>
        </message>
        <message>
            <source>Minimum voltage (V)</source>
            <translation>En düşük voltaj (V)</translation>
        </message>
        <message>
            <source>Maximum voltage (V)</source>
            <translation>En yüksek voltaj (V)</translation>
        </message>
        <message>
            <source>Maximum current (A)</source>
            <translation>En yüksek akım (A)</translation>
        </message>
        <message>
            <source>Capacity (W)</source>
            <translation>Kapasite (W)</translation>
        </message>
        <message>
            <source>Source capability is not a negotiated contract or measured draw. No contract is inferred from voltage or current limits.</source>
            <translation>Kaynak kapasitesi anlaşılmış güç sözleşmesi veya ölçülen tüketim değildir. Voltaj veya akım sınırlarından sözleşme çıkarılmaz.</translation>
        </message>
        <message>
            <source>Changed during capture</source>
            <translation>Yakalama sırasında değişti</translation>
        </message>
    <message>
        <source>Upstream current link</source>
        <translation>Üst PCIe bağlantısının anlık değeri</translation>
    </message>
    <message>
        <source>Upstream runtime state</source>
        <translation>Üst PCIe çalışma durumu</translation>
    </message>
    <message>
        <source>Capture (UTC)</source>
        <translation>Ölçüm zamanı (UTC)</translation>
    </message>
    <message>
        <source>Parent relationships require a resolved PCI device path and a stable boot-scoped identity. Upstream link reads require active runtime state; unknown parents are not inferred.</source>
        <translation>Üst aygıt ilişkileri çözümlenmiş PCI aygıt yolu ve açılışa özgü kararlı kimlik gerektirir. Bağlantı yalnızca etkin çalışma durumunda okunur; bilinmeyen üst aygıtlar varsayılmaz.</translation>
    </message>
    <message>
        <source>Power operation mode</source>
        <translation>Güç çalışma modu</translation>
    </message>
    <message>
        <source>Verified Cache / CPU Architecture</source>
        <translation>Doğrulanmış Önbellek / CPU Mimarisi</translation>
    </message>
    <message>
        <source>Evidence</source>
        <translation>Kanıt</translation>
    </message>
    <message>
        <source>Only reciprocal kernel cache declarations establish a group. CPU membership is not a physical CCD or NUMA assignment. Incomplete groups are shown separately.</source>
        <translation>Yalnızca karşılıklı kernel önbellek bildirimleri bir grup oluşturur. CPU üyeliği fiziksel CCD veya NUMA ataması değildir. Eksik gruplar ayrı gösterilir.</translation>
    </message>
    <message>
        <source>L3 cache %1</source>
        <translation>L3 önbellek %1</translation>
    </message>
    <message>
        <source>Unverified cache declaration (CPU %1)</source>
        <translation>Doğrulanmamış önbellek bildirimi (CPU %1)</translation>
    </message>
    <message>
        <source>Reciprocal declarations</source>
        <translation>Karşılıklı bildirimler</translation>
    </message>
    <message>
        <source>Incomplete or conflicting declarations</source>
        <translation>Eksik veya çelişkili bildirimler</translation>
    </message>
    <message>
        <source>Logical CPU %1</source>
        <translation>Mantıksal CPU %1</translation>
    </message>
    <message>
        <source>Cache architecture display capped at 8192 rows.</source>
        <translation>Önbellek mimarisi görünümü 8192 satırla sınırlıdır.</translation>
    </message>
    <message>
        <source>Cache architecture capture is incomplete or reached its safety limit; no verified graph is available.</source>
        <translation>Önbellek mimarisi kaydı eksik veya güvenlik sınırına ulaştı; doğrulanmış grafik yok.</translation>
    </message>
    <message>
            <source>Firmware Power Target Evidence</source>
            <translation>Firmware Güç Hedefi Kanıtları</translation>
        </message>
        <message>
            <source>Attribute</source>
            <translation>Öznitelik</translation>
        </message>
        <message>
            <source>Current target</source>
            <translation>Mevcut hedef</translation>
        </message>
        <message>
            <source>Reported default</source>
            <translation>Bildirilen varsayılan</translation>
        </message>
        <message>
            <source>Reported range</source>
            <translation>Bildirilen aralık</translation>
        </message>
        <message>
            <source>Captured at</source>
            <translation>Ölçüm zamanı</translation>
        </message>
        <message>
            <source>Source path</source>
            <translation>Kaynak yolu</translation>
        </message>
        <message>
            <source>Firmware native units unless explicitly reported. A default is metadata, not a measured stock limit. A target is not evidence of enforcement. No direct WMI commands are issued.</source>
            <translation>Açıkça bildirilmedikçe firmware yerel birimleri kullanılır. Varsayılan değer üstveridir, ölçülmüş stok limit değildir. Hedef, uygulandığının kanıtı değildir. Doğrudan WMI komutu gönderilmez.</translation>
        </message>
        <message>
            <source>step</source>
            <translation>adım</translation>
        </message>
        <message>
            <source>Current target unavailable</source>
            <translation>Mevcut hedef okunamadı</translation>
        </message>
        <message>
            <source>Target outside reported range</source>
            <translation>Hedef bildirilen aralığın dışında</translation>
        </message>
        <message>
            <source>Range unavailable</source>
            <translation>Aralık okunamadı</translation>
        </message>
        <message>
            <source>Reported target (not enforcement)</source>
            <translation>Bildirilen hedef (uygulama kanıtı değil)</translation>
        </message>
        <message>
            <source>Platform profile unavailable or changed during capture; do not compare these targets as a single profile.</source>
            <translation>Platform profili okunamadı veya ölçüm sırasında değişti; bu hedefleri tek bir profil olarak karşılaştırmayın.</translation>
        </message>
        <message>
            <source>Intel PMU evidence</source>
            <translation>Intel PMU kanıtı</translation>
        </message>
        <message>
            <source>Intel hybrid PMU membership is shown separately; missing or conflicting lists do not identify a core type.</source>
            <translation>Intel hibrit PMU üyeliği ayrı gösterilir; eksik veya çelişkili listeler çekirdek türünü belirlemez.</translation>
        </message>
        <message>
            <source>Performance PMU (cpu_core)</source>
            <translation>Performans PMU (cpu_core)</translation>
        </message>
        <message>
            <source>Efficiency PMU (cpu_atom)</source>
            <translation>Verimlilik PMU (cpu_atom)</translation>
        </message>
        <message>
            <source>Conflicting PMU membership</source>
            <translation>Çelişkili PMU üyeliği</translation>
        </message>
        <message>
            <source>Topology changed during capture</source>
            <translation>Ölçüm sırasında topoloji değişti</translation>
        </message>
    </context>
    <context>
        <name>profilediff</name>
        <message>
            <source>%1 differing fields; %2 omitted by the display limit.</source>
            <translation>%1 farklı alan; görüntüleme sınırı nedeniyle %2 alan gösterilmedi.</translation>
        </message>
        <message>
            <source>A snapshot could not be read.</source>
            <translation>Anlık kayıt okunamadı.</translation>
        </message>
        <message>
            <source>Field</source>
            <translation>Alan</translation>
        </message>
        <message>
            <source>Left</source>
            <translation>Sol</translation>
        </message>
        <message>
            <source>Not specified</source>
            <translation>Belirtilmemiş</translation>
        </message>
        <message>
            <source>Profile Comparison</source>
            <translation>Profil Karşılaştırma</translation>
        </message>
        <message>
            <source>Right</source>
            <translation>Sağ</translation>
        </message>
        <message>
            <source>Saved configuration comparison only. Missing values are not interpreted as zero or reset. No hardware writes.</source>
            <translation>Yalnızca kayıtlı yapılandırma karşılaştırılır. Eksik değerler sıfır veya sıfırlama olarak yorumlanmaz. Donanıma yazılmaz.</translation>
        </message>
        <message>
            <source>Two readable snapshots are needed.</source>
            <translation>Okunabilir iki kayıt gerekli.</translation>
        </message>
            <message><source>All-core CO</source><translation>Tüm çekirdek CO</translation></message>
        <message><source>Curve offset</source><translation>Eğri ofseti</translation></message>
        <message><source>Physical cores</source><translation>Fiziksel çekirdekler</translation></message>
        <message><source>Firmware limits</source><translation>Firmware sınırları</translation></message>
        <message><source>CPU PL1 (W)</source><translation>CPU PL1 (W)</translation></message>
        <message><source>CPU PL2 (W)</source><translation>CPU PL2 (W)</translation></message>
        <message><source>CPU PL3 (W)</source><translation>CPU PL3 (W)</translation></message>
        <message><source>CPU cross-load limit (W)</source><translation>CPU ortak yük sınırı (W)</translation></message>
        <message><source>CPU temperature (°C)</source><translation>CPU sıcaklığı (°C)</translation></message>
        <message><source>GPU temperature (°C)</source><translation>GPU sıcaklığı (°C)</translation></message>
        <message><source>GPU cTGP (W)</source><translation>GPU cTGP (W)</translation></message>
        <message><source>GPU Dynamic Boost ceiling (W)</source><translation>GPU Dynamic Boost üst sınırı (W)</translation></message>
        <message><source>GPU Dynamic Boost floor (W)</source><translation>GPU Dynamic Boost alt sınırı (W)</translation></message>
        <message><source>Fan curve</source><translation>Fan eğrisi</translation></message>
        <message><source>Full-speed fans</source><translation>Tam hızlı fanlar</translation></message>
        <message><source>Context ID</source><translation>Bağlam kimliği</translation></message>
        <message><source>Session ID</source><translation>Oturum kimliği</translation></message>
        <message><source>Reference runs</source><translation>Referans denemeleri</translation></message>
        <message><source>Runs</source><translation>Denemeler</translation></message>
        <message><source>Weak measurements</source><translation>Zayıf ölçümler</translation></message>
        <message><source>Dropped measurements</source><translation>Atılan ölçümler</translation></message>
        <message><source>Refused measurements</source><translation>Reddedilen ölçümler</translation></message>
        <message><source>Noise (recorded objective order)</source><translation>Gürültü (kayıtlı hedef sırası)</translation></message>
        <message><source>Ended early</source><translation>Erken sonlandı</translation></message>
        <message><source>Power waits</source><translation>Güç beklemeleri</translation></message>
        <message><source>Unknown</source><translation>Bilinmiyor</translation></message>
        <message><source>Yes</source><translation>Evet</translation></message>
        <message><source>No</source><translation>Hayır</translation></message>
        <message><source>More nested data in exported snapshot</source><translation>Dışa aktarılan görüntüde daha fazla iç içe veri var</translation></message>
        <message><source>Additional entries omitted from view</source><translation>Ek kayıtlar görünüm sınırı nedeniyle gösterilmiyor</translation></message>
        <message><source>Empty</source><translation>Boş</translation></message>
    </context>
    <context>
        <name>TrialBar</name>
        <message><source>Testing — back to stock in %1 s unless you keep it.</source><translation>Test ediliyor — korumazsanız %1 sn içinde stok değerlere dönüş istenecek.</translation></message>
        <message><source>Kept.</source><translation>Korundu.</translation></message>
        <message><source>Revert requested; see the curve panel for the result.</source><translation>Geri dönüş istendi; sonuç için eğri paneline bakın.</translation></message>
        <message><source>Revert unavailable: no reset callback.</source><translation>Geri dönüş kullanılamıyor: sıfırlama işlevi yok.</translation></message>
    </context>
</TS>