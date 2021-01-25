$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });
}); 
