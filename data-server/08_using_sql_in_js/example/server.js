import dotenv from "dotenv";
dotenv.config();

// Unsere Datenbankverbindung bauen wir in einer separaten Datei auf
// Dort erstellen wir auch eine Funktion, mit der wir unsere SQL-Statements ausführen können
import dbQuery from "./lib/database.js";

import express from "express";
const server = express();

server.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


// Die Route GET /sql-injection ist gefährlich und bietet Angreifern Vollzugriff auf die Datenbank!
// Da wir die ID aus der Query nehmen und ungefiltert in das Template Literal einfügen, ist es möglich, das SQL Statement mutwillig zu verändern
//
// GET /sql-injection?id=6
// Wir bekommen den User mit der ID 6 zurück
//
// GET /sql-injection?id=6 OR 1=1
// Wir bekommen sämtliche User zurück, da "1=1" immer TRUE ist und die Bedingung im Statement damit immer TRUE ist. Folglich bekommen wir alle Datensätze ausgegeben
//
// GET /sql-injection?id=0; DELETE FROM user; --
// Wir bekommen zwar keinen User zurückgeliefert, allerdings löschen wir alle Datensätze in der Tabelle user
// Grund dafür ist das DELETE Statement. Wir müssen lediglich das vorherige/eigentliche Statement korrekt schließen - hier mit der ID, die nicht zwingend existieren muss
// Zusätzlich stellen wir mit dem -- am Ende unseres bösen Statements sicher, dass nachfolgende Teile des eigentlichen Statements auskommentiert werden (bspw. ORDER BY oder weitere WHERE Bedingungen)
server.get("/sql-injection", (req, res) => {
    dbQuery(`
        SELECT
            id,
            name,
            email
        FROM
            \`user\`
        WHERE
            id = ${req.query.id};
    `)
        .then(result => res.json(result));
});

// Deutlich sicherer (aber nicht vollständig sicher, deshalb immer auch Sanitization & Validation beachten!) ist die Nutzung von sog. Prepared Statements
// Hierzu setzen wir statt der tatsächlichen Werte Fragezeichen (?) ein
// Als zweiten Parameter der Funktion dbQuery() übergeben wir anschließend die Werte in einem Array in der Reihenfolge des Vorkommens
// Durch das Prepared Statement wird dann sichergestellt, dass SQL Injections nahezu unmöglich gemacht werden
server.get("/prepared-statement", (req, res) => {
    dbQuery(`
        SELECT
            id,
            name,
            email
        FROM
            \`user\`
        WHERE
            id = ?;
    `, [req.query.id])
        .then(result => res.json(result));
});
