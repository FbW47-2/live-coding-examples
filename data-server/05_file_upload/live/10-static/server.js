import express from 'express';
import serveIndex from 'serve-index';

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);
});

//app.use(express.static('public')); // dotfiles default: liefert .Dateien nicht aus, aber .Verzeichnisse werden ausgeliefert
app.use(express.static('public', { 'dotfiles': 'deny' }));

app.use('/public_index',
	express.static('public_index'),
	serveIndex('public_index', { 'icons': true })
);
