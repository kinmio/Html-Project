$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
  $('.cart li').click(function (e) { 
    $(this).find('h3').toggleClass('active');
  });  
}); 