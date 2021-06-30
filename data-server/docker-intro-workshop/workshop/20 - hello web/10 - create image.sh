#!/usr/bin/env bash
set -e

IMAGE_NAME="hw_httpd"

docker build -t $IMAGE_NAME build/.
