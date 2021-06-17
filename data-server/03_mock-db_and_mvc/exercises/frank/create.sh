#!/bin/bash
#
# ./create.sh <"title"> <"text">
#
defTitle="Ich bin der neue Datensatz"
defText="neu neu neu neu usw...."
body="{\"title\": \"${1:-$defTitle}\", \"text\": \"${2:-$defText}\"}"
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/create --data "${body}"
