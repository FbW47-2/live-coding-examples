import express from 'express';
import serveIndex from 'serve-index';

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);
});

app.use(express.static('public'));

app.use('/public_index',
	express.static('public_index'),
	serveIndex('public_index', { 'icons': true })
);
