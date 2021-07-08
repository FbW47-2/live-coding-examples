import db from './database/connection.js';
import User from './model/User.js';

db.once('open', async function() {
	console.log("connected");
	
	const userFilter = {
		//email: "eve@dci.org"
		//email: "eve@digitalcareerinstitute.org"
		email: "1234"
	};

	
	// https://mongoosejs.com/docs/api/model.html#model_Model.findOne
	// returns one matching object
	//var user = await User.findOne(userFilter).exec();
	//user = await User.findOne(userFilter, (err, userParam) => {
	//	if (err) return console.error('error finding user: ', userFilter, err);
	//	console.log('found user:', userParam);
	//});
    //
	//user.email = "eve@example.org";
	//await user.save();
	
	// Alternative in einem Schritt, inkl. _Fehlerbehandlung_ und Optionen
	var userUpdates = { email: "eve@dci.org" };

	// https://mongoosejs.com/docs/api/model.html#model_Model.findOneAndUpdate
	await User.findOneAndUpdate(
		userFilter, 
		userUpdates,
		{new: true}, // Option "new: true" führt dazu, dass der Callback den aktualisierten Nutzer als Parameter erhält, bei false ist es der noch unveränderte Nutzer
		(err, user) => {
			if (err) return console.error('error updating user:', user, err);
			console.log('user saved:', user);
		}
	);

	db.close(); // Die Datenbankverbindung wird abgebaut und das Programm beendet sauber.
});
