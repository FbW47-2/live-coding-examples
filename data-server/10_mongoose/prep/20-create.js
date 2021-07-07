import mongoose from 'mongoose';

// original source is the mongoose' "Getting Started":
// https://mongoosejs.com/docs/index.html

const HOST = 'localhost';
const PORT = '27017';
const USER = 'root';
const PASS = 'example';

const DATABASE = 'test';
const COLLECTION = 'collection_a';

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
	const UserSchema = mongoose.Schema({
		name: String,
		email: String
	});

	const User = mongoose.model('User', UserSchema);

	const user = new User({
		name: "Thomas", 
		email: "thomas.hofmann@digitalcareerinstitute.org"
	});

	await user.save((err, instance) => {
		if (err) return console.error('error saving instance:', err);
		console.log("instance saved", user);
	});
	
	db.close();
});

