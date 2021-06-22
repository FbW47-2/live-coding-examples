import express from 'express';
import fileUpload from 'express-fileupload';
import serveIndex from 'serve-index';

const PORT = 3000;

const app = express();
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});

// *** static ***
app.use(express.static('public'));

// *** static with prefix ***
app.use('/static', express.static('public'));

// *** file upload ***

app.use(fileUpload());

app.post('/upload', function (req, res) {
    const TARGET_DIR = './uploaded_files/';

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    let uploadPath = TARGET_DIR + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
        if (err)
        return res.status(500).send(err);

        res.send('file uploaded!');
    });
});


// *** serve uploaded_files ***
app.use('/uploaded', express.static('uploaded_files'));

// *** serve uploaded files, with the added capability to show the directory listing/index
// source: https://github.com/expressjs/serve-index
//                         serve files                       serve dir-indices
app.use('/uploaded_index', express.static('uploaded_files'), serveIndex('uploaded_files', {'icons': true}));

// *** upload multiple files ***

app.post('/upload_multiple_files', function (req, res) {
    console.log("filename:", req.files.file1.name);
    console.log("filename:", req.files.file2.name);
    console.log("filename:", req.files.file3.name);

    const countFiles = Object.keys(req.files).length;

    if (!req.files || countFiles === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    for(const fileAttr in req.files) {
        console.log("handling file: ", fileAttr);

        let file = req.files[fileAttr];
        let targetFile = './uploaded_files/' + file.name;

        // Use the mv() method to place the file somewhere on your server
        console.log("targetFile:", targetFile);
        file.mv(targetFile, function(err) {
            if (err) return res.status(500).send(err);
        });

    }

    res.send(`${countFiles} file(s) uploaded`);
});
