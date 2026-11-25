#include "window.h"
#include <QTranslator>
#include <QLocale>
int main(int argc, char **argv) {
    QApplication app(argc, argv);
    if (geteuid() == 0) return 1;
    app.setApplicationName("intel-energizer");
    QTranslator translator;
    if (translator.load(QLocale(), "intel-energizer", "_", ":/i18n")) app.installTranslator(&translator);
    theme::load();
    theme::apply(app);
    Window window;
    window.show();
    return app.exec();
}
