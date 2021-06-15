import express from 'express';
import { JSONFile, Low } from 'lowdb';

const router = express.Router();

const adapter = new JSONFile('data/db.json');
const db = new Low(adapter);
await db.read();
db.data ||= { messages: [] };

const { messages } = db.data;

router.get('/:id', async (req, res) => {
    const message = messages.find((p) => p.id === req.params.id);
    res.send(message);
});

router.post('/', async (req, res, next) => {
    console.log("body:", req.body);
    const post = messages.push(req.body);
    await db.write();
    res.send("done");
});

export default router;
