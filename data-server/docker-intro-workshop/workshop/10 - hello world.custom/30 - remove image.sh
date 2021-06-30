#!/usr/bin/env bash
set -e

IMAGE_NAME="hello_world:latest"

docker image rm $IMAGE_NAME
