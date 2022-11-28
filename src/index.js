import './style.css';
import createHTML from './modules/createHTML.js';
import showError from './modules/showError.js';

const form = document.querySelector('#form');

// event listeners
window.addEventListener('load', () => {
  const tweets = JSON.parse(localStorage.getItem('tweets')) || [];
  createHTML();
  return tweets;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const tweets = JSON.parse(localStorage.getItem('tweets')) || [];

  const tweet = document.querySelector('#tweet').value;

  if (tweet === '') {
    showError('Tweet is required');
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  tweets.push(tweetObj);

  localStorage.setItem('tweets', JSON.stringify(tweets));

  createHTML();

  form.reset();
});