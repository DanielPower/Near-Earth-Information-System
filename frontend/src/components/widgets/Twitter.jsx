var Twitter = require('twitter');
require('dotenv/config');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});



var params = {screen_name: 'NASA'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
        console.log(tweets);

    }
});


    export default Twitter;
  