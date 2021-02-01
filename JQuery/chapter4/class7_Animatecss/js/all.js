$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.open').click(function (e) { 
        $('.box').toggleClass('animate__animated animate__flash');
    });
}); 
