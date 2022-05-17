import { fetchPosts } from './fetch-utils.js';

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    location.replace('');
});

console.log(fetchPosts());