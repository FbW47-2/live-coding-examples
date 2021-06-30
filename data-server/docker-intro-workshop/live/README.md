# Docker & Docker-Compose

## Prerequisites & Installation

```
Linux
$> sudo apt install docker-ce
$> sudo apt install docker-compose

# Eigener NUTZERNAME
$> echo $USER

# Der Nutzer, der Docker nutzen soll muss der Gruppe `docker` angehören
$> adduser NUTZERNAME docker

# Danach Ausloggen und wieder Einloggen - besser neu Starten
# Test, ob die Gruppe "aktiv" ist:
$> id NUTZERNAME
```

## Live 

- MySQL-Server als Service definiert in einem `docker-compose.yml`
- phpmyadmin als Service
  
  Aufrufbar im Browser über: http://localhost:8080

  Die notwendigen Zugangsdaten stehen in der `docker-compose.yml`. Als Server muss der Name des Dienstes verwendet werden, wie er in der `docker-compose.yml` angegeben wurde, hier: `mysql`
  ```
  Server:   mysql
  User:     dbuser
  Password: fbw47-2assassins
  ```
- "cli" Service, der u. a. ermöglicht das Kommandozeilenwerkzeug `mysql` interaktiv zu nutzen (vgl. Usage)
  ```
  # Ausführen eines Befehls in einem Container:
  $> docker-compose run --rm cli
  #                     --rm => Löscht den Container nach Beenden des Containers
  #  => führt zu einer Bash innerhalb des Containers 
  #     (vgl. command des Services "cli" im docker-compose.yml)
  # 
  # innerhalb des CLI-Containers 
  # lassen sich dann beliebige Shell-Befehle ausführen, 
  # bspw. "mysql":
  $> mysql -u dbuser database
  #                  database => enspricht MYSQL_DATABASE aus docker-compose.yml
  #           dbuser => entspricht MYSQL_USER aus docker-compose.yml
  ```
## Usage

```
  # Erster Start
  $> docker-compose up 
  $> docker-compose up -d   # -d => Starten im Hintergrund

  # Stoppen von Service-Containern
  $> docker-compose stop
  # oder eines bestimmten Services
  $> docker-compose stop SERVICE_NAME
  
  # Starten von existierenden Service-Containern
  $> docker-compose start
  # oder eines bestimmten Services
  $> docker-compose start SERVICE_NAME
  
  # Stoppen der Services und Aufräumen angelegter Resourcen (Service-Container, Virtuelle Netzwerke, ...)
  $> docker-compose down

  # Ausgeben von Logs
  $> docker-compose logs
  $> docker-compose logs -f  # -f => Folgen der Ausgabe

```
