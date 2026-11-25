#pragma once
#include "inteltab.h"
#include "cpustressbox.h"
#include "memtestbox.h"
#include "theme.h"
#include <QApplication>
#include <QCloseEvent>
#include <QMessageBox>
#include <QScrollArea>
#include <QTabWidget>
#include "privileged.h"
#include <QJsonDocument>
#include <QProcess>
#include <unistd.h>

class Window : public QTabWidget {
public:
    CpuStressBox *cpu = new CpuStressBox;
    MemTestBox *memory = new MemTestBox;
    IntelTab *intel = new IntelTab(cpu, memory);
    QProcess *events = new QProcess(this);
    Window() {
        auto *scroll = new QScrollArea;
        scroll->setWidgetResizable(true);
        scroll->setWidget(intel);
        addTab(scroll, tr("Intel Undervolt"));
        cpu->setKernelLog(false);
        memory->setKernelLog(false);
        connect(events, &QProcess::readyReadStandardOutput, this, [this] {
            while (events->canReadLine()) {
                const auto event = QJsonDocument::fromJson(events->readLine()).object();
                if (event.value("ready").toBool()) {
                    cpu->setKernelLog(true);
                    memory->setKernelLog(true);
                } else {
                    cpu->onFault(event);
                    memory->onFault(event);
                }
            }
        });
        connect(events, &QProcess::finished, this, [this] {
            cpu->setKernelLog(false);
            memory->setKernelLog(false);
        });
        auto showAlert = [this](const QString &title, const QString &message) {
            auto *alert = new QMessageBox(QMessageBox::Warning, title, message, QMessageBox::Ok, this);
            alert->setAttribute(Qt::WA_DeleteOnClose);
            alert->open();
        };
        connect(cpu, &CpuStressBox::alert, this, showAlert);
        connect(memory, &MemTestBox::alert, this, showAlert);
        events->start(privileged::helperPath("intel-uv-helper"), {"--watch-faults"});
        setWindowTitle("Intel Energizer");
        resize(1060, 800);
    }
    ~Window() override {
        events->disconnect(this);
        if (events->state() != QProcess::NotRunning) { events->kill(); events->waitForFinished(1000); }
    }
    void closeEvent(QCloseEvent *event) override {
        if (intel->operationActive() || cpu->operationActive() || memory->operationActive()) {
            QMessageBox::information(this, windowTitle(), tr("Stop active tests and wait for pending operations before closing."));
            event->ignore();
        } else QTabWidget::closeEvent(event);
    }
};
