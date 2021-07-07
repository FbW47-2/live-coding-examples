import mongoose from 'mongoose';

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

mongoose.connect(
	`mongodb://${USER}:${PASS}@${HOST}:${PORT}/${DATABASE}`, 
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true,
		auth: { authSource: "admin" } /* fix for Authentication Error: https://stackoverflow.com/questions/45576367/mongoose-connection-authentication-failed */
	}
);

await db.once('open', async () => {
	//const UserSchema = mongoose.Schema(); // saving does not work without the correct schema.
	const UserSchema = mongoose.Schema({
		name: String,
		email: String
	});
	
	const User = mongoose.model('User', UserSchema);

	var userMask = {email: "thomas.hofmann@digitalcareerinstitute.org"};

	console.log("with callback:");
	var user = await User.findOne(userMask, (err, instance) => {
		if (err) return console.error('error in User.findOne', err);
		return instance;
	});
	
	user.name = "Thomas Hofmann";
	
	// https://mongoosejs.com/docs/documents.html#updating-using-save
	await user.save();

	user = await User.findOne(userMask).exec();
	console.log("user:", user);

	db.close();
});

