const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');

signupButton.addEventListener('click', () => {
    location.replace('./sign-up-page');
});

loginButton.addEventListener('click', () => {
    location.replace('./log-in-page');
});