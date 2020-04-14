
// const element =  document.querySelector('.smile-div')
// element.classList.add('animated', 'fadeInDown')

jQuery(document).ready(function ($) {
    // Back to top button

        new WOW().init();
   

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      }

    
});

