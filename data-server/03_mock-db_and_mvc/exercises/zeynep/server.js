import express from "express"
import {LowSync, JSONFileSync} from "lowdb"

const app = express();
app.use(express.json());

const adapter = new JSONFileSync("db.json");
const db = new LowSync(adapter);

db.read();

db.data ||= { messages:[] };

const PORT = 3434;

app.listen(PORT, ()=>{
    console.log(`listening on Port ${PORT}`);
});

//1. Get all messages
app.get("/", (req,res) =>{
    res.send("Home");
});

app.post("/messages", (req,res) =>{
    db.data.messages.push(req.body);
    res.send(req.body);
    db.write();
});

app.get("/messages", (req,res) =>{
    res.send(db.data.messages)
});

//2. Get count fom messages
//GET /messages/:fromID/:count

app.get("/messages/:startId/:count", (req,res) =>{
    const startId = +req.params.startId;
    const count = +req.params.count;
   
    const filteredMessages = db.data.messages.filter(message => message.id >= startId);
    
    const result = filteredMessages.slice(0,count);
    res.send(result);
});

//3. Create message

app.post("/messages/create", (req,res) =>{
    const lastId = db.data.messages.reduce((acc,message)=>{
        return acc< message.id ? message.id : acc;
    },0);
    
    const newMessage = req.body;
    newMessage.id = +lastId +1;

    db.data.messages.push(newMessage);
    db.write();

    res.status(201).send(newMessage);
});

//4. Delete message

app.delete("/messages/:id", (req,res) =>{
    const id = req.params.id;
    console.log(id);

    console.log(req.params);
    const filteredMessages = db.data.messages.filter(message => message.id !== +req.params.id);

    console.log(filteredMessages);

    db.data.messages = filteredMessages;
    db.write();

    res.send(filteredMessages);
});

//5. Update message
app.put("/messages/:id", (req,res) =>{
    const message = db.data.messages.find(message => +message.id === +req.params.id);
    
    message.title = req.body.title;
    message.text = req.body.text;
    db.write();
    res.status(201).send(message);
});

//6. Search message
app.get("/messages/:title", (req,res) =>{
    const title = req.params.title;

    const filteredMessages = db.data.messages.filter(message => message.title == title);

    res.send(filteredMessages);
});

//7. Move file 

