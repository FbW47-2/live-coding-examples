// Usage:
// $> node 10-cli.js "TITLE"

// source:
// https://github.com/typicode/lowdb/tree/d940fcaeff2db9f8b731685159a0039d67067823/examples


import { JSONFileSync, LowSync } from 'lowdb';

const title = process.argv[2];
const adapter = new JSONFileSync('db.json');
const db = new LowSync(adapter);

db.read();
// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { posts: [] };

if (title) {
    db.data.posts.push({ "title": title });
    //db.data.posts.push({ title });
    db.write();
}

console.log(db.data);
