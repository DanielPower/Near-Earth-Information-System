# How to run the app

## Running unit tests

Simply run `./test.sh`

## Running the server

We scrape a lot of data from NASA, and also scrape location data from positionstack. This takes some time. So in order to avoid having to scrape on every run, we've used an environment variable.

On the first run, use
`SCRAPE=true ./start.sh`

For future runs, you only need to run `start.sh`, since the data will already be in the database.

## Troubleshooting

If you get "Permission denied" when attempting to run the scripts, try:
```
chmod +x ./start.sh
chmod +x ./test.sh
```
