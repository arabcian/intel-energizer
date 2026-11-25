#include "../window.h"
#include <QPushButton>
#include <QTemporaryDir>
#include <QDoubleSpinBox>
#include <QTimer>
#include <QFile>
#include <QEventLoop>
#include <QPlainTextEdit>

int main(int argc, char **argv) {
    QApplication app(argc, argv);
    QTemporaryDir state;
    if (!state.isValid()) return 1;
    qputenv("XDG_STATE_HOME", state.path().toUtf8());
    qputenv("XDG_CONFIG_HOME", state.path().toUtf8());
    QFile backend(state.filePath("stressapptest"));
    if (!backend.open(QIODevice::WriteOnly)) return 5;
    backend.write("#!/bin/sh\nprintf 'Status: PASS\\n'\n");
    backend.close();
    if (!backend.setPermissions(QFileDevice::ReadOwner | QFileDevice::ExeOwner)) return 6;
    qputenv("PATH", state.path().toUtf8() + ':' + qgetenv("PATH"));
    theme::load();
    Window window;
    window.show();
    if (auto *workflow = window.findChild<QTabWidget*>("intelWorkflows")) workflow->setCurrentIndex(1);
    auto *tests = window.findChild<QTabWidget*>("stabilityTests");
    if (!tests || tests->count() != 2) return 2;
    for (int i = 0; i < tests->count(); ++i) {
        tests->setCurrentIndex(i);
        app.processEvents();
        if (!tests->currentWidget()->isVisible()) return 2;
    }
    if (window.count() != 1 || window.intel->findChildren<QDoubleSpinBox*>().size() < 5) return 3;
    if (!window.cpu->findChild<QWidget*>("box_yellow") || !window.memory->findChild<QWidget*>("box_purple")) return 4;
    auto *start = window.memory->findChild<QPushButton*>();
    if (!start) return 7;
    start->click();
    if (!window.memory->operationActive()) return 8;
    QEventLoop loop;
    QTimer poll;
    QObject::connect(&poll, &QTimer::timeout, &loop, [&] {
        if (!window.memory->operationActive()) loop.quit();
    });
    poll.start(50);
    QTimer::singleShot(10000, &loop, &QEventLoop::quit);
    loop.exec();
    const auto history = memtest::load();
    auto *output = window.memory->findChild<QPlainTextEdit*>("testOutput");
    if (!output || !output->toPlainText().contains("Status: PASS")) return 10;
    return history.size() == 1 && history.first().toObject()["verdict"] == "pass" ? 0 : 9;
}
