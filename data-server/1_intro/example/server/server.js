// Das Modul dotenv liest die .env aus und fügt deren Werte an process.env an
require("dotenv").config();
const fs = require("fs");

// Als Beispiel wollen wir eine Textdatei auslesen, deren Pfad wir in der Umgebung definieren
// Mit dem Modul fs (von node selbst, muss also nicht nachinstalliert werden) können wir auf Dateien lesen, schreiben, verschieben,...
fs.promises.readFile(process.env.FILEPATH, "utf8")
    .then(content => console.log(content));
