/* eslint-disable */

import deleteTweet from "./deleteTweet.js";

const createHTML = () => {
  const tweets = JSON.parse(localStorage.getItem('tweets')) || [];
  const tweetsList = document.querySelector('.tweets-list');

  while (tweetsList.firstChild) {
    tweetsList.removeChild(tweetsList.firstChild);
  }

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      const li = document.createElement('li');
      li.classList.add('tweets-list-item');
      tweetsList.appendChild(li);

      const imgSpeech = document.createElement('img');
      imgSpeech.setAttribute('src', 'images/speech-bubble.png');
      imgSpeech.setAttribute('alt', 'speech-bubble');
      imgSpeech.setAttribute('width', '20');
      imgSpeech.setAttribute('height', '20');
      li.appendChild(imgSpeech);

      const p = document.createElement('p');
      p.classList.add('tweets-list-item-text');
      p.textContent = tweet.tweet;
      li.appendChild(p);

      const imgDelete = document.createElement('img');
      imgDelete.setAttribute('src', 'images/icon-delete.svg');
      imgDelete.setAttribute('alt', 'delete');
      li.appendChild(imgDelete);

      imgDelete.addEventListener('click', () => {
        deleteTweet(tweet.id);
      });
    });
  }
};

export default createHTML;
