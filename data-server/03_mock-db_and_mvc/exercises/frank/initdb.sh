#!/bin/bash
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/clear --data '{
  "id" : "1",
  "title": "Erster Datensatz",
  "text": "Datenbank neu initialisiert.."
}'
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/create --data '{
"id": "2",
  "title": "Zweiter",
  "text": "Hallo Welt again"
}'
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/create --data '{
  "id": "3",
  "title": "Dritter",
  "text": "blabla blubber"
}'
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/create --data '{
"id": "4",
  "title": "Vierter",
  "text": "Rabaarber ..."
}'
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/create --data '{
"id": "5",
  "title": "Fünfter",
  "text": "Hallo Welt"
}'
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/create --data '{
"id": "6",
  "title": "Sechster",
  "text": "Hallo Welt again"
}'
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/create --data '{
"id": "7",
  "title": "Siebenter",
  "text": "blabla blubber"
}'
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/create --data '{
"id": "8",
  "title": "Achter",
  "text": "The last one ..."
}'
