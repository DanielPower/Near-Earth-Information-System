#!/bin/sh

# Use production database
export DB_NAME='nasa'

# Scrape NASA API
export SCRAPE='true'

# Launch server
node app.js