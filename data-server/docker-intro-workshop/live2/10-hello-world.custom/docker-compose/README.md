# docker-compose

## Usage

```
#  Beginn des Projektes: Bauen der Images, Starten der Container:
$> docker-compose up
#  das Selbe, aber im Hintergrund (-d => detached/daemonized)
$> docker-compose up -d

#  Anzeigen des Zustandes der "Service-Container"
$> docker-compose ps

#  Starten aller Services
$> docker-compose start
#  Starten eines bestimmten Services
$> docker-compose start SERVICE_NAME

#  Stoppen aller Services
$> docker-compose stop
#  Starten eines bestimmten Services
$> docker-compose stop SERVICE_NAME

#  Anzeigen der Logs/Ausgaben der Services
$> docker-compose logs
#  das Selbe, aber folgt neuen Ausgaben (Beenden mit CTRL-C)
$> docker-compose logs -f
#  Eingeschränkt auf einen bestimmten Service:
$> docker-compose logs -f SERVICE_NAME

#  Aufräumen: Entfernt Services/Container/Netzwerke/Logs/...
$> docker-compose down

```