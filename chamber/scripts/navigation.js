// Get navigation button
const navbutton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');


// Toggle to show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

// Dark mode toggle
// Toggle on and off the dark mode
const modeButton = document.querySelector('#darkBtn');
const main = document.querySelector('main');

modeButton.addEventListener('click', () => { 
    main.classList.toggle('dark-mode');
});