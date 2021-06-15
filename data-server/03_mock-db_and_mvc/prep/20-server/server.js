// source:
// https://github.com/typicode/lowdb/tree/d940fcaeff2db9f8b731685159a0039d67067823/examples#readme

import express from 'express';
import { JSONFile, Low } from 'lowdb';

const app = express();
// http://expressjs.com/en/4x/api.html#express.json
app.use(express.json());
//app.use(express.json({type: 'application/json'}));
//app.use(express.json({type: '*/*'}));

const adapter = new JSONFile('data/db.json');
const db = new Low(adapter);
await db.read();
db.data ||= { posts: [] };

const { posts } = db.data;

app.get('/posts/:id', async (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    res.send(post);
});

app.post('/posts', async (req, res, next) => {
    console.log("body:", req.body);
    const post = posts.push(req.body);
    await db.write();
    res.send("done");
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
