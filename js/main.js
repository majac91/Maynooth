const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
   items: 1,
   loop: true,
   nav: false,
   dots: true,
   autoplay: true,
   autoplaySpeed: 2000,
   smartSpeed: 1500,
   autoplayHoverPause: true,

  });
});
