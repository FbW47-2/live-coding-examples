import express from 'express';
import { JSONFile, Low } from 'lowdb';

// require("dotenv").config();

import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const adapter = new JSONFile('db.json');

const db = new Low(adapter);

await db.read();
// db.data ||= {};

server.listen(process.env.PORT, () => {

    console.log("listening on port 3001");
});

server.get("/news", async (req, res) => {

    // await db.write();
    // console.log(req.headers);
    res.json(db.data.news.map( nachricht => 
        
        {

        const newsGerman = {
            "Id": nachricht.id,
            "Datum": nachricht.publishDate,
            "Sprache": "Deutsch",
            "Text": nachricht.de
        };
        const newsEnglish = {
            "id": nachricht.id,
            "date": nachricht.publishDate,
            "language": "English",
            "text": nachricht.en
        };

        return req.headers["accept-language"] == "de"? newsGerman : newsEnglish;

    }))
});

//Aufgabe 3

server.get("/news/:userId/:age", async (req, res) => {

    const userId = req.params.userId;

    console.log("query", req.query, req.query.name, req.query.surname);

    console.log("params", req.params, req.params.userId);

    console.log(userId);
    const currentIdObj = db.data.readingLists.find(readingList => +readingList.userId === +userId);
    
    if(!currentIdObj) {

        return res.status(404).send("not found :(");
    };

    const currentArticle = db.data.news.filter ( nachricht => {

        return currentIdObj.articles.includes(nachricht.id);
    });
    // console.log(articles);
    res.send(currentArticle);

})


