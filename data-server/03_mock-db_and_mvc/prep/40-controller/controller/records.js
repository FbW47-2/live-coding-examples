import { JSONFile, Low } from 'lowdb';

const adapter = new JSONFile('./data/db.json');
const db = new Low(adapter);
await db.read();
db.data ||= { posts: [] };

const { posts } = db.data;

console.log("Startup Data:", posts);

async function getById(req, res, next) {
    const post = posts.find((p) => p.id === req.params.id);
    console.log("post:", post);
    res.send(post);

}

const controller = { getById };
export default controller;
