import express from 'express';

const PORT = 3000;

const app = express();
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});

app.use(express.static('public'));

app.use('/static', express.static('public'));
