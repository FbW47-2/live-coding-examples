import express from 'express';
import serveIndex from 'serve-index';
import fileUpload from 'express-fileupload';

const PORT = 3002;

const app = express();

app.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);
});

app.use(fileUpload()); // erwartet header: "Content-Type: multipart/form-data", vgl. html-Formular

app.use(express.static('public'));

////-----------------
app.post('/upload_multiple_files', function (req, res){ //debe cuadrar con action en form html
	// console.log ("TargetFile: ", targetFile);
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send('No files were uploaded.');
	}
	
	const fileName = req.files.file_a;
	const fileAge = req.files.file_b;
	const filePhoto = req.files.file_c;
	const arrayFiles = [fileName, fileAge, filePhoto];
	
	console.log(arrayFiles.length);
	// console.log ("Post: ", file);
	console.log ("Post: ", arrayFiles);

//================================================//
	arrayFiles.forEach((file, i)=>{
		// const file = arrayFiles[i];
		const targetFile = './uploaded_files/'+ file.name;
		file.mv(targetFile, function (err) {
			if (err) {
			return res.status(500).send(err);
			}
			return res.send(`file ${file.name} uploaded.`);
		});
	})
	
	// for (let i = 0; i < arrayFiles.length; i++) {
	// 	const file = arrayFiles[i];
	// 	const targetFile = './uploaded_files/'+ arrayFiles[i].name;
	// 	console.log("2", arrayFiles[i].name);
	// 	console.log("3", file.name);
	// 	file.mv(targetFile, function (err) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		}
	// 			res.send(`file ${file.name} uploaded.`);
	// 			return;
	// 	});
	// 	//return;
	// }
	console.log("chao for");
});
//-->>/////////////////ERROR/////////////<<--
console.log("chao for 2");

app.use('/uploaded_files', // <- Route
	express.static('upload_multiple_files'), // <- Handler for static files
	serveIndex('upload_multiple_files', { 'icons': true }) // <- Handler directory index
);
console.log("chao for 3");

