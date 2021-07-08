import db from './database/connection.js';
import User from './model/User.js';

db.once('open', async function() {
	console.log("connected");
	
	const userFilter = {
		name: "Eve"
	};

	//https://mongoosejs.com/docs/models.html#deleting
	await User.deleteOne(userFilter, (err, descriptionOfWhatWasDone) => {
		if (err) return console.error('error deleting user:', err);
		console.log('user deleted', descriptionOfWhatWasDone);
	});

	// Es ist auch möglich, mehrere Datensätze auf einmal zu löschen, siehe:
	// https://mongoosejs.com/docs/api/model.html#model_Model.deleteMany

	db.close(); // Die Datenbankverbindung wird abgebaut und das Programm beendet sauber.
});
