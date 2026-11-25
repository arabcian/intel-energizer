#include "topology.h"
#include "powerprovenance.h"
#include <QCoreApplication>
#include <QDir>
#include <QFile>
#include <QMap>
#include <QHash>
namespace systemdiagnostics {
using namespace diag;
static QString tr(const char *s) { return QCoreApplication::translate("systemdiagnostics", s); }
static QString evidenceRead(const QString &root, const QString &p, qint64 limit = 65536) {
    QFile f(root + p);
    if (!f.open(QIODevice::ReadOnly)) return {};
    const QByteArray raw = f.read(limit + 1);
    if (f.error() != QFileDevice::NoError || raw.size() > limit || raw.contains('\0')) return {};
    return QString::fromUtf8(raw).trimmed();
}

static QString rd(const QString &root, const QString &path) { return evidenceRead(root,path); }
static QStringList ls(const QString &root,const QString &path,const QStringList &filter) {
    return QDir(root+path).entryList(filter,QDir::Dirs|QDir::NoDotAndDotDot);
}
static QString known(const QString &v) { return v.isEmpty() ? tr("unknown") : v; }
Table cpuTopology(const QString &root) {
    Table cpu; cpu.title = tr("CPU Package and Core Topology");
    cpu.headers = {tr("Domain"), tr("Logical CPU"), tr("Online"), tr("Thread siblings"), tr("Core type"), tr("Die ID"), tr("Topology evidence"), tr("Intel PMU evidence")};
    cpu.note = tr("Core groups require mutually consistent sibling lists. Core type is the kernel's raw value; frequency and SMT do not establish P/E type.");
    cpu.note += QLatin1Char(' ') + tr("Intel hybrid PMU membership is shown separately; missing or conflicting lists do not identify a core type.");
    const QString corePath = QStringLiteral("/sys/bus/event_source/devices/cpu_core/cpus");
    const QString atomPath = QStringLiteral("/sys/bus/event_source/devices/cpu_atom/cpus");
    const auto pmuCore = topologyfields::cpuList(evidenceRead(root, corePath).toStdString());
    const auto pmuAtom = topologyfields::cpuList(evidenceRead(root, atomPath).toStdString());
    struct Entry { QString name, base, siblings; topologyfields::Cpu data; };
    QList<Entry> entries;
    QHash<int, int> byId;
    auto parseInt = [](const QString &v) { return topologyfields::integer(v.toStdString()); };
    const auto online = topologyfields::cpuList(rd(root, QStringLiteral("/sys/devices/system/cpu/online")).toStdString());
    for (const auto &name : ls(root, QStringLiteral("/sys/devices/system/cpu"), {QStringLiteral("cpu[0-9]*")})) {
        const auto id = parseInt(name.mid(3));
        if (!id || byId.contains(*id) || entries.size() >= 65536) continue;
        const QString base = QStringLiteral("/sys/devices/system/cpu/") + name + QLatin1Char('/');
        const auto siblings = rd(root, base + QStringLiteral("topology/thread_siblings_list"));
        topologyfields::Cpu data{*id, parseInt(rd(root, base + QStringLiteral("topology/physical_package_id"))),
            parseInt(rd(root, base + QStringLiteral("topology/core_id"))), parseInt(rd(root, base + QStringLiteral("topology/die_id"))),
            topologyfields::cpuList(siblings.toStdString(), 256)};
        byId.insert(*id, int(entries.size())); entries << Entry{name, base, siblings, std::move(data)};
    }
    QMap<int, int> packages, cores;
    for (const auto &entry : entries) {
        const auto &d = entry.data;
        int parent = -1;
        if (d.package) {
            if (!packages.contains(*d.package)) { packages.insert(*d.package, int(cpu.rows.size())); cpu.parents << -1; cpu.add({tr("Package %1").arg(*d.package)}); }
            parent = packages.value(*d.package);
        }
        // Limit comparisons even for corrupt input claiming tens of thousands of SMT siblings.
        bool verified = d.siblings && !d.siblings->empty() && d.siblings->size() <= 256 && topologyfields::sameCore(d, d);
        if (verified) for (int sibling : *d.siblings) {
            const auto found = byId.constFind(sibling);
            if (found == byId.cend() || !topologyfields::sameCore(d, entries.at(found.value()).data)) { verified = false; break; }
        }
        if (verified) {
            const int key = d.siblings->front();
            if (!cores.contains(key)) { cores.insert(key, int(cpu.rows.size())); cpu.parents << parent; cpu.add({tr("Core %1").arg(*d.core)}); }
            parent = cores.value(key);
        }
        QString state = rd(root, entry.base + QStringLiteral("online"));
        if (state != QStringLiteral("0") && state != QStringLiteral("1")) state.clear();
        if (online) {
            const QString global = std::binary_search(online->begin(), online->end(), d.id) ? QStringLiteral("1") : QStringLiteral("0");
            if (state.isEmpty()) state = global;
            else if (state != global) state.clear(); // conflicting reads, possibly CPU hotplug
        }
        QString pmu = tr("unknown");
        if (state == QStringLiteral("1")) {
            using powerprovenance::PmuKind;
            auto kind = powerprovenance::pmuKind(d.id, pmuCore, pmuAtom);
            if (verified && kind != PmuKind::Unknown) for (int sibling : *d.siblings) {
                const auto other = powerprovenance::pmuKind(sibling, pmuCore, pmuAtom);
                if (other != PmuKind::Unknown && other != kind) { kind = PmuKind::Conflict; break; }
            }
            switch (kind) {
            case PmuKind::Core: pmu = tr("Performance PMU (cpu_core)"); break;
            case PmuKind::Atom: pmu = tr("Efficiency PMU (cpu_atom)"); break;
            case PmuKind::Conflict: pmu = tr("Conflicting PMU membership"); break;
            case PmuKind::Unknown: break;
            }
        }
        cpu.parents << parent;
        cpu.add({entry.name, entry.name, known(state), known(entry.siblings), known(rd(root, entry.base + QStringLiteral("topology/core_type"))),
                 d.die ? QString::number(*d.die) : tr("unknown"), verified ? tr("Consistent sibling declarations") : tr("Unverified core relationship"), pmu},
                 verified && !state.isEmpty() ? Level::Info : Level::Unknown);
    }
    if (pmuCore != topologyfields::cpuList(evidenceRead(root, corePath).toStdString()) ||
        pmuAtom != topologyfields::cpuList(evidenceRead(root, atomPath).toStdString()) ||
        online != topologyfields::cpuList(rd(root, QStringLiteral("/sys/devices/system/cpu/online")).toStdString())) {
        for (auto &row : cpu.rows) if (row.size() >= 8 && row.at(1).startsWith(QStringLiteral("cpu"))) row[7] = tr("Topology changed during capture");
    }
    return cpu;
}
}
