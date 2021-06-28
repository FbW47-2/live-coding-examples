# Users

Implementiere eine REST-Schnittstelle für eine neue Datenstruktur `users`.

Die Datenstruktur soll folgendes beispielhaftes Format haben:
```json
{
    users: [
      {
      "id": "1",
      "username": "USERNAME",
      "fullname": "VORNAME NACHNAME",
      "email": "EMAIL_ADRESSE"
      }
    ]
}
```

Nutze eine neue Datei `data/users.json` für das Speichern der Nutzerinformationen.

Implementiere folgende Routen (Create, Read, Update, Delete - CRUD):

- Anlegen eines neuen Nutzers:

  POST /users/

- Ausgabe von Informationen zu einem bestimmten Nutzer:

  GET /users/:id

- Aktualisieren von Nutzerinformationen:

  PUT /users/:id

- Löschen eines Nutzers:

  DELETE /users/:id
