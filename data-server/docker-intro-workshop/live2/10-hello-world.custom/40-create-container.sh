#!/usr/bin/env bash

IMAGE_NAME="hello_world:latest"

CONTAINER_NAME="hello_world_container"

docker container create --name $CONTAINER_NAME $IMAGE_NAME
