#!/usr/bin/env bash
set -e

IMAGE_NAME="hello_world:latest" # the tag defaults to ":latest" so
# IMAGE_NAME="hello_world" # would be equivalent to the line above

docker build -t $IMAGE_NAME build/.

docker image ls

docker image rm $IMAGE_NAME

docker build -t $IMAGE_NAME build/.

CONTAINER_NAME="hello_world_container"

docker container create --name $CONTAINER_NAME $IMAGE_NAME

docker container start $CONTAINER_NAME

docker container logs $CONTAINER_NAME

docker container ls --all
# by default "ls" show only running containers
# --all also displays stopped containers.

docker container rm $CONTAINER_NAME
