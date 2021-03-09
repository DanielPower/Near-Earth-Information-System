#!/bin/sh

# Use testing database
export DB_NAME='nasa-test'

# Launch server
node app.js &
NODE_PID=$!

# Run unit tests
npx mocha

# Stop server
kill $NODE_PID
