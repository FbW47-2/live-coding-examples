import { JSONFile, Low } from 'lowdb';

const adapter = new JSONFile('./data/db.json');
const db = new Low(adapter);
await db.read();
db.data ||= { messages: [] };

const { messages } = db.data;

console.log("Startup Data:", messages);

async function getById(req, res, next) {
    const message = messages.find((p) => p.id === req.params.id);
    console.log("message:", message);
    res.send(message);
}

async function create(req, res, next) {
    console.log("body:", req.body);
    const post = messages.push(req.body);
    await db.write();
    res.send("done");
}

const controller = { create, getById };
export default controller;
