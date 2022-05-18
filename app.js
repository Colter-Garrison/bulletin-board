import { fetchPosts, checkAuth, logOut, getUser } from './fetch-utils.js';
import { renderPostEl } from './render.js';

const authButton = document.getElementById('auth-button');
const createList = document.getElementById('create-list');

checkAuth();

async function handleLogOut() {
    await logOut();
}
async function handleAuth() {
    location.replace('/auth-page');
}



async function loadData() {
    const postEl = await fetchPosts();
    
    for (let post of postEl) {
        const postDiv = renderPostEl(post);
        createList.append(postDiv);
    }
    const user = await getUser();
    console.log(user);
    if (user) {
        authButton.textContent = 'Logout';
        authButton.addEventListener('click', handleLogOut());
        authButton.classList.remove('hide');
    } else {
        authButton.textContent = 'Sign In/Sign Up';
        authButton.addEventListener('click', handleAuth());
        authButton.classList.remove('hide');
    }
}

// authButton.addEventListener('click', () => {
    //     location.replace('./auth-page');
    // });
    
loadData();
    