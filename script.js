
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});




//         function toggleDarkMode() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }
