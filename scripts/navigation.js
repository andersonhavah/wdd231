// Get navigation button
const navbutton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');


// Toggle to show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navLinks.classList.toggle('show');
});