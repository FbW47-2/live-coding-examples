import express from 'express';
import serveIndex from 'serve-index';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';
dotenv.config({ path: "./config.env" });

const server = express(); 

server.use(fileUpload());
server.use(express.static('public'));

// ================================================================
server.post('/public/upload', function (req, res) {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send('No files were uploaded.');
	}

    //console.log(`Post(): ${req.method} ${req.url}`);    

    const file = req.files.file;

	const targetFile = './public/upload/' + file.name;

	file.mv(targetFile, function (err) {
		if (err) {
			return res.status(500).send(err);
		}

		res.send(`Datei "${file.name}" hochgeladen. <br><br><a href="/public/upload/">WEITER</a>`);
	});
});

server.use('/public',
           express.static('public'),
           serveIndex('public', { 'icons': true })
);

server.listen(process.env.PORT, () => console.log(`Server is listening on Port ${process.env.PORT}`));


