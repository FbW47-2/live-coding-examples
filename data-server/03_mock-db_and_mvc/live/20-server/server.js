// source:
// https://github.com/typicode/lowdb/tree/d940fcaeff2db9f8b731685159a0039d67067823/examples#readme

import express from 'express';
import { JSONFile, Low } from 'lowdb';

const app = express();
app.use(express.json());

const adapter = new JSONFile('db.json');
const db = new Low(adapter);

await db.read();
// "||=" available since node v15.0
db.data ||= { messages: [] };

app.listen(3000, () => {
	console.log('listening on port 3000');
});

// http://localhost:3000/messages/1
// http://localhost:3000/messages/2
app.get('/messages/:id', async (req, res) => {
	// TODO: sende als Response die Nachricht (message) 
	//       deren ID mit dem Parameter (:id) übereinstimmt
	//       als json zum Client.
	const id = req.params.id;
	const message = db.data.messages.find(message => message.id === id)
	res.status("200").send(message);
})

app.post('/messages', async (req, res) => {
	console.log(req.body);
	db.data.messages.push(req.body);
	await db.write();
	res.send("data written");
});

