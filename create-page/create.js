import { createNewPost } from '../fetch-utils';

const form = document.getElementById('new-post');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    const resp = await createNewPost(newPost);
    console.log(resp);
});