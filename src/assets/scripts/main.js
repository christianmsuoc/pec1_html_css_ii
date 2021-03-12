const menuToggleOpen = document.getElementById('menu-toggle-open');
const menuToggleClose = document.getElementById('menu-toggle-close');
const nav = document.getElementById("menu-nav");


menuToggleOpen.addEventListener('click', () => {
  nav.classList.remove('hidden');
  menuToggleOpen.classList.add('hidden');
});

menuToggleClose.addEventListener('click', () => {
  nav.classList.add('hidden')
  menuToggleOpen.classList.remove('hidden');
});
