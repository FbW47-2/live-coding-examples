// source:
// https://github.com/typicode/lowdb/tree/main/examples

import { LowSync, JSONFileSync } from 'lowdb';

// https://www.geeksforgeeks.org/node-js-process-argv-property/
const text = process.argv[2];
const adapter = new JSONFileSync('db.json');
const db = new LowSync(adapter);

db.read();
db.data ||= { messages: [] };

/*
// ohne initiale "db.json"-Datei wird db.data, wie folgt initialisiert:
db.data = {
	messages: []
}
*/

if (text) {
	db.data.messages.push({ "text": text });
	db.write();
}

console.log(db.data);
