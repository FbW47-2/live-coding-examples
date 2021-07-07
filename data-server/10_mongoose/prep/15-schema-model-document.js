// source:
// https://mongoosejs.com/docs/documents.html

// JUST READ

import mongoose from 'mongoose';

const MyModel = mongoose.model('Test', new Schema({ name: String }));
const doc = new MyModel();

doc instanceof MyModel; // true
doc instanceof mongoose.Model; // true
doc instanceof mongoose.Document; // true
