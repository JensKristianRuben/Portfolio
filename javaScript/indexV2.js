document.getElementById('projectBtn').addEventListener('click', () => {
    document.querySelector('.mainContainer').classList.add('swipe-left');
});

document.getElementById("contactBtn").addEventListener("click", () => {
    const mainContainer = document.querySelector('.mainContainer');
    const contactContainer = document.querySelector("#contactMainContainer");

    mainContainer.classList.add('swipe-right');

    setTimeout(() => {
        contactContainer.style.display = 'flex';
        contactContainer.classList.add("swipe-in");
    }, 700);
});