import dotenv from "dotenv";
dotenv.config();

import { LowSync, JSONFileSync } from "lowdb";
// zum Testen der Error Handler Middleware ändere den Dateinamen ab, sodass lowdb nicht auf die Datenbank zugreifen kann
const adapter = new JSONFileSync('db.json');
const db = new LowSync(adapter);

db.read();

// wenn wir die folgende Zeile aktivieren, sorgen wir dafür, dass wir nicht mitbekommen, wenn die Datenbank nicht erreichbar ist
// das kann dazu führen, dass uns das Debugging erschwert wird, da Anfragen an existierende Datensätze (bspw. GET /messages/2) mit einem "not found" beantwortet werden statt mit einem "server error"
// db.data = db.data || { messages: [] };

import express from "express";
const server = express();

server.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`));


// Middlewares
// -----------------------------------
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Middlewares lassen sich wie Controllers und Routers auslagern in eigene Dateien
// wir nutzen das Verzeichnis /middleware dafür
import logger from "./middleware/logger.js";
server.use(logger);

// Middlewares werden mit .use() eingebunden und sind ähnlich wie unsere Controllers aufgebaut
// hier benötigen wir allerdings neben request und response noch den dritten Parameter next
// next ist eine Funktion, die den Request zur nächsten Middleware weiterleitet
// rufen wir next() nicht auf, endet die Bearbeitung hier
// wir müssen dann sicherstellen, dass wir per res.send() o.Ä. eine Rückmeldung an den Client geben, sonst wird der Request nicht beendet und der Client wartet bis zum Timeout
server.use((req, res, next) => {
    // diese Middleware prüft auf erlaubte Methods. Ein Request via PATCH sollte hier nicht durchkommen
    // erlaubte methoden definieren
    const allowedMethods = ["GET", "POST", "PUT", "DELETE"];

    // prüfen, ob methode erlaubt ist
    const isAllowed = allowedMethods.includes(req.method);

    // falls nicht erlaubt, gib fehlermeldung zurück
    if (!isAllowed) return res.status(405).send(`${req.method} is not allowed`);

    next();
});

server.use((req, res, next) => {
    // wir können jederzeit an res weitere Informationen anhängen
    // es bietet sich an, diese in einem separaten Objekt zu speichern, um Namenskollisionen mit express zu vermeiden
    // diese Infos können bspw. in einer Middleware wie dieser hier vorbereitet werden, um später darauf zugreifen zu können
    // alle nachfolgenden Middlewares/Controllers haben Zugriff auf res und somit auch auf die angefügten Daten
    res.locals = {
        userId: 1,
        language: "de",
    };
    next();
});

server.use((req, res, next) => {
    try {
        // wenn Du die nachfolgende Zeile aktivierst, werfen wir einen Fehler, der im catch abgefangen und an die Funktion next() übergeben wird
        // wenn next mit einem Argument aufgerufen wird, überspringt der Request sämtliche Middlewares/Controllers bis zur Middleware, die den Error aufnimmt (siehe ganz unten)
        // throw new Error("database connection console.error;");
        next();
    } catch (error) {
        next(error);
    }
});

server.use("/messages", (req, res, next) => {
    // API key aus request laden
    const apiKey = req.query.apiKey;

    // key prüfen, ob gültig
    const isValidKey = apiKey === "asdjnwwhre8tgobenwgtro90eh390wfbew03t9";

    // falls nicht gültig, error ausgeben 401
    if (!isValidKey) return res.status(401).send(`api key is not valid`);
    next();
});

server.get("/user", (req, res) => {
    // die Request Headers sind unter req.headers verfügbar
    // req.headers ist ein Objekt, das wie req.body, req.params und req.query genutzt werden kann
    console.log(req.headers);

    // um Response Header selbst zu setzen, rufen wir die Funktion res.set() auf
    // wir übergeben zwei Argumente: das erste ist der Name des Headers, das zweite der Wert
    // hier senden wir bspw. die Sprache des Inhalts
    res.set("content-language", "de");
    res.json(res.locals);
});

// Endpoints
// -----------------------------------
server.get("/messages", (req, res) => {
    if (!req.query.startId) return res.json(db.data.messages);

    const filteredMessages = db.data.messages.filter(message => message.id >= +req.query.startId);
    const limitedMesssages = req.query.limit ? filteredMessages.slice(0, +req.query.limit) : filteredMessages;

    res.json(limitedMesssages);
});


server.get("/messages/:id", (req, res) => {
    const result = db.data.messages.find(message => message.id === +req.params.id);
    if (!result) return res.status(404).send();

    res.json(result);
});


server.post("/messages", (req, res) => {
    const lastId = db.data.messages.reduce((id, message) => id < message.id ? message.id : id, 0);
    const newId = lastId + 1;

    db.data.messages.push({
        id: newId,
        title: req.body.title,
        text: req.body.text,
    });


    db.write();
    res.status(201).send();
});


server.delete("/messages/:id", (req, res) => {
    // finde index der message in datenbank anhand der id: req.params.id
    const messageIndex = db.data.messages.findIndex(message => message.id === +req.params.id);

    // lösche message aus datenbank mit .splice(index, anzahl)
    db.data.messages.splice(messageIndex, 1);

    // aktualisiere datenbank
    db.write();

    // sende erfolgsmeldung an client
    res.status(204).send();
});


server.put("/messages/:id", (req, res) => {
    // finde index der message in datenbank anhand der id: req.params.id
    const messageIndex = db.data.messages.findIndex(message => message.id === +req.params.id);

    // erstelle neue message mit den daten aus dem body
    const newMessage = {
        id: +req.params.id,
        ...req.body,
    };

    // ersetze die bestehende message in der datenbank mit der neuen
    db.data.messages[messageIndex] = newMessage;
    db.write();

    // sende erfolgsmeldung an client
    res.status(204).send();
});


server.use((error, req, res, next) => {
    // erstellen wir eine Middleware mit vier Parametern, können wir Errors aus next(error) abfangen
    console.log(error);
    res.status(500).send();
    // wir lassen bei Server-Fehlern den Prozess abstürzen, damit wir keine Side Effects provozieren
    process.exit(1);
});
