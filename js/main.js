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
  //  autoplayHoverPause: true,
   touchDrag: true

  });
});


// $('.slider-bg').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: true,
//   // autoplay: true,
//   autoplaySpeed: 4000,
//   asNavFor: '.slider-sm'
// });
// $('.slider-sm').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-bg',
//   arrows: true,
//   dots: false,
//   centerMode: true,
//   focusOnSelect: true,
//   infinite: true,
// });




$('.slider-bg').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-sm'
});
$('.slider-sm').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-bg',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
