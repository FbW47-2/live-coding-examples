#!/usr/bin/env bash

# added following cleanup:
#| sed "/\W/d" 		=> delete lines with non-word-characters, word characters would be {a-z, A-Z, 0-9, _}
#| sed "/[0-9]/d"   => delete lines with numbers
#| sed "/^.$/d"     => delete lines with a single character (in german there is no single character word...)

cat wiki.txt \
| sed "s/\b/\n/g" \
| sed "/\W/d" \
| sed "/[0-9]/d" \
| sed "/^.$/d" \
| sort \
| uniq -c \
| sort -n
