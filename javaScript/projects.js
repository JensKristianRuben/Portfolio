createNavBar()
createSections()
projectDiv1()

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

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('projectsContainer');

    for (let i = 1; i < 9; i++) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.id = 'projectDiv' + i;
        containerDiv.append(projectDiv);
    }

    document.body.appendChild(containerDiv);
}

function projectDiv1(){
    const projectDiv1 = document.getElementById('projectDiv1');

    const headline = document.createElement("h1")
    headline.classList.add('title');
    headline.innerText = 'Hvor mange uger har du tilbage?';

    projectDiv1.appendChild(headline);
}