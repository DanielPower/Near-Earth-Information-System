#!/bin/sh

# Use testing database
export DB_NAME='nasa-test'

# Do not scrape NASA APIs
export SCRAPE='false'

# Launch server
node app.js &
NODE_PID=$!

# Run unit tests
npx mocha

# Stop server
kill $NODE_PID
