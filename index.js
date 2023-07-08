// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const icon = document.getElementById("icon");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  icon.className = "bi bi-moon-stars-fill";
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
  icon.className = "bi bi-sun";
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});










// function toggleDarkMode(icon) {

//     const body = document.body;
//     const darkModeToggle = document.getElementById("darkModeToggle");
//     const changeicon = document.getElementById("icon");

//     darkModeToggle.classList.toggle("dark-mode");
    
//     if (darkModeToggle.classList.contains("dark-mode")) {
//         body.classList.toggle("dark-mode");
//         changeicon.className = "bi bi-moon-stars-fill"; /* Replace with the dark mode icon class */

//     } 
    
//     else {
//         body.classList.toggle("sun-mode");
//         changeicon.className = "bi bi-sun"; /* Replace with the default icon class */
        
//     }
// }

