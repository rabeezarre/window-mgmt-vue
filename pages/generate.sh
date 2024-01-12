#!/bin/bash

mkdir -p pages/build/

# Make TP subject HTML page
cd instructions && make && cd ..
cp -R instructions pages/build

