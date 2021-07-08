import mongoose from 'mongoose';

const HOST = 'localhost';
const PORT = '27017';

const USER = 'root';
const PASS = 'example';

const DATABASE = 'test';

mongoose.connect(
	`mongodb://${USER}:${PASS}@${HOST}:${PORT}/${DATABASE}`, 
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true,
		auth: { authSource: "admin" }
	}
);

const db = mongoose.connection;

db.on('error', (err) => { console.error('connection error:', err) });

db.once('open', function() {
	console.log("connected");
	
	// https://mongoosejs.com/docs/documents.html

	const UserSchema = mongoose.Schema({
		name: String,
		email: String
	});

	const User = mongoose.model('User', UserSchema);

	const user = new User({
		name: "Thomas",
		email: "thomas.hofmann@digitalcareerinstitute.org"
	});

	console.log('user:', user);

	user.save(function (err, user) {
		if (err) return console.error(err, 'user:', user, 'could not be saved');
		console.log('user saved');
	  });

});
