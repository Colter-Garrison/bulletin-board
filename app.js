import { fetchPosts } from './fetch-utils.js';
import { renderPostEl } from './render.js';

const loginButton = document.getElementById('login-button');
const createList = document.getElementById('create-list');

async function loadData() {
    const postEl = await fetchPosts();

    for (let post of postEl) {
        const postDiv = renderPostEl(post);
        createList.append(postDiv);
    }
}

loadData();

loginButton.addEventListener('click', () => {
    location.replace('./auth-page');
});