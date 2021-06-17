require("dotenv").config();

const express = require("express");
// wir erstellen einen Server mit express, indem wir express() aufrufen (ähnlich http.createServer())
const server = express();

// unser Server soll auf einen bestimmten Port hören, den wir aus der environment entnehmen
server.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
});

// wichtig, um auf den Body der Anfrage zugreifen zu können
// siehe server.post("/params-test"... weiter unten
server.use(express.urlencoded({ extended: true }));

// wir können mit den Methoden get(), post(), put(), delete() etc. in Kombination mit dem Pfad auf Requests reagieren
server.get("/movies", (request, response) => {
    // über response.send() senden wir eine Rückmeldung an den Client. Express schließt den Response automatisch, somit fällt der Aufruf response.end() weg
    response.send("movies!");
});


server.use((request, response) => {
    response
        .status(404)
        .send("not found :-(");
});