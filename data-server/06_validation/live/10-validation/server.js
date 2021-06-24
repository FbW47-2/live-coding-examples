// source:
// https://github.com/typicode/lowdb/tree/d940fcaeff2db9f8b731685159a0039d67067823/examples#readme

import express from 'express';

import routerMessages from './router/messages.js';
import routerHello from './router/hello.js';

const app = express();
app.use(express.json());

app.listen(3000, () => {
	console.log('listening on port 3000');
});

app.use('/messages', routerMessages);
//app.use('/MESSAGES', routerMessages);

app.use('/hello', routerHello);
