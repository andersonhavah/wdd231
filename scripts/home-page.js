// use the date object
const today = new Date();

// Select the DOM element for output
const currentYear = document.getElementById("currentYear");
const lastModification = document.querySelector("#lastModified");

// Output the year
currentYear.innerHTML = today.getFullYear();

// Output the date and time of the last modification
lastModification.innerHTML = `Last Modification: ${document.lastModified} `;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

