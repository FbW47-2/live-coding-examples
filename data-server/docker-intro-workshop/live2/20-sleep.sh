#!/usr/bin/env bash
set -e

# -d is used to detach the container, run it in the background
docker run --rm -d debian:stable-slim sleep 10 &

watch docker ps
