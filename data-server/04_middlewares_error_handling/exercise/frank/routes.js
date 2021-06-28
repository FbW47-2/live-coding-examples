import express from 'express';
import { LowSync, JSONFileSync } from 'lowdb';

const router = express.Router();
const adapter = new JSONFileSync('./data/database.json');
const db = new LowSync(adapter);

db.read();

// ========= Alle News nach Sprache aus dem Header 'Accept-Language' auslesen
// ========= PFAD: /news
router.get('/news', (req, res) => 
{
    const solve = db.data.news.map((entry) => { 
           return { 'ID': entry.id, 'News': entry[res.locals.language] } 
    });
    //res.status("200").send(solve);
    res.json(solve);
});

// ========= News nach 'user-id' aus dem Body auslesen
// ========= PFAD /usernews
router.get('/usernews', (req, res) => 
{
    const userid = req.body['user-id'] || "";
    const user = db.data.readingLists.find(user => user.userId === +userid);
    let solve = [];
    
    if(user)
     {  
        solve = db.data.news.map((entry) => 
                             { 
                              return { 'ID': entry.id, 'News': entry[res.locals.language] } 
                             }).
                             filter(entry => user.articles.includes(entry.ID));
        res.json(solve);
     }  
    else 
        return res.status(404).send(`User not Found "${userid}"!`);

});

// ========= Alle anderen Pfade mit Fehler beenden
router.get([ '/', '/:id' ,'/:id/:id','/:id/:id/:id' ], (req, res) => 
{
    return res.status(404).send(`Illegal path "${req.url}"!`);
});

export default router;