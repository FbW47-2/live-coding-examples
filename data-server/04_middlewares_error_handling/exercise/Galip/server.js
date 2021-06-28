import express from 'express';
import { JSONFile, Low } from 'lowdb';

import dotenv from "dotenv";
dotenv.config();

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const adapter = new JSONFile('database.json');

const db = new Low(adapter);
await db.read();

server.listen(process.env.PORT, () => {
    console.log("listening on port 3002");
});

server.get("/news", async (req, res) => {
   

    const result = db.data.news.map(element => {
        return req.headers["accept-language"] == "de" ? element.de : element.en
    })

    res.send(result)
});

server.get("/news/:userId", async (req, res) => {
    const idOfUser = +req.params.userId;

    const userInfo = db.data.readingLists.filter(list => {
        return list.userId == idOfUser

    });

    const result = db.data.news.filter(nachricht =>  userInfo[0].articles.includes(+nachricht.id));

    res.send(result)

})

