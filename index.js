createNavBar()
createPicture()

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

function createPicture() {

    const imgContainer = document.createElement('div');

    imgContainer.id = 'img-container';
    const meWithHair = document.createElement("img");

    const thugLifeGlasses = document.createElement("img");
    thugLifeGlasses.src = 'images/thugLifeGlasses.png';
    thugLifeGlasses.id = 'thugLifeGlasses';



    meWithHair.src = "images/meWithHair-min.webp"
    meWithHair.alt = "Me with hair";
    meWithHair.id = "meWithHair";

    let clickCount = 0;
    meWithHair.addEventListener("click", () =>{
        let currentWidth = meWithHair.width;
        let currentHeight = meWithHair.height;


        let newWidth = currentWidth * 0.9;
        let newHeight = currentHeight * 0.9;


        meWithHair.style.width = newWidth + "px";
        meWithHair.style.height = newHeight + "px";
        clickCount++;

        if (clickCount === 5){
            thugLifeGlasses.style.display = "block";
        }
    })

    imgContainer.appendChild(thugLifeGlasses);
    imgContainer.appendChild(meWithHair);
    document.body.appendChild(imgContainer);
}
