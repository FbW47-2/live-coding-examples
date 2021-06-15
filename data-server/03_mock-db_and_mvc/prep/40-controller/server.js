// source:
// https://github.com/typicode/lowdb/tree/d940fcaeff2db9f8b731685159a0039d67067823/examples#readme

import express from 'express';
import routerMessages from './router/messages.js';

const app = express();
// http://expressjs.com/en/4x/api.html#express.json
app.use(express.json());
//app.use(express.json({type: 'application/json'}));
//app.use(express.json({type: '*/*'}));

app.use('/messages', routerMessages);

app.listen(3000, () => {
    console.log('listening on port 3000');
});
