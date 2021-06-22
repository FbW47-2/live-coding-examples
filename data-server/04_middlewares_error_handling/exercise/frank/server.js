import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: "./config.env" });

import router from './routes.js'

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// == Erlaubte Methoden abtesten
server.use(( req, res, next ) =>
{
const allowedMethods = ['GET'];

if( !allowedMethods.includes(req.method) )
   return res.status(405).send(`Illegal method "${req.method}"!`);
next();
});

// == Sprache setzen 
server.use(( req, res, next ) =>
{
    let language = req.headers['accept-language'] || 'en';
    language.includes('de') ? language = 'de' : language = 'en';
    res.locals.language = language;        
    next();
});

server.use( '/', router );

server.use(( error, res, req, next ) =>
{
    console.log(error);
    res.status(500).send('error');
    process.exit(1);
});

server.listen(process.env.PORT, () => console.log(`Server is listening on Port ${process.env.PORT}`));



