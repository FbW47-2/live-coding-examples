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
	const UserSchema = mongoose.Schema({
		name: String,
		email: String
	});

	const User = mongoose.model('User', UserSchema);

	console.log("before deletion:");
	await User.find((err, instances) =>{
		if (err) return console.error('error in Model.find', err);
		console.log('instances:', instances);
	});

	
	console.log("Deleting user:");
	// https://mongoosejs.com/docs/models.html#deleting
	var userMask = {email: "thomas.hofmann@digitalcareerinstitute.org"};
	await User.deleteOne(userMask);

	console.log("after deletion:");
	await User.find((err, instances) =>{
		if (err) return console.error('error in Model.find', err);
		console.log('instances:', instances);
	});
	
	db.close();
});

