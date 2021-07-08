import db from './database/connection.js';
import User from './model/User.js';

db.once('open', async function() {
	console.log("connected");
	
	const userFilter = {
		email: "eve@example.org"
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
