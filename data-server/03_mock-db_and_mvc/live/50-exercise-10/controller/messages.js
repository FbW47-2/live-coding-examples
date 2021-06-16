import { JSONFile, Low } from 'lowdb';

// Datenhaltung
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

await db.read();
// "||=" available since node v15.0
// /Datenhaltungdb.data ||= { messages: [] };


async function create(req, res) {
	console.log(req.body);
	db.data.messages.push(req.body);
	await db.write();
	res.send("data written");
}
async function getAll(req, res) {
	// return all messages
	res.status("200").send(db.data.messages);
}

async function getById(req, res) {
	// TODO: sende als Response die Nachricht (message) 
	//       deren ID mit dem Parameter (:id) übereinstimmt
	//       als json zum Client.
	const id = req.params.id;
	const message = db.data.messages.find(message => message.id === id)
	res.status("200").send(message);
}

const controller = { create, getAll, getById };
export default controller;
