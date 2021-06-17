import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: "./config.env" });

import router from './routes.js'

const app = express();
app.use(express.json());

app.listen(process.env.PORT, ()=>
{
    console.log(`Listen on Port ${process.env.PORT}`);
});

app.use('/', router);


