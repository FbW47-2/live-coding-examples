import db from './database/connection.js';
import User from './model/User.js';

db.once('open', async function() {
	console.log("connected");

	// Statt direkt mit der Datenbank zu interagieren, greifen wir hier auf die Funktion zu,
	// die wir im Model definiert und exportiert haben.
	// So kümmern wir uns hier nur darum, dass wir einen User registrieren wollen, übergeben die notwendigen Parameter
	// und überlassen die eigentliche Arbeit dem Model.
	await User.register("name", "email@mail.org");

	db.close();
});
