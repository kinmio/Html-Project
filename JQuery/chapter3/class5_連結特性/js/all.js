$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.start').click(function () { 
        $('.box').slideUp(1000).slideDown(1000).slideUp(1000).slideDown(1000);
        /*jQuery連結特性可以把動畫效果寫在一起*/
        $('.box2').fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);
    });
}); 
