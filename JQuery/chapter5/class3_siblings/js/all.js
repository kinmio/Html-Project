$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
  $('.menu li').click(function(e){
    $(this).addClass('active').siblings().removeClass('active');
    /*按下自己的元素的同時，其他層取消他的樣式。*/
  });
}); 