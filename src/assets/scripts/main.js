const menuButton = document.getElementById('navbar-menu-button');
const mobileNav = document.getElementById('mobile-nav');

menuButton.addEventListener('click', () => mobileNav.classList.toggle('no-display'));
