$(document).ready(function () {
    $('.menu> li> a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('ul').slideToggle();/*點選我自己，找到父元素的ul */
        $(this).parent().siblings().find('ul').slideUp();/*點選我自己，找到所有同階層的父元素的ul */
        $(this).parent().siblings().find('a').removeClass('active');
    });

    $("a[href$='.jpg']").addClass('fas fa-arrow-circle-up');
    $('.top a').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({scrollTop:0}, 600);
    });

    /*includ swiper API */
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
      }); 

});