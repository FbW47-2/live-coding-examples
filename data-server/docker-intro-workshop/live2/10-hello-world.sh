#!/usr/bin/env bash

# führt den Befehlt 'echo "hello world"' im Container aus
docker run -it --rm debian:stable-slim echo "hello world"
