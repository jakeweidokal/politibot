// Jacob Weidokal
// My first twitter bot!
// 06/22/18

console.log('Booting up the Twitter bot!');
var Twit = require('twit');
var APIkeys = require('./APIkeys');

var T = new Twit(APIkeys);

retweet();

setInterval(retweet, 1000*20);

function retweet() {
    var randNum = Math.floor(Math.random() * (14 - 0))  + 1;
    var randIssue = 'None';
    switch(randNum) {
        case 1: randIssue = 'immigration';
            break;
        case 2: randIssue = 'gun violence';
            break;
        case 3: randIssue = 'healthcare';
            break;
        case 4: randIssue = 'abortion';
            break;
        case 5: randIssue = 'economy';
            break;
        case 6: randIssue = 'muslim';
            break;
        case 7: randIssue = 'LGBT';
            break;
        case 8: randIssue = 'education';
            break;
        case 9: randIssue = 'amendment';
            break;
        case 10: randIssue = 'foreign';
            break;
        case 11: randIssue = 'drug policy';
            break;
        case 12: randIssue = 'military';
            break;
        case 13: randIssue = 'marijuana';
            break;
        case 14: randIssue = 'taxes';
            break;
        case 15: randIssue = 'police system';
            break;
    }

    var tweet;
    tweetID = '';
    T.get('search/tweets', { q: randIssue, lang: 'en', result_type: 'popular', count: 1}, function(err, data, response) {
        if (err) {
            console.log('ERROR while SEARCHING for tweet.');
        } else {
            tweet = data.statuses;
            for (var i = 0; i < tweet.length; i++){
                tweetID = tweet[i].id_str;
            }
            T.post('statuses/retweet/:id', { id: tweetID }, function (err, data, response) {
              if(err){
                  console.log('ERROR while REPOSTING tweet');
              } else {
                  console.log('Retweeted successfully!');
              }
            })
        }
    })
}
