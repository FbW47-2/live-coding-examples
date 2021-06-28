import { JSONFile, Low } from 'lowdb';

const adapter = new JSONFile('./data/db.json');
const db = new Low(adapter);
await db.read();
db.data ||= { messages: [] };

const { messages } = db.data;

async function getById(req, res, next) {
    const message = messages.find((p) => p.id === req.params.id);
    res.send(message);
}

async function create(req, res, next) {
    console.log("creating");
    const post = messages.push(req.body);
    await db.write();
    console.log("201 - created")
    res.status(201).send("done\n");
}

const controller = { create, getById };
export default controller;
