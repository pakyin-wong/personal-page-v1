#!usr/bin/sh
mkdir "$1"
cd "$1"
mkdir css
mkdir img
mkdir js
cd -
cp ./css/resume.min.css "$1/css/"
cp ./js/resume.min.js "$1/js"
cp -r img "$1/"
cp -r vendor "$1/"
cp index.html "$1/"