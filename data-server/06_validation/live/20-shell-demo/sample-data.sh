#!/usr/bin/env bash

for i in $(seq -w 1 10); do 
	for j in $(seq -w 1 100); do 
		echo $j >> $i; 
	done
done