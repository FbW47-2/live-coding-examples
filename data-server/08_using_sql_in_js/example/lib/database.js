import dotenv from "dotenv";
dotenv.config();

// Wir nutzen den Datenbanktreiber mariadb
import mariadb from "mariadb";

// Statt einer einzelnen Verbindung erstellen wir einen sog. Pool, also mehrere Verbindungen, die automatisch genutzt werden
const pool = mariadb.createPool({
    connectionLimit: 10,
    waitForConnections: true,
    multipleStatements: true,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Unsere eigene Funktion dbQuery gibt ein Promise zurück, welches das Resultat passend aufbereitet
const dbQuery = (sql, params = []) => {
    return pool.query(sql, params)
        .then(result => {
            const [...data] = result;
            return data;
        });
};

export default dbQuery;
