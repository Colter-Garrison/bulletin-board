import { fetchPosts, logOut, getUser } from './fetch-utils.js';
import { renderPostEl } from './render.js';

const authButton = document.getElementById('auth-button');
const potionButton = document.getElementById('new-potion');
const createList = document.getElementById('create-list');

async function handleLogOut() {
    await logOut();
}
async function handleAuth() {
    location.replace('/auth-page');
}
async function handleCreate() {
    location.replace('/create-page');
}

async function loadData() {
    const postEl = await fetchPosts();
    
    for (let post of postEl) {
        const postDiv = renderPostEl(post);
        createList.append(postDiv);
    }
    const user = getUser();
    if (user) {
        authButton.textContent = 'Logout';
        authButton.addEventListener('click', handleLogOut);
        authButton.classList.remove('hide');
        potionButton.textContent = 'New Potion';
        potionButton.addEventListener('click', handleCreate);
        potionButton.classList.remove('hidden');
    } else {
        authButton.textContent = 'Sign In/Sign Up';
        authButton.addEventListener('click', handleAuth);
        authButton.classList.remove('hide');
    }
}

loadData();