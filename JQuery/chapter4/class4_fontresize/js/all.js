$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.font-b').click(function (e) { 
        e.preventDefault();/*字形放大*/
        $('.content p').css('font-size', '20px');
    });
    $('.font-m').click(function (e) { 
        e.preventDefault();
        $('.content p').css('font-size', '16px');
    });
    $('.font-s').click(function (e) { 
        e.preventDefault();
        $('.content p').css('font-size', '12px');
    });
   $('.close').click(function (e) { 
       e.preventDefault();
       $('.ad').hide();/*隱藏的語法*/
   });
}); 
