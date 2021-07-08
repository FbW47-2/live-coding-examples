import mongoose from 'mongoose';

const HOST = 'localhost';
const PORT = '27017';

const USER = 'root';
const PASS = 'example';

const DATABASE = 'test';

mongoose.set('useFindAndModify', false); 
// das führt dazu, dass mongoose.findOneAndUpdate() 
// nicht mehr mongodb.findAndModify() nutzt, 
// sondern mongodb.findOneAndUpdate().

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

export default db;
