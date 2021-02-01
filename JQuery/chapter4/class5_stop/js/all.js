$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.start').click(function () { 
        $('.box').stop().slideToggle(5000);
        /*jQuery連結特性可以把動畫效果寫在一起*/
        $('.box2').stop().fadeToggle(5000);
    });
}); 
