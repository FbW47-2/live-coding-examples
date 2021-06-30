# Usage

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
