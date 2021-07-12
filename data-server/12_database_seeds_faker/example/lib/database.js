import dotenv from "dotenv";
dotenv.config();

import mongodb from "mongodb";
const { MongoClient } = mongodb;

const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = client.db("online_magazine");

export default db;

// Wir benutzen die gleiche database.js, die wir auch schon in einem vorangegangen Projekt (09_intro_mongodb) genutzt haben.
// Modularität <3
