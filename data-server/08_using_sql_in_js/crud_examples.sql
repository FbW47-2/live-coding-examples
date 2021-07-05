-- -----------------------------------------------------
-- INSERT ----------------------------------------------
-- -----------------------------------------------------

-- Wir können mit INSERT INTO Datensätze in eine Tabelle einfügen
INSERT INTO
	`user`
VALUES
	-- Da die ID automatisch gesetzt werden soll (AUTO_INCREMENT), belegen wir den Wert mit NULL in unserem Statement
	-- Wichtig ist hier die korrekte Reihenfolge und Anzahl der Spalten
	(NULL, "Thomas L. Thornton", "ThomasLThornton@cuvox.de");


-- Geben wir nämlich nicht für alle Spalten Werte an, erhalten wir eine Fehlermeldung
INSERT INTO
	`user`
VALUES
	("Beau Gratton", "BeauGratton@einrot.com");


-- Um diesen Fehler zu verhindern, geben wir hinter dem Tabellennamen die Spaltenbezeichnungen in Klammern an
INSERT INTO
	`user` (name, email)
VALUES
	("Beau Gratton", "BeauGratton@einrot.com");


-- Dabei können wir die Reihenfolge selbst bestimmen, die VALUES müssen dann aber natürlich dazu passen
INSERT INTO
	`user` (email, name)
VALUES
	("SophiaAzevedoCunha@cuvox.de", "Sophia Azevedo Cunha");


-- Wollen wir mehrere Datensätze auf einmal einfügen, können wir sie in einem Statement zusammenfassen
-- Dazu listen wir sie wie hier gezeigt unter VALUES auf
INSERT INTO
	`user` (name, email)
VALUES
	("Wen Ku", "WenKu@cuvox.de"),
	("Manuela Roth", "ManuelaRoth@cuvox.de"),
	("Dana Zakharova", "DanaZakharova@cuvox.de");




-- -----------------------------------------------------
-- SELECT ----------------------------------------------
-- -----------------------------------------------------

-- Mit SELECT können wir Daten abrufen
-- Dem Befehl SELECT folgen alle Spalten, die wir anzeigen lassen wollen
-- Mit dem sog. Asterisk (*) können wir sämtliche Spalten ausgeben
-- ACHTUNG: Das * bitte nur zu Testzwecken verwenden, da sonst ggf. Daten unbeabsichtigt preisgegeben werden könnten
SELECT
	*
FROM
	`user`;


-- BESSER: Spaltennamen direkt angeben, sodass das Ergebnis nur die Informationen enthält, die wir gerade benötigen
SELECT
	id,
	`name`
FROM
	`user`;


-- Mit WHERE lassen sich die Datensätze nach verschiedensten Kriterien filtern
-- Wir können bspw. mit <Spaltenname> = <Wert> einen bestimmten Wert suchen, hier name = "Wen Ku"
SELECT
	email,
	`name`
FROM
	`user`
WHERE
	`name` = "Wen Ku";


-- Auch nach Teilen eines Strings lässt sich suchen. Dafür nutzen wir LIKE
-- Als Suchparameter verwenden wir einen String, der Prozentzeichen (%) an den Stellen enthält, an denen beliebige Zeichen stehen können
-- In diesem Fall soll auf jeden Fall @einrot in der E-Mail-Adresse vorkommen
-- Der erste Teil der Adresse und die Top Level Domain sind dabei aber egal, deshalb: %@einrot%
SELECT
	email,
	`name`
FROM
	`user`
WHERE
	email LIKE "%@einrot%";


-- Unsere Bedingungen im WHERE-Teil lassen sich beliebig mit logischen Operatoren verknüpfen: AND, OR, XOR, NOT...
SELECT
	email,
	`name`
FROM
	`user`
WHERE
	email LIKE "%@einrot%"
	OR name = "Wen Ku";




-- -----------------------------------------------------
-- UPDATE ----------------------------------------------
-- -----------------------------------------------------

-- Aktualisierungen führen wir mit UPDATE aus
-- Dazu bestimmen wir zuerst die Tabelle, die aktualisiert werden soll
-- Anschließend verändern wir die Werte mit SET, gefolgt vom Spaltennamen und dem neuen Wert
-- Spalten, die nicht verändert werden sollen, werden einfach nicht genannt
-- Mit WHERE können wir schließlich wieder einen oder mehrere bestimmte Datensätze zum Aktualisieren herausfiltern
UPDATE
	`reading_list`
SET
	`read` = 1
WHERE
	user_id = 6
	AND article_id = 2;


UPDATE
	`user`
SET
	name = "Thomas L. Müller",
	email = "ThomasLMueller@cuvox.de"
WHERE
	id = 1;




-- -----------------------------------------------------
-- DELETE ----------------------------------------------
-- -----------------------------------------------------

-- Datensätze löschen wir mit DELETE FROM
-- GANZ WICHTIG: Wenn wir nicht alle Datensätze aus der Tabelle löschen wollen, müssen wir wieder über WHERE filtern
DELETE FROM
	`user`
WHERE
	id = 3;


DELETE FROM
	`reading_list`
WHERE
	user_id = 6
	AND `read` = 1;



-- ----------------------------------------------------
-- JOINS ----------------------------------------------
-- ----------------------------------------------------

-- Um Daten aus mehreren Tabellen gleichzeitig auszulesen, die in Relation zu einander stehen, nutzen wir Joins
-- Wir konzentrieren uns hier vorerst nur auf LEFT JOIN
-- Dabei starten wir bei einer Ausgangstabelle, also dort, wo IDs anderer Tabellen aufgeführt sind
-- In unserem Beispiel ist das die reading_list, die die article_id und user_id beinhaltet

-- 1. Wir wählen zuerst alle Daten aus der Tabelle, mit der wir starten wollen:
-- Kleiner Tipp: Wenn wir der Tabelle einen Alias geben (`reading_list` rl), werden die nächsten Schritte leichter sein
SELECT
	*
FROM
	`reading_list` rl;

-- 2. Wir fügen den ersten LEFT JOIN auf eine andere Tabelle hinzu
-- Auch hier setzen wir einen Alias, um den Tabellenaufruf zu vereinfachen
-- Wir verknüpfen nun beide Tabellen über den Fremdschlüssel bzw. Primärschlüssel mit ON
SELECT
	*
FROM
	`reading_list` rl
LEFT JOIN
	`user` u
	ON rl.user_id = u.id;

-- 3. Wir fügen noch einen weiteren LEFT JOIN hinzu, um auch die Artikel dazuzuladen
SELECT
	*
FROM
	`reading_list` rl
LEFT JOIN
	`user` u
	ON rl.user_id = u.id
LEFT JOIN
	`article` a
	ON rl.article_id = a.id;

-- 4. Wir ersetzen das Asterisk durch die Spalten, die wir benötigen
-- Wir verwenden hier die Aliase, um Spalten eindeutig aus einer Tabelle zu laden
-- Gibt es mehrere Spalten mit gleichem Namen in den Tabellen, wird es zu Fehlern kommen, da nicht mehr genau bestimmt werden kann, was angezeigt werden soll
-- (nur der Spaltenname id wäre nicht eindeutig, daher a.id und u.id)
SELECT
	a.id,
	u.id,
	u.name,
	a.publish_date,
	rl.`read`
FROM
	`reading_list` rl
LEFT JOIN
	`user` u
	ON rl.user_id = u.id
LEFT JOIN
	`article` a
	ON rl.article_id = a.id
WHERE
	u.email = "LatifahTaroobSayegh@einrot.com";
