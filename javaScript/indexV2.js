const mainContainer = document.querySelector('.mainContainer');
const contactContainer = document.querySelector('#contactMainContainer');
const projectsContainer = document.querySelector('#projectsMainContainer');

const projectsLink = document.querySelector('#projectsLink');
const homeLink = document.querySelector('#homeLink');
const contactLink = document.querySelector('#contactLink');

const projectBtn = document.getElementById('projectBtn');
const contactBtn = document.getElementById('contactBtn');
const goBackBtn = document.getElementById('goBackBtn');
const goBackFromProjectsBtn = document.getElementById('goBackBtnFromProjects');


function swipeTo(fromContainer, toContainer, outClass, inClass) {
    fromContainer.classList.add(outClass);
    fromContainer.addEventListener("animationend", function handleSwipeOut() {
        fromContainer.style.display = 'none';
        fromContainer.classList.remove(outClass);

        toContainer.style.display = 'flex';
        toContainer.classList.add(inClass);

        // Clean up incoming animation
        toContainer.addEventListener("animationend", function handleSwipeIn() {
            toContainer.classList.remove(inClass);
            toContainer.removeEventListener("animationend", handleSwipeIn);
        });

        fromContainer.removeEventListener("animationend", handleSwipeOut);
    });
}

// Gå til projekter
projectBtn.addEventListener('click', () => {
    swipeTo(mainContainer, projectsContainer, 'swipe-left', 'swipe-to-projects');
    homeLink.style.borderBottom = 'none';
    projectsLink.style.borderBottom = '1px solid black';
    projectsLink.style.pointerEvents = 'none';
    homeLink.style.pointerEvents = 'auto';
});

// Gå til kontakt
contactBtn.addEventListener('click', () => {
    swipeTo(mainContainer, contactContainer, 'swipe-right', 'swipe-in');
    homeLink.style.borderBottom = 'none';
    contactLink.style.borderBottom = '1px solid black';
    contactLink.style.pointerEvents = 'none';
    homeLink.style.pointerEvents = 'auto';
});

// Gå tilbage fra kontakt
goBackBtn.addEventListener('click', () => {
    swipeTo(contactContainer, mainContainer, 'swipe-out', 'swipe-back-to-main');
    contactLink.style.borderBottom = 'none';
    contactLink.style.pointerEvents = 'auto';
    homeLink.style.borderBottom = '1px solid black';
    homeLink.style.pointerEvents = 'none';
});

// Gå tilbage fra projekter
goBackFromProjectsBtn.addEventListener('click', () => {
    swipeTo(projectsContainer, mainContainer, 'swipe-right', 'swipe-from-left-to-right');
    projectsLink.style.borderBottom = 'none';
    projectsLink.style.pointerEvents = 'auto';
    homeLink.style.borderBottom = '1px solid black';
    homeLink.style.pointerEvents = 'none';
});

// Gå til projekter
projectsLink.addEventListener('click', () => {
    swipeTo(mainContainer, projectsContainer, 'swipe-left', 'swipe-to-projects');
    homeLink.style.borderBottom = 'none';
    projectsLink.style.borderBottom = '1px solid black';
    projectsLink.style.pointerEvents = 'none';
    homeLink.style.pointerEvents = 'auto';
})

// Gå til kontakter
contactLink.addEventListener('click', () => {
    swipeTo(mainContainer, contactContainer, 'swipe-right', 'swipe-in');
    homeLink.style.borderBottom = 'none';
    contactLink.style.borderBottom = '1px solid black';
    contactLink.style.pointerEvents = 'none';
    homeLink.style.pointerEvents = 'auto';
})