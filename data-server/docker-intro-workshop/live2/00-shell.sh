#!/usr/bin/env bash
# run - führt einen Container aus
# -i - interaktiv
# -t - reserviert ein Terminal
# --rm - löscht den Container nach Beenden
# debian:stable-slim - das Image von dem aus der Container gestartet wird
# bash - der Befehl, der im Container ausgeführt wird

docker run -it --rm debian:stable-slim bash