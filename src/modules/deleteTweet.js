/* eslint-disable */

import createHTML from "./createHTML.js";

const deleteTweet = (id) => {
    const tweets = JSON.parse(localStorage.getItem('tweets'));
    const tweetsRest = tweets.filter((tweet) => tweet.id !== id);
    localStorage.setItem('tweets', JSON.stringify(tweetsRest));
    createHTML();
};

export default deleteTweet;