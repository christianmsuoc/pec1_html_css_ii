const menuButton = document.getElementById('navbar-menu-button');
const mobileNav = document.getElementById('mobile-nav');

/* Toggle nav */
menuButton.addEventListener(
  'click',
  (e) => {
    e.stopPropagation()
    mobileNav.classList.toggle('no-display')
  });

/* Prevent menu form close when click inside */
mobileNav.addEventListener('click', (e) => e.stopPropagation());

/* Hide nav if clicked outside */
window.addEventListener('click', () => {
  mobileNav.classList.add('no-display');
});
