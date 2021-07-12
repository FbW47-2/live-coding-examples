import db from "./lib/database.js";
import faker from "faker";

// Mit faker.js (http://marak.github.io/faker.js/, https://www.npmjs.com/package/faker)
// lassen sich verschiedenste Daten generieren. Wir können bspw. einen User erstellen, indem wir uns Name und E-Mail-Adresse von faker erzeugen lassen.

// Der Seed ist für faker der "Startpunkt", ab dem die Zufallsdaten generiert werden. Setzen wir diesen Wert (beliebige Zahl), bekommen wir immer die gleichen Daten heraus.
faker.seed(123456);

async function generateData () {
    // seed users
    // ------------------------------------------------------
    // Bevor wir neue Daten einfügen, wollen wir bestehende komplett löschen.
    // So stellen wir sicher, dass wir die Datenbank nicht überfüllen und immer mit der gleichen Anzahl an Datensätzen arbeiten können.
    await db.collection("users").deleteMany();

    // In diesem Array speichern wir unsere neuen User, bis wir sie in die Datenbank überführen
    const users = [];

    // Die for-Schleife fügt an das users-Array eine bestimmte Zahl neuer User an
    for (let i = 0; i < 5; i++) {
        // Hier nutzen wir jetzt faker, um einen Namen und eine E-Mail-Adresse zu generieren
        users.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
        });
    }

    // Schließlich speichern wir noch die Daten in die Datenbank.
    // Mit .insertMany() können wir ein Array mit Objekten übergeben, die als Dokumente in der entsprechenden Collection landen.
    await db.collection("users").insertMany(users);


    // seed articles
    // ------------------------------------------------------
    // Wie schon bei den Usern oben, können wir natürlich auch Artikel hinzufügen.
    // Wir können dieses Skript beliebig erweitern, um unsere Datenbank mit genügend Testdaten zu füllen.
    await db.collection("articles").deleteMany();

    const articles = [];

    for (let i = 0; i < 20; i++) {
        articles.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
        });
    }

    await db.collection("articles").insertMany(articles);
}

// Da wir eine async function erstellt haben, müssen wir hier auf das Promise warten.
// Tritt kein Fehler auf, beenden wir den Prozess mit process.exit(0).
// Andernfalls lassen wir uns den Fehler ausgeben und stoppen den Prozess mit einem Fehler (process.exit(1)).
generateData()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
