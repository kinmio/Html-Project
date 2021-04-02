$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.button').click(function() { 
        $('.text').fadeIn(2000);
    }); 
    
    $('.button2').click(function () { 
        $('.text2').fadeOut(2000);
    });

    $('.button3').click(function () { 
        $('.text3').fadeToggle();
    });

    $('.button4').click(function () { 
        $('.text4').fadeTo(1500, 0.1);
    });
}); 
