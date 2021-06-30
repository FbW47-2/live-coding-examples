#!/usr/bin/env bash
set -e

docker container ls --all
# by default "ls" show only running containers
# --all also displays stopped containers.
