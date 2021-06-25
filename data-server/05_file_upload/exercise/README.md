# Upload Multiple Files
Stelle Fragen bei Unklarheiten.

## Frontend: "Upload-Formular"
Erstelle eine HTML-Datei mit einem Formular zum Hochladen von bis zu drei Dateien. Das Formular soll an die im Folgenden erstellte Route `/upload_multiple_files` gesendet werden.

## Backend: "Store Multiple Files"
1. Erstelle einen Server mit einer Route `/upload_multiple_files`, die mehrere Dateien empfängt und speichert.
	Die Dateien sollen in einem Verzeichnis `./uploaded_files/` gespeichert werden.

2. Erstelle eine Route mit Hilfe von `express.static()`, die die hochgeladenen Dateien über den URL-Pfad `/updoaded` zugreifbar macht.

3. Lies die Dokumentation von `serve-index` (https://github.com/expressjs/serve-index).
Erstelle mit dessen Hilfe eine Route für den URL-Pfad `/uploaded_index`. Die Route soll es erlauben, die Dateien im Verzeichnis `uploaded_files` herunterzuladen. Der Inhalt/Index des Verzeichnisses soll angezeigt werden, wenn keine Datei zum Herunterladen im Pfad angegeben wurde.

4. optional:
Schreibe die Backend-Seite für das Speichern der Dateien so, dass eine beliebige Anzahl von Dateien empfangen werden kann.