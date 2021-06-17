#!/bin/bash
#
# ./delete.sh id 
#
curl -X DELETE -H 'Content-Type: application/json' -i http://localhost:3000/delete?id=$1 
