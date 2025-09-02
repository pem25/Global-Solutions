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

// ======================== //
// PARALLAX EFFECT & SCROLL-TO-TOP
// ======================== //

// Parallax effect for the hero image
const heroSection = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (heroSection) {
        heroSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    // Show or hide the button based on scroll position
    if (window.pageYOffset > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
