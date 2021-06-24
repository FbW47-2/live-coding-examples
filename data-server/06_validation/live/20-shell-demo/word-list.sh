#!/usr/bin/env bash

cat wiki.txt | sed "s/\b/\n/g" | sort | uniq -c | sort -n
