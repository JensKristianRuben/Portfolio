createNavBar();
createSections();
projectDiv1();
projectDiv2();

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

function createSections() {

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

function projectDiv1() {
    const projectDiv1 = document.getElementById('projectDiv1');

    const headline = document.createElement("h1")
    headline.classList.add('title');
    headline.innerText = 'Hvor mange uger har du tilbage?';

    const description = document.createElement("h3");
    description.classList.add('description');
    description.innerText = "En visuel præsentation af hvor mange uger du har tilbage at leve i. Og hvor mange af dem du måske har spildt indtil nu?"

    const project1Link = document.createElement("a");
    project1Link.id = "project1Button";
    project1Link.innerText = "Se mere";
    project1Link.href = "weeksLeft.html";


    projectDiv1.appendChild(headline);
    projectDiv1.appendChild(description);
    projectDiv1.appendChild(project1Link);
}

function projectDiv2() {
    const projectDiv1 = document.getElementById('projectDiv2');

    const headline = document.createElement("h1")
    headline.classList.add('title');
    headline.innerText = 'JOKE generator';

    const description = document.createElement("h3");
    description.classList.add('description');
    description.innerText = "Brug JokeAPI'et til at generere en tilfældig joke"

    const project2Link = document.createElement("a");
    project2Link.id = "project2Button";
    project2Link.innerText = "Prøv";
    project2Link.href = "jokeGenerator.html";


    projectDiv1.appendChild(headline);
    projectDiv1.appendChild(description);
    projectDiv1.appendChild(project2Link);
}