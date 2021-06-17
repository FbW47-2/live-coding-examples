import express from "express";
import { LowSync, JSONFileSync } from "lowdb";

const app = express();
app.use(express.json());

const adapter = new JSONFileSync('galipindatabasei.json');
const db = new LowSync(adapter);

db.read();

db.data = db.data || { galipinserveti: [] };

const port = 1616;

app.listen(port, ()=>{
    console.log(`Galip'in portudur burasi ${port}.`);
})

// app.get('/galip', (req, res) => {
//     console.log(req.body);
//     db.data.galipinserveti.push(req.body);
//     res.send("Galip hat 8€ in seinem Portemonnaie.");
// })

app.get('/galipsschatz', (req, res) => res.send(db.data.galipinserveti));

const myObje = {"id": "10", "text": "von User etwas"}; 

app.post('/galipsschatz', (req, res) => {
    console.log(req.body);
	db.data.galipinserveti.push(myObje);
    console.log(db.data.galipinserveti);
	db.write();
	res.send("data written");
})