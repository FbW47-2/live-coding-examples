require("dotenv").config();

const express = require("express");
// wir erstellen einen Server mit express, indem wir express() aufrufen (ähnlich http.createServer())
const server = express();

// unser Server soll auf einen bestimmten Port hören, den wir aus der environment entnehmen
server.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
});

// wir können mit den Methoden get(), post(), put(), delete() etc. in Kombination mit dem Pfad auf Requests reagieren
server.get("/movies", (request, response) => {
    // über response.send() senden wir eine Rückmeldung an den Client. Express schließt den Response automatisch, somit fällt der Aufruf response.end() weg
    response.send("movies!");
});

server.get("/cats", (request, response) => {
    const catfacts = [{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"58e008800aac31001185ed07","user":"58e007480aac31001185ecef","text":"Wikipedia has a recording of a cat meowing, because why not?","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","createdAt":"2018-03-06T21:20:03.505Z","used":false},{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"58e008630aac31001185ed01","user":"58e007480aac31001185ecef","text":"When cats grimace, they are usually \"taste-scenting.\" They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","createdAt":"2018-02-07T21:20:02.903Z","used":false},{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"58e00a090aac31001185ed16","user":"58e007480aac31001185ecef","text":"Cats make more than 100 different sounds whereas dogs make around 10.","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","createdAt":"2018-02-11T21:20:03.745Z","used":false},{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"58e009390aac31001185ed10","user":"58e007480aac31001185ecef","text":"Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","createdAt":"2018-03-04T21:20:02.979Z","used":false},{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"58e008780aac31001185ed05","user":"58e007480aac31001185ecef","text":"Owning a cat can reduce the risk of stroke and heart attack by a third.","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","createdAt":"2018-03-29T20:20:03.844Z","used":false}];

    // wenn wir JSON zurücksenden wollen, können wir diese Form erzwingen, indem wir response.json() nutzen statt response.send()
    response.json(catfacts);
});

// mit express.static() lassen sich einzelne Dateien und ganze Verzeichnisse aufrufbar machen
// Im Falle eines Verzeichnisses rufen wir als Client den Pfad mit dem Dateinamen auf (localhost:3344/birds/asciibird.txt)
server.use("/birds", express.static("public"));
// Im Falle einer einzelnen Datei reicht der Pfad (localhost:3344/surfin-bird)
server.use("/surfin-bird", express.static("public/surfinbird.txt"));

// express sucht nach den passenden Pfaden und Methoden und führt dann entsprechend die Funktionen aus.
// sollte keine passende Funktion gefunden werden, landet der Request "am Ende" unserer server.js und kann mit server.use() ohne Pfadangabe abgefangen werden.
// Das nutzen wir, um eine eigene Fehlermeldung zurückzusenden
server.use((request, response) => {
    response
        .status(404)
        .send("not found :-(");
});

// Wiederholung Statuscodes:
// 2xx - Erfolgsmeldungen
// 4xx - Clientseitige Fehler
// 5xx - Serverseitige Fehler
