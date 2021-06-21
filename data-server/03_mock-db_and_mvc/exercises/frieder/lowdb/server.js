import express from 'express';
import messageRouter from './router/message.js';

const app = express();

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/message', messageRouter);
