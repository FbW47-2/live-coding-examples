import express from "express";
import {JSONFile, Low} from "lowdb";
import M from "minimatch";

const app = express();
app.use(express.json());

const adapter = new JSONFile("db.json")
const db = new Low (adapter);


db.read()
db.data ||= {messages: []}

app.listen(2212, () =>{
    console.log("listening on port 2212")
})



app.post("/messages",async (req, res) =>{
    const newMessage = req.body;

    const lastId = db.data.messages.reduce((acc, message) => { 
        return acc < message.id ? message.id : acc;
    },0);

    newMessage.id = Number(lastId) +1;

    db.data.messages.push(newMessage);
    await db.write()

   res.status(201).send(newMessage);
})

app.delete("/messages/:id",async (req, res) =>{

    /* req.params.id */

    const filterMessages =  db.data.messages.filter((message) => message.id !== req.params.id );

    db.data.messages = filterMessages;
    await db.write()

    res.status(200).send("deleted");

})
