import express from 'express';
import serveIndex from 'serve-index';
import fileUpload from 'express-fileupload';
// express-fileupload:
// docu: https://www.npmjs.com/package/express-fileupload
// sample-code: https://github.com/richardgirges/express-fileupload/tree/master/example

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);
});

app.use(fileUpload()); // erwartet header: "Content-Type: multipart/form-data", vgl. html-Formular

app.use(express.static('public'));

app.post('/upload', function (req, res) {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send('No files were uploaded.');
	}

	const file = req.files.file_a;

	const targetFile = './uploaded_files/' + file.name;

	file.mv(targetFile, function (err) {
		if (err) {
			return res.status(500).send(err);
		}

		res.send(`file ${file} uploaded.`);
	});
});

app.use('/uploaded_files', // <- Route
	express.static('uploaded_files'), // <- Handler for static files
	serveIndex('uploaded_files', { 'icons': true }) // <- Handler directory index
);
