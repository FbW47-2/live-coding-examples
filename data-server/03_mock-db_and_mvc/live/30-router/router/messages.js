import express from 'express';
import { JSONFile, Low } from 'lowdb';

const router = express.Router();

// Datenhaltung
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

await db.read();
// "||=" available since node v15.0
db.data ||= { messages: [] };
// /Datenhaltung

// http://localhost:3000/messages/1
// http://localhost:3000/messages/2
router.get('/:id', async (req, res) => {
	// TODO: sende als Response die Nachricht (message) 
	//       deren ID mit dem Parameter (:id) übereinstimmt
	//       als json zum Client.
	const id = req.params.id;
	const message = db.data.messages.find(message => message.id === id)
	res.status("200").send(message);
})

router.post('/', async (req, res) => {
	console.log(req.body);
	db.data.messages.push(req.body);
	await db.write();
	res.send("data written");
});

export default router;
