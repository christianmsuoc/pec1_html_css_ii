const jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jquery/dist/jquery.min.js");

$(function() {
  const mobileNav = $('#mobile-nav');

  /* Toggle nav */
  $('#navbar-menu-button').on('click', (e) => {
    e.stopPropagation()
    mobileNav.toggleClass('no-display')
  });

  /* Prevent menu form close when click inside */
  mobileNav.on('click', (e) => e.stopPropagation());

  /* Hide nav if clicked outside */
  window.addEventListener('click', () => {
    mobileNav.addClass('no-display');
  });

  $('a').on('click', function(event) {
    mobileNav.addClass('no-display');
  });
});


