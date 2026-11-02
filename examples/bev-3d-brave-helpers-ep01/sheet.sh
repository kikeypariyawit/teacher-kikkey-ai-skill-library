#!/bin/bash
# usage: sheet.sh dir  -> dir/sheet.jpg (files sorted numerically, 5 per row)
cd "$1"; files=$(ls p_*.jpg | sort -t_ -k2 -g); n=$(echo "$files" | wc -l); args=""; f=""; lay=""; i=0
for x in $files; do args="$args -i $x"; f="$f[$i]scale=360:640[s$i];"; lay="$lay$((i%5*360))_$((i/5*640))|"; i=$((i+1)); done
ins=$(for j in $(seq 0 $((n-1))); do printf "[s$j]"; done)
ffmpeg -y -loglevel error $args -filter_complex "$f${ins}xstack=inputs=$n:layout=${lay%|}" -frames:v 1 sheet.jpg && echo sheet ok
