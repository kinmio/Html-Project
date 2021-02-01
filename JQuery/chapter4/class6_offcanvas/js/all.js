$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.header').click(function () { 
      $('.aside').toggleClass('open');
    });
  });