import { JSONFile, Low } from 'lowdb';

import express from 'express';
const USER_PATH = './data/users.json';

import methods from '../methods.js';


const router = express.Router();

const adapter = new JSONFile(USER_PATH);
const db = new Low(adapter);

await db.read();
db.data ||= { users: [] };
const collection = 'users';
const dataCollection = db.data[collection];

const getLastId = (collection) => {
    const length = db.data[collection].length -1;
    return db.data[collection][length].id;
}

const findIndex = (id, collection) => db.data[collection].findIndex(item => item.id == id);
const find = (id, collection) => db.data[collection].find(item => item.id == id);

router.post('/', async (req, res) => {
    const lastId = getLastId(collection);
    const body = req.body;
    body.id = lastId+1;
    dataCollection.push(body);
    await db.write();
    res.send('user saved');
});

router.get('/:id', (req, res) => {
    const item = find(req.params.id, collection);
    res.json(item);
});

router.put('/:id', async (req, res) => {
    const index = findIndex(req.params.id, collection);
    const {
        username = dataCollection[index].username,
        fullname = dataCollection[index].fullname,
        email = dataCollection[index].email
    } = req.body;
    Object.assign(dataCollection[index], { username: username, fullname: fullname, email: email });
    await db.write();
    res.send("user changed");
});

router.delete('/:id', async (req, res) => {
    methods.deleteById(req.params.id, collection)
        .then(() => res.send('user deleted'))
        .catch(e => res.status(e.status).send(e.message))
    ;
});

export default router;