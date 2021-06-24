curl -X POST -H 'Content-Type: application/json' -i http://localhost:${process.env.PORT}/messages --data '{
    "title": "fifth 5",
    "text": "first for vsc"
}'