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

	// https://mongoosejs.com/docs/api/model.html#model_Model.find
	console.log("find()");
	await User.find((err, instances) =>{
		if (err) return console.error('error in Model.find', err);
		console.log('instances:', instances);
	});

	// https://mongoosejs.com/docs/api/model.html#model_Model.findOne
	var userMask = {email: "thomas.hofmann@digitalcareerinstitute.org"};

	console.log("with .exec():");
	var user = await User.findOne(userMask).exec();
	console.log("user:", user);

	console.log();

	console.log("with callback:");
	await User.findOne(userMask, (err, instance) => {
		if (err) return console.error('error in User.findOne', err);
		console.log('user:', instance);
	});
	
	db.close();
});

