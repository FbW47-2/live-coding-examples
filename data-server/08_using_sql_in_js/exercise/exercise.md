Als Vorbereitung für die Anbindung der Datenbank an unser Online Magazine Backend wollen wir zunächst alle benötigten Datenbankabfragen schreiben. Wir benutzen hierfür das Schema aus der Datei `online_magazine.sql` und gehen nach dem CRUD-Schema vor.

CREATE (`INSERT`)
Schreibe die SQL-Befehle für das Erstellen folgender Datensätze:
1. Ein neuer User
2. Ein neuer Artikel
3. Eine neue Übersetzung für einen Artikel
4. Ein Artikel auf der Reading List
5. Ein neuer Kommentar eines Users zu einem Artikel

READ (`SELECT`)
All diese Daten nützen nichts, wenn wir sie nicht auslesen können. Das holen wir jetzt schnell nach:
6. Gib alle in der Datenbank gespeicherten Sprachen aus. Sortiere sie alphabetisch.
7. Erstelle eine Abfrage, die sämtliche Artikel nach Datum sortiert ausgibt. Je aktueller, desto weiter oben soll der Artikel auftauchen. Beachte dabei die Übersetzungen, die Du in der Tabelle `translation` findest.
8. Erweitere die Abfrage, sodass nur eine bestimmte Anzahl an Artikeln ausgegeben wird. Die Anzahl bestimmst Du selbst, sie wird später in der API dynamisch festgelegt.
9. Berücksichtige die Sprache (`lang_code`) bei der Ausgabe der Artikel.
10. Gib alle Kommentare eines Artikels aus, den Du über die `article_id` bestimmst. Sortiere sie absteigend anhand des `create_date`.
11. Frage sämtliche Kommentare eines Users ab.
12. Gib die Reading List eines Users aus. Sortiere nach gelesenen und ungelesenen Artikeln und nach Alter des Artikels (`publish_date`).
13. Erweitere die Abfrage so, dass Du per `lang_code` die passende Übersetzung gleich mit ausgibst.

UPDATE (`UPDATE`)
Dinge verändern sich, Fehler passieren. Schreibe SQL-Befehle, um folgende Aktualisierungen durchführen zu können:
14. Ein Artikel auf einer Reading List wird als gelesen markiert (`read` = 1)
15. Ein User aktualisiert Name und E-Mail-Adresse
16. Ein Tippfehler wird im Artikel korrigiert (berücksichtige `title`, `teaser`, `text` und `link`)

DELETE (`DELETE`)
Manche Daten sind nicht für die Ewigkeit bestimmt und müssen gelegentlich gelöscht werden. Schreibe die Befehle für folgende Situationen:
17. Ein Artikel wird von einer Reading List gelöscht
18. Ein User löscht einen Kommentar
19. Ein Artikel wird gelöscht
20. Ein User meldet sich ab und alle Daten sollen gelöscht werden


Hinweis:
Du kannst alle 20 Befehle in einer großen Datei sammeln. Schreibe dir die entsprechende Aufgabe als Kommentar vor die jeweiligen Befehle (Kommentieren in SQL geht mit `-- `).
Wir nutzen diese Datei als Vorlage für die zukünftige Implementierung im Backend.
