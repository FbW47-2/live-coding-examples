# Zusammenfassung

Dieser Workshop wird "docker" als Werkzeug, um _Images_ und _Container_ zu verwalten, einführen.

Als Eröffnung dient die Ausführung eines debian-Containers (bash, echo, sleep). Darauf folgt eine Diskussion darüber, was eigentlich gerade passiert ist. Diese Diskussion wird genutzt um wichtige Konzepte (Dockerhub, Registry, Image, Container) einzuführen.

Darauf folgen zwei praktische Beispiele:

1. Anpassen des genutzten debian-Baseimages

2. Bereitstellen einer HTML-Datei mit einem "Apache2" Webserver.

Das erste Beispiel wird genutzt, um das Kommandozeilen-Werkzeug `docker` weiter kennenzulernen. Dort insbesondere Kommandos zum Verwalten von _Images_ (Bauen, Auflisten, Entfernen) und _Containern_ (Bauen, Starten, Auflisten, Inspizieren, Entfernen).

Das zweite Beispiel wird zeigen, wie Dateien in ein _Image_ kopiert werden können. Außerdem werden weitere Kommandos und Parameter des `docker` Kommandozeilenwerkzeugs (Stopp, Logausgaben folgen, Kurzform von Kommandos, Port-Weiterleitung) eingeführt.

# Voraussetzungen
- Ein Linux Rechner
- damit die Skripte ausgeführt werden können muss "docker" installiert sein.
- Für die Mindmap "docker.mm" wird das Programm "freeplane" benötigt.
