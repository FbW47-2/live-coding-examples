#!/usr/bin/env bash
set -e

CONTAINER_NAME="hello_world_container"

docker container rm $CONTAINER_NAME
