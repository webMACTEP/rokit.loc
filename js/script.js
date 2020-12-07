$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');

   });


   $('.header__slider').slick({
      dots: true
   });
   $('.objects__slider').slick({
      dots: true
   });
   $('.selection__slider').slick({
      //dots: true
   });
})