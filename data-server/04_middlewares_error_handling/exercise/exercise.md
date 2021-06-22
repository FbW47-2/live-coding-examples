Wir arbeiten für ein internationales Online-Magazin. Unsere Artikel erscheinen auf Deutsch und Englisch und sollen über eine API bereitgestellt werden. Wir sind damit beauftragt worden, in dieser API zwei Features einzubinden: Ein Newsfeed und eine Reading List.


1. Erstelle eine Route, um alle News aus der `database.json` auslesen zu können.

2. Richte anschließend eine Middleware ein, die die bevorzugte Sprache aus dem Header ausliest und für die nachfolgenden Controller bereitstellt. Wenn keine Sprache übergeben wird, gib eine Standardsprache an: entweder `de` oder `en`.

3. In der `database.json` gibt es neben den News noch die Reading List. Hier können sich User Artikel für später speichern. Gib anhand der User ID die gespeicherten Artikel aus.


Achte darauf, die passenden Methoden und Pfade zu wählen und sinnvoll zu entscheiden, worüber Du Daten im Request mitsendest (_params_, _query_, _body_, _header_).
Schreibe zunächst stichpunktartig die Schritte auf, bevor Du dich an die Implementierung setzt - Teile das Problem in viele kleine Teilprobleme auf.
