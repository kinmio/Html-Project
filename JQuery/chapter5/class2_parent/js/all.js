$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.addcart').click(function(e){
      $(this).parent().toggleClass('active');
      $(this).toggleClass('active');
    });
  }); 