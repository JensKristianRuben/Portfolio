createNavBar()



function createNavBar() {
    const navBar = document.createElement('nav');

    const ul = document.createElement('ul');

    const about = document.createElement('li');
    about.innerHTML = "Om"
    const examples = document.createElement('li');
    examples.innerHTML = "Se hvad jeg kan"
    const contact = document.createElement('li');
    contact.innerHTML = "Kontakt"

    ul.appendChild(about);
    ul.appendChild(examples);
    ul.appendChild(contact);

    navBar.appendChild(ul);

    document.body.appendChild(navBar);

}
