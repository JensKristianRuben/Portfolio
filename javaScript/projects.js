createNavBar()
createSections()

function createNavBar() {
    const navBar = document.createElement('nav');

    const ul = document.createElement('ul');

    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.innerHTML = "Om"
    aboutLink.href = "../index.html";


    const examples = document.createElement('li');
    const examplesLink = document.createElement('a');
    examplesLink.innerHTML = "Projekter"
    examplesLink.href = "projects.html"

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

function createSections(){

    for (let i = 1; i < 6; i++) {
        const section = document.createElement('div');
        section.classList.add('section');
        section.id = 'section' + i;
        document.body.appendChild(section);
    }



}