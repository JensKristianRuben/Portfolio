const mainContainer = document.querySelector('.mainContainer');
const contactContainer = document.querySelector('#contactMainContainer');
const projectsContainer = document.querySelector('#projectsMainContainer');
const projectBtn = document.getElementById('projectBtn');
const contactBtn = document.getElementById('contactBtn');
const goBackBtn = document.getElementById('goBackBtn');


projectBtn.addEventListener('click', () => {
    mainContainer.classList.add('swipe-left');

    mainContainer.addEventListener("animationend", function handleMainSwipeOut (){
        mainContainer.style.display = 'none';
        projectsContainer.style.display = 'flex';
        projectsContainer.classList.add('swipeToProjects');

        mainContainer.classList.remove('swipe-left');
        mainContainer.removeEventListener('animationend', handleMainSwipeOut);
    })
});

contactBtn.addEventListener('click', () => {
    mainContainer.classList.add('swipe-right');

    mainContainer.addEventListener('animationend', function handleMainSwipeOut() {
        mainContainer.style.display = 'none';
        contactContainer.style.display = 'flex';
        contactContainer.classList.add('swipe-in');


        mainContainer.classList.remove('swipe-right');
        mainContainer.removeEventListener('animationend', handleMainSwipeOut);
    });
});

goBackBtn.addEventListener('click', () => {
    contactContainer.classList.add('swipe-out');

    contactContainer.addEventListener('animationend', function handleContactSwipeOut() {
        contactContainer.style.display = 'none';
        contactContainer.classList.remove('swipe-in', 'swipe-out');

        mainContainer.style.display = 'flex';
        mainContainer.classList.add('swipeBackToMainPage');

        mainContainer.addEventListener('animationend', function handleMainSwipeBack() {
            mainContainer.classList.remove('swipeBackToMainPage');
            mainContainer.removeEventListener('animationend', handleMainSwipeBack);
        });

        contactContainer.removeEventListener('animationend', handleContactSwipeOut);
    });
});



