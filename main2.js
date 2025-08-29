// Get the HTML elements we need to interact with
const hamburgerButton = document.querySelector('.hamburger-menu');
const desktopNav = document.querySelector('.desktop-nav');
const body = document.body;

// Add an event listener to the hamburger button
hamburgerButton.addEventListener('click', () => {
    // When the button is clicked, toggle the 'show-menu' class on the navigation
    desktopNav.classList.toggle('show-menu');
    // Also, toggle a class on the body to prevent scrolling when the menu is open
    body.classList.toggle('no-scroll');
});
