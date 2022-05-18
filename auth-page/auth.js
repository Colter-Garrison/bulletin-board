import { signUpUser, signInUser, redirectIfLoggedIn } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');
const returnHome = document.getElementById('return-home');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('../create-page');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

returnHome.addEventListener('click', () => {
    location.replace('../index.html');
});