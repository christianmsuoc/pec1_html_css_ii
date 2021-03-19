const jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jquery/dist/jquery.min.js");

$(function() {
  drawTechnologyStars();
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

  $('a').on('click', () => mobileNav.addClass('no-display'));

});

function drawTechnologyStars() {
  const technologyRows = $('.technology-row');
  technologyRows.each( (index, tec) => {
    const tecName = $(tec).data('technology');
    const tecSkill = $(tec).data('technology-skill');
    if (tecName && tecSkill) {
      const fullStars = Math.floor(tecSkill);
      const halfStars = Math.ceil(tecSkill % 1);
      const emptyStars = 5 - halfStars - fullStars;

      const icons =
        '<i class="fas fa-star"></i>'.repeat(fullStars) +
        '<i class="fas fa-star-half-alt"></i>'.repeat(halfStars) +
        '<i class="far fa-star"></i>'.repeat(emptyStars);

      $(tec).append(`<div><span>${tecName}</span></div>`)
      $(tec).append(`<div>${icons}</div>`)
    }
  });
}


