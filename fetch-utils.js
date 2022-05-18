const SUPABASE_URL = 'https://kmhqgenaissywlajjynm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttaHFnZW5haXNzeXdsYWpqeW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTMyNzAsImV4cCI6MTk2Nzg2OTI3MH0.yCD3SIn98ENixn-CMEd0ji60cOH51uEXLQIEhjqddDI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace('./auth-page');
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const signInResponse = await client.auth.signIn({ email, password });
    if (signInResponse.user) {
        location.replace('../create-page');
    } else {
        console.error(signInResponse.error);
        alert('Invalid login credentials');
    }
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./create-page');
    }
}

export async function logOut() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

export async function fetchPosts() {
    const response = await client.from('posts').select('*');
    
    return response.data;
}

export async function createNewPost(post) {
    const response = await client.from('posts').insert(post);
    if (response.data) {
        location.replace('/');
        return response.data;
    } else {
        console.error(response.error);
    }
}