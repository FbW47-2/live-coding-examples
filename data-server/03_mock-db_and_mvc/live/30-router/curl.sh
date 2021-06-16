#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/messages --data '{
  "id": "4",
  "title": "Vierter",
  "text": "Salve"
}'
