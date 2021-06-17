import { JSONFile, Low } from 'lowdb';

import express from 'express';
const MESSAGES_PATH = './data/messages.json';


const router = express.Router();

const adapter = new JSONFile(MESSAGES_PATH);
const db = new Low(adapter);

await db.read();
db.data ||= { messages: [] };
const collection = 'messages';

const getLastId = (collection) => {
    const length = db.data[collection].length -1;
    return db.data[collection][length].id;
}

const findIndex = (id, collection) => db.data[collection].findIndex(item => item.id == id);

router.get('/all', (req, res) => {
    res.json(db.data.messages);
});

router.get('/', (req, res) => {
    const filtered = db.data.messages
        .filter((message, i) => message.id >= req.query.id && i <= req.query.count);
    res.json(filtered);
});

router.post('/', async (req, res) => {
    const lastId = getLastId(collection);
    const body = req.body;
    body.id = lastId+1;
    db.data[collection].push(body);
    await db.write();
    res.send('message saved');
});

router.delete('/', async (req, res) => {
    const index = findIndex(req.query.id, collection);
    db.data[collection].splice(index, 1);
    await db.write();
    res.send('message deleted');
});

router.put('/all', async (req, res) => {
    const index = findIndex(req.body.id, collection);
    const { id, ...rest } = req.body;
    Object.assign(db.data[collection][index], rest);
    await db.write();
    res.send("message changed");
});

router.put('/strict', async (req, res) => {
    const index = findIndex(req.body.id, collection);
    const {
        title = db.data[collection][index].title,
        text = db.data[collection][index].text 
    } = req.body;
    Object.assign(db.data[collection][index], { title: title, text: text });
    await db.write();
    res.send("message changed");
});

router.get('/text/:searchString', (req, res) => {
    const filtered = db.data[collection]
        .filter( item => item.text.match(new RegExp(req.params.searchString, 'i')));
    res.json(filtered);
});

export default router;