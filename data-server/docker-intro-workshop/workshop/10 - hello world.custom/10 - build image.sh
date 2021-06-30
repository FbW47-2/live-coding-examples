#!/usr/bin/env bash
set -e

IMAGE_NAME="hello_world:latest" # the tag defaults to ":latest" so
# IMAGE_NAME="hello_world" # would be equivalent to the line above

docker build -t $IMAGE_NAME build/.
