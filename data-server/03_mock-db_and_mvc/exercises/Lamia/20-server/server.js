// source:
// https://github.com/typicode/lowdb/tree/d940fcaeff2db9f8b731685159a0039d67067823/examples#readme

import express from 'express';
import { JSONFile, Low } from 'lowdb';

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {

		const allowedMethods = ["GET", "POST", "PUT", "DELETE"];

		const isAllowed = allowedMethods.includes (req.method);

		if (!isAllowed) return res.status(405).send(`${req.method} is not allowed`);

		next();
});

app.use((error, req, res, next) => {

	

	next(new Error("my first middleware error"));
});

app.use((req, res, next) => {

	console.log(`${req.method} ${req.url}`);
	next();
});

// app.use((req, res, next) => {

// 	const apiKey = req.query.apiKey;

// 	const isValidKey = apiKey === "asdhfmmdfghfkjzukukdt78i956rjdhr";

// 	if (!isValidKey) return res.status(401).send(`api key is not valid`);

// 	next();
// });


//-----------------------------------------------------------------------------------------------

const adapter = new JSONFile('db.json');
const db = new Low(adapter);

await db.read();
db.data ||= { messages: [] };

app.listen(3000, () => {
	console.log('listening on port 3000');
});

// http://localhost:3000/messages/1
app.get('/messages/:id', async (req, res) => {
	// TODO: sende Response mit der Nachricht (ID) als json zum Client.
	// req.params("name")
	const id = req.params.id;
	res.send(db.data.messages.find(value => value.id === id

	));
});

//1.Aufgabe
// app.get('/messages', async (req, res) => {
// 	// TODO: sende Response mit der Nachricht (ID) als json zum Client.
// 	// req.params("name")
// 	res.send(db.data.messages); //1. Aufgabe
// })

//2.Aufgabe
app.get('/messages', async (req, res) => {
	
	// req.params("name")
	const filteredMessages = db.data.messages.filter( message => {
		
		
		return message.id >= req.query.startid
	});
	console.log("query", req.query);
	res.send(filteredMessages.slice(0, req.query.count)); 
})

//Aufgabe 3
app.post('/messages', async (req, res) => {
	// console.log(req.body);
	const lastId = db.data.messages.reduce( (acc, message) => {

		return acc < message.id ? message.id : acc

	}, 0)

	db.data.messages.push({ id: +lastId + 1, title: req.body.title, text: req.body.text });
	await db.write();
	
	res.send("data written");
});

//Aufgabe 4
app.delete("/messages/:id", async (req, res) => {
	console.log("es geht");
	const messageIndex = db.data.messages.findIndex (message => +message.id === +req.params.id);
	console.log(messageIndex);
	// res.send({ messageIndex });
	const a = db.data.messages.splice(messageIndex, 1);
	console.log(a);
	await db.write();
	res.status(204).send(); //no content, nichts wieder zurückgeliefert
	// res.send(a[0]);
});

//Aufgabe 5
app.put("/messages/:id", async (req, res) => {

	//finde index der message in der datenbank anhand 
	
	const newMessage = {

		id: +req.params.id,
		...req.body, //es gibt nur den inhalt des objects, den man in postman angibt
	};

	console.log(newMessage);
	const oldMessageIndex = db.data.messages.findIndex ( message => +message.id === +req.params.id);
	db.data.messages[oldMessageIndex] = newMessage;
	await db.write();
	res.status(204).send();
});



app.use((error, req, res, next) => {


	console.log(error);
	res.status(500).send();
});