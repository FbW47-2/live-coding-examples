#!/bin/bash
#
# ./update.sh id <"title"> <"text">
#
defId="1"
defTitle="Ich bin der geänderte Datensatz"
defText="update update update usw...."
body="{\"title\": \"${2:-$defTitle}\", \"text\": \"${3:-$defText}\"}"
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/update?id=$1 --data "${body}"
