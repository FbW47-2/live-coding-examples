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


// wir können eine sog. Query an die URL anhängen, wenn wir eine Anfrage senden
// dazu nutzen wir key-value-pairs, die wir vom Pfad mit einem ? trennen
// mehrere key-value-pairs lassen sich mit einem & von einander trennen
// Beispiel: localhost:3344/params-test?key1=value1&key2=value2
server.get("/params-test", (request, response) => {
    // die so übermittelten Daten sind dann in request.query nutzbar
    console.log(request.query);
    response.send();
});

// wenn ein Teil der URL variabel sein soll, kennzeichnen wir diesen mit einem : vor dem Variablennamen
// dadurch lassen sich bspw. gezielt einzelne "Ressourcen" ansprechen
// beachtet bitte, dass GET /params-test trotzdem noch über die o.g. Funktion abgefangen wird und die Anfrage erst hier landet, wenn etwas am Pfad anhängt
// Beispiel: /params-test/12345
server.get("/params-test/:id", (request, response) => {
    console.log(request.params);
    response.send();
});

// damit wir große Datenmengen und schützenswerte Informationen (Passwörter & Co.) nicht über die URL (als Query oder Param) senden müssen, können wir an den Request einen Body anhängen. Dafür benötigen die o.g. Middleware >> server.use(express.urlencoded({ extended: true })); <<
// anschließend sind die Daten über request.body verfügbar
server.post("/params-test", (request, response) => {
    console.log(request.body);
    response.send();
});


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
