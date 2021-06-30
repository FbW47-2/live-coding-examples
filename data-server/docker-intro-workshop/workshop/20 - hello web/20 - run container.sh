#!/usr/bin/env bash
set -e

IMAGE_NAME="hw_httpd"
CONTAINER_NAME="hw_c"

LOCAL_PORT="8080"
CONTAINER_PORT="80"

# "run" combines "create" and "start"
docker run \
    -d \
    --name $CONTAINER_NAME \
    -p $LOCAL_PORT:$CONTAINER_PORT \
    $IMAGE_NAME
