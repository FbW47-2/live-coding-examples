Unser Online-Magazin wächst schnell. Es reicht nicht mehr aus, die Artikel in einfacher Form in einer JSON-Datei zu speichern - eine effizientere Datenbank muss also her. Wir entscheiden uns für eine relationale Datenbank und nun wollen wir die Datenbank modellieren.

Erstelle dazu ein ER-Diagramm, welches folgende Punkte berücksichtigt:

1. Es können Artikel mit publishDate, title, teaser, link (vorerst in nur einer Sprache) gespeichert werden.
2. Berücksichtige außerdem User, die Artikel auf einer Reading List speichern können.
3. User können Kommentare zu Artikeln verfassen. Füge auch diese ins Modell ein.
4. Finde eine Lösung, wie verschiedene Übersetzungen zu den Artikeln gespeichert werden können. Du musst dafür nicht zwingend die Struktur aus Punkt 1 übernehmen.
5. Beschreibe einen Weg, alle Kommentare eines Users mit den dazugehörigen Artikeln anzeigen zu lassen.
6. Beschreibe in eigenen Worten einen Weg, um alle Artikel anzuzeigen, die weder kommentiert sind noch auf irgendwelchen Reading Lists aufgeführt sind.
