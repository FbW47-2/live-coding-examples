// Das Modul dotenv liest die .env aus und fügt deren Werte an process.env an
require("dotenv").config();
const fs = require("fs");
const http = require("http");

// Mit dem http-Modul lässt sich ein Server erstellen, der auf Requests reagieren kann
// An die Funktion createServer() übergeben wir eine Callback Function, die zwei Parameter enthält: request & response
const server = http.createServer((request, response) => {
    // In request sind viele nützliche Informationen zur Anfrage enthalten, bspw. Method und URL
    console.log({
        method: request.method,
        url: request.url,
    });

    // wir können anhand request.url den Pfad unterscheiden und entsprechend mit anderen Antworten reagieren
    switch (request.url) {
        case "/movies":
            // über response bauen wir unsere Antwort an den Client auf...
            response.write("movies!");
            // ...und schließen die Antwort ab, sobald wir fertig sind.
            response.end();
            break;
        case "/":
            // Hier wollen wir eine Textdatei auslesen, deren Pfad wir in der Umgebung definieren
            // Mit dem Modul fs (von node selbst, muss also nicht nachinstalliert werden) können wir auf Dateien lesen, schreiben, verschieben,...
            fs.promises.readFile(process.env.FILEPATH, "utf8")
                .then(content => {
                    response.write(content);
                    response.end();
                });
            break;
        case "/genres":
            response.write("genres!");
            response.end();
            break;
    }
});


// Bis jetzt haben wir den Server nur vorbereitet. Um ihn auf Anfragen hören zu lassen, nutzen wir die Funktion listen()
// Hier übergeben wir den Port, den wir in unserer Environment gespeichert haben
// und eine Funktion, die aufgerufen wird, sobald der Server gestartet ist.
server.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
});



// ==================================
// Anmerkungen zur package.json
// ==================================
//
// Damit wir den Server bei Änderungen nicht selbst neustarten müssen, haben wir nodemon installiert (npm i nodemon).
// Und um uns das Leben noch einfacher zu machen, haben wir in der package.json ein Skript hinterlegt, welches wir aufrufen können:
//
// ...
// "scripts": {
//     "dev": "nodemon server.js",
//     ...
// },
// ...
//
// Jetzt können wir im Terminal "npm run dev" starten, wodurch eigentlich "nodemon server.js" ausgeführt wird.
// Das macht besonders auch das Zusammenarbeiten einfacher, da man sich ggf. keine langen Befehle merken muss, sondern nur den Namen des Skripts.
// Und falls der mal nicht bekannt ist, kann man sich auch über den Befehl "npm run" sämtliche Skripte auflisten.
