$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    const swiper = new Swiper('.swiper-container', { /*new add swiper*/
        // Optional parameters
        direction: 'horizontal',/*決定方向*/
        loop: true,/*是否循環撥放*/
        effect:'cube',//滑動效果
        longSwipesMs:3000,//
        autoplay: {//自動撥放
          delay: 1500,
        },
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
      });
}); 