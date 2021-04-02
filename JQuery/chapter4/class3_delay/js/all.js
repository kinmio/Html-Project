$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
   $('.open').click(function (e) { 
       $('.box1').delay(0).slideToggle();
       $('.box2').delay(1000).slideToggle();
       $('.box3').delay(2000).slideToggle();
   });

   $('.open2').click(function (e) { 
    $('.box4').delay(0).fadeToggle();
    $('.box5').delay(1000).fadeToggle();
    $('.box6').delay(2000).fadeToggle();
    });
}); 
