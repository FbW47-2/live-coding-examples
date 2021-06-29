# MySQL

Credentials/Zugangsdaten in docker-compose.yml

## source of `student-teacher-demo.pdf` by Dr. Richard E. Turner:

http://learning.eng.cam.ac.uk/pub/Public/Turner/Teaching/student-teacher-demo.pdf


## Tasks/Aufgaben

0. Starte die Dienste "db" und "adminer":
   `$> docker-compose up -d`

1. Starte den Service "cli":
   `$> docker-compose run --rm cli`

2. Stelle eine Verbindung als Nutzer `dbuser` mit der Datenbank `database` her:
   `$> mysql -u dbuser database`

3. Gib die gegenwärtig existierenden Tabellen aus:
   `mysql> show tables;`
   und verlasse die interaktive Mysql-Shell:
   `mysql> exit`

4. Wende die Datei `/sql/schema.sql` von innerhalb des Service-Containers "cli" auf die Datenbank an:
  `$> mysql -u dbuser database < schema.sql`
