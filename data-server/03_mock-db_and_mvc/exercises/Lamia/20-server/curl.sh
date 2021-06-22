#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/messages --data '{
  "id": "5",
  "title": "abc",
  "text": "efg"
}'
