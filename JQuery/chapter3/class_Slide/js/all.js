$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.button').click(function() { 
        $('.text').slideDown(2000);
    }); 
    
    $('.button2').click(function () { 
        $('.text2').slideUp(2000);
    });

    $('.button3').click(function () { 
        $('.text3').slideToggle();
    });
}); 
