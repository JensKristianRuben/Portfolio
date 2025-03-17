createNavBar()



function createNavBar() {
    const navBar = document.createElement('nav');

    const ul = document.createElement('ul');

    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.innerHTML = "Om"


    const examples = document.createElement('li');
    const examplesLink = document.createElement('a');
    examplesLink.innerHTML = "Projekter"

    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.innerHTML = "Kontakt"

    about.appendChild(aboutLink);
    examples.appendChild(examplesLink);
    contact.appendChild(contactLink);

    ul.appendChild(about);
    ul.appendChild(examples);
    ul.appendChild(contact);

    navBar.appendChild(ul);

    document.body.appendChild(navBar);

}
