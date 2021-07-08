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

db.once('open', async function() {
	console.log("connected");
	
	const UserSchema = mongoose.Schema({
		name: String,
		email: String
	});

	const User = mongoose.model('User', UserSchema);

	const userFilter = {
		email: "thomas.hofmann@digitalcareerinstitute.org"
	};

	var user = await User.findOne(userFilter).exec();
	
	// https://mongoosejs.com/docs/api/model.html#model_Model.find
	// returns an array with found objects
	var userList = await User.find(userFilter).exec();

	// https://mongoosejs.com/docs/api/model.html#model_Model.findOne
	// returns one matching object
	user = await User.findOne(userFilter, (err, userParam) => {
		if (err) return console.error('error finding user: ', userFilter, err);
		console.log('found user:', userParam);
	});
	
	db.close(); // Die Datenbankverbindung wird abgebaut und das Programm beendet sauber.
});
