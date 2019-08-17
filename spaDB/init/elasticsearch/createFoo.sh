#!/bin/bash

curl localhost:9200/foo/_doc?pretty \
    -H 'Content-Type: application/json' \
    -d '{"name": "Joe Schmo"}' \
    -v

curl localhost:9200/foo/_doc?pretty \
    -H 'Content-Type: application/json' \
    -d '{"name": "Plain Jane"}' \
    -v
