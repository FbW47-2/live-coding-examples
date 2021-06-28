import dotenv from "dotenv";
dotenv.config();

import { LowSync, JSONFileSync } from "lowdb";
const adapter = new JSONFileSync('database.json');
const db = new LowSync(adapter);

db.read();

import express from "express";
const server = express();

server.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));



// mit dieser Middleware verarbeiten wir die angeforderte Sprache aus dem Request Header
server.use((req, res, next) => {
    // zuerst legen wir die erlaubten Sprachen fest, in denen wir unsere Inhalte anbieten
    const availableLanguages = ["de", "en"];

    // wir wandeln mit der folgenden Zeile den Header "Accept-Language" so um, dass wir ein Array mit den allgemeinen Languagecodes erhalten
    // ist der Header nicht gesetzt, setzen wir ein leeres Array
    // mit der hier angegebenen Verarbeitung des Headers werden Strings mit mehreren Sprachen in ein Array umgewandelt, in dem jede Sprache vorformatiert ist
    // Beispiel: de-DE, de-AT;q=0.9, de-CH;q=0.8, en-US;q=0.7, en-GB;q=0.6   =>   ["de", "de", "de", "en", "en"]
    const acceptedLanguages = req.headers["accept-language"] ? req.headers["accept-language"].split(",").map(lang => lang.trim().substr(0, 2)) : [];

    // wir prüfen, ob die erste angeforderte Sprache verfügbar ist
    const acceptedLanguageAvailable = acceptedLanguages[0] && availableLanguages.includes(acceptedLanguages[0]);
    // ist sie verfügbar, nutzen wir diese, ansonsten fallen wir auf "de" zurück
    const contentLanguage = acceptedLanguageAvailable ? acceptedLanguages[0] : "de";

    // Verbesserungsvorschläge:
    // - q-Faktor im Header berücksichtigen
    // - Set statt Array verwenden, um Sprachen nicht mehrfach aufzuführen
    // - ODER: Sprachvariationen berücksichtigen (de-AT, de-CH, de-DE,...)
    // - weitere angeforderte Sprachen prüfen, wenn erste nicht verfügbar ist (acceptedLanguages[1], acceptedLanguages[2],... acceptedLanguages[n])

    // wir speichern die extrahierte Sprache in res.locals.language, um sie in den darauffolgenden Middlewares und Controllers zu nutzen
    res.locals = { language: contentLanguage };

    next();
});



// um alle Nachrichten in der richtigen Sprache auszugeben, rufen wir unsere Funktion prepareLocalizedNews() (siehe unten) mit allen Nachrichten aus der Datenbank auf und der Sprache, die wir in res.locals.language finden
server.get("/news", (req, res) => {
    const localizedNews = prepareLocalizedNews(db.data.news, res.locals.language);
    res.json(localizedNews);
});

// für die Reading Lists benötigen wir die UserId, welche wir als Parameter im Pfad übergeben
server.get("/readinglists/:userId", (req, res) => {
    // zunächst suchen wir den zur UserId passenden Eintrag in der Datenbank
    const readingList = db.data.readingLists.find(list => list.userId === +req.params.userId);

    // haben wir keinen Eintrag gefunden, senden wir einen Response mit Status 404 (Not Found) zurück und beenden die Ausführung dieser Funktion (return)
    if (!readingList) return res.status(404).send();

    // damit wir nur die News ausgeben, die auf der Reading List stehen, filtern wir alle Nachrichten in der Datenbank und prüfen, ob sich die ID im Array articles befindet
    const news = db.data.news.filter(news => readingList.articles.includes(news.id));

    // unsere gefilterten Nachrichten lokalisieren wir wieder mit unserer Funktion prepareLocalizedNews(), bevor wir sie an den Client senden
    const localizedNews = prepareLocalizedNews(news, res.locals.language);
    res.json(localizedNews);
});



// da wir die Zusammenstellung der Nachrichten in der richtigen Sprache mehrfach in der gleichen Form benötigen, haben wir dies in eine Funktion ausgelagert
// der erste Parameter ist dabei ein Array mit allen benötigten Nachrichten, der zweite die entsprechende Sprache
function prepareLocalizedNews (news, language) {
    return news.map(news => ({
        id: news.id,
        publishDate: news.publishDate,
        language,
        title: news[language].title,
        teaser: news[language].teaser,
        link: news[language].link,
    }));
}
