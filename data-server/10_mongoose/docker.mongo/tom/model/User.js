import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	name: String,
	email: String
});

const User = mongoose.model('User', UserSchema);

export default User;