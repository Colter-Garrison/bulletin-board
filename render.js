export function renderPostEl(posts) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const p2 = document.createElement('p');

    div.classList.add('post-element');
    h4.textContent = posts.title;
    p.textContent = posts.description;
    p2.textContent = posts.contact;

    div.append(h4, p, p2);

    return div;
}