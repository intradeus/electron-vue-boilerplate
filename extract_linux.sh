#!/usr/bin/env bash

cd release/linux-unpacked/resources/ && rm -rf app && mkdir app && asar extract app.asar app && cd app && tree && nautilus .
