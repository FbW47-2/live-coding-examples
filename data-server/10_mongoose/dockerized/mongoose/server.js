import mongoose from 'mongoose';

// original source is the mongoose' "Getting Started":
// https://mongoosejs.com/docs/index.html

const HOST = 'localhost';
const PORT = '27017';
const USER = 'root';
const PASS = 'example';

const DATABASE = 'test';
const COLLECTION = 'collection_a';

const log = console.log;

function logError(e) {
	console.error(e);
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error:'));
db.once('close', () => console.log('database-connection closed'));

// https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-connect
mongoose.connect(
	//`mongodb://${USER}:${PASS}@${HOST}:${PORT}`, 
	`mongodb://${USER}:${PASS}@${HOST}:${PORT}/${DATABASE}`, 
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true,
		auth: { authSource: "admin" } /* fix for Authentication Error: https://stackoverflow.com/questions/45576367/mongoose-connection-authentication-failed */
	}
);


await db.once('open', async () => {
	console.log('database-connection opened')

	// Ein Schema bildet die Basis, - es definiert Eigenschaften (Attribute und Methoden).
	const schema = mongoose.Schema({
		name: String
	});

	schema.methods.getName = function() {
		return this.name? this.name : 'NOT SET';
	}

	// aus dem Schema wird ein Model abgeleitet:
	const MyModel = mongoose.model('Model', schema);

	const myInstance = new MyModel({name: "Thomas"});

	log("instance' name:", myInstance.getName());
	// up to now only available inside of running program

	log('saving to database');
	await myInstance.save((err, instance) => {
		if (err) return console.error('error saving instance:', err);
		console.log("instance saved");
	});

	MyModel.find((err, instances) =>{
		if (err) return console.error('error in Model.find', err);
		console.log('instances:', instances);
	});
});

//db.close();
