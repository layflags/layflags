#!/bin/sh
set -e
workbox generateSW workbox-config.js
now --target production
