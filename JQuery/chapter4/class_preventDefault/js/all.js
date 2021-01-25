$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.close').click(function (e) { 
        e.preventDefault();
        $('.box').slideToggle(1000);
    });

    $('.box2').css('width','500px');/*動態增加css語法*/
}); 
