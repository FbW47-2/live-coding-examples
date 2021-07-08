import db from './database/connection.js';
import User from './model/User.js';

db.once('open', async function() {
	console.log("connected");
	
	const user = new User({
		name: "Eve",
		email: "eve@example.org"
	});

	await user.save(function (err, user) {
		if (err) return console.error(err, 'user:', user, 'could not be saved');
		console.log('user saved');
	});

	db.close();
});
