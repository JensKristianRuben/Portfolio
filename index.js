createNavBar()
createPicture()
createDarkModeButton()

function createNavBar() {
    const navBar = document.createElement('nav');

    const ul = document.createElement('ul');

    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.innerHTML = "Om"


    const examples = document.createElement('li');
    const examplesLink = document.createElement('a');
    examplesLink.innerHTML = "Projekter"
    examplesLink.href = "html/projects.html"

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

function createPicture() {

    const imgContainer = document.createElement('div');
    imgContainer.id = 'img-container';

    const profileImgContainer = document.createElement('div');
    profileImgContainer.id = 'profile-img-container';

    const presentationDiv = document.createElement("div");
    presentationDiv.id = 'presentation-div';

    const name = document.createElement('h1');
    name.innerText = "Jens Kristian Ruben Hansen"
    name.id = "name"

    const description = document.createElement('h3');
    description.innerText = "Der er ikke så meget at rafle om – jeg er datamatikerstuderende, og jeg elsker at lave projekter, som enten underholder eller sætter gang i tankerne. Især hvis de er interaktive, og hvor vi gennem vores valg mærker konsekvenserne.  Hvis du tør, så kig mine projekter igennem og se, om det giver mening."
    description.id = "description";

    const profilePicture = document.createElement("img");
    profilePicture.src = "images/profile.jpg"
    profilePicture.alt = "Me with hair";
    profilePicture.id = "profilePicture";

    const thugLifeGlasses = document.createElement("img");
    thugLifeGlasses.src = 'images/thugLifeGlasses.png';
    thugLifeGlasses.id = 'thugLifeGlasses';


    profilePicture.addEventListener("mouseover", () =>{
        thugLifeGlasses.style.display = "block";
    })
    profilePicture.addEventListener("mouseout", () => {
        thugLifeGlasses.style.display = "none";
    });


    thugLifeGlasses.addEventListener("mouseover", () =>{
        thugLifeGlasses.style.display = "block";
    })

    profileImgContainer.appendChild(thugLifeGlasses);
    profileImgContainer.appendChild(profilePicture);

    presentationDiv.appendChild(name)
    presentationDiv.appendChild(description)

    imgContainer.appendChild(presentationDiv);
    imgContainer.appendChild(profileImgContainer)

    document.body.appendChild(imgContainer);
}

function createDarkModeButton() {
    const button = document.createElement("button");
    button.id = "darkModeToggle";
    button.textContent = "🌙 Dark Mode";
    button.style.position = "fixed";
    button.style.top = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.fontSize = "16px";
    button.style.background = "black";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.transition = "background 0.3s, color 0.3s";

    button.addEventListener("mouseover", () => {
        button.style.background = "white";
        button.style.color = "black";
    });

    button.addEventListener("mouseout", () => {
        button.style.background = "black";
        button.style.color = "white";
    });

    document.body.appendChild(button);


    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        button.textContent = "☀️ Light Mode";
    }


    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const presentationDiv = document.getElementById("presentation-div");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            button.textContent = "☀️ Light Mode";
            presentationDiv.style.background = "#6d7154";
        } else {
            localStorage.setItem("darkMode", "disabled");
            button.textContent = "🌙 Dark Mode";
            presentationDiv.style.background = "#e3f2fd";
        }
    });
}
