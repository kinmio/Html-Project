$(document).ready(function(){ /*js起手語法，確保載入jQuery*/

    $('.button').click(function(){
        $('.title').hide();
    });

    $('.button2').click(function () { 
        $('.title2 , p').slideToggle();
    });
}); 
