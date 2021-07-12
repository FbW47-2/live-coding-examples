import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: String,
});

const User = mongoose.model('User', UserSchema);

// Im Model definieren wir sämtliche Funktionen, die das Objekt "können" soll
// So kapseln wir die Logik hier und müssen später nur noch die entsprechende Funktion aufrufen
// Das Ganze ist vergleichbar mit der objektorientierten Programmierung (OOP),
// bei der wir mit Objekten interagieren und ihnen sozusagen Befehle geben
async function read (id) {
	// ...
}

// Wir müssen uns bei den Funktionen nicht auf die klassischen CRUD-Befehle beschränken,
// sondern können die tatsächliche Logik hier abbilden.
// So erstellen wir nicht einfach nur einen User, sondern registrieren ihn
async function register (name, email) {
	// In der Funktion selbst beschreiben wir dann die Schritte, die für diese Aktion notwendig sind

	const user = new User({
		name,
		email,
	});

	await user.save(function (err, user) {
		if (err) return console.error(err, 'user:', user, 'could not be saved');
		console.log('user saved');
	});
}

// bzgl. tatsächlicher Logik: Wir aktualisieren ihn nicht komplett, sondern in diesem Fall nur die Zugangsdaten
async function updateCredentials (email, password) {
	// ...
}

// ...oder fügen einen Artikel zur Reading List hinzu
async function addArticleToReadingList (userId, articleId) {
	// ...
}

async function markArticleAsRead (userId, articleId) {
	// ...
}

export default {
	read,
	register,
	updateCredentials,
	addArticleToReadingList,
	markArticleAsRead,
};
