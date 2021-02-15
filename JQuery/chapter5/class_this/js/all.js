$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.menu li').click(function(e){
      $(this).toggleClass('active');
    });
  }); 