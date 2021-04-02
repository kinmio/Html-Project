$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
  $('.question h3').click(function (e) { 
    $(this).toggleClass('active');
    /*點選h3的時候加入active樣式*/
    $(this).parent().find('p').slideToggle();
    /*點選h3的時候，找到父元素，再從父元素找到p進行滑動*/
    $(this).parent().siblings().find('p').slideUp();
    /*點選h3的時候，找到父元素，再找到同階元素裡的P進行隱藏*/
    $(this).parent().siblings().find('h3').removeClass('active');
    /*點選h3點時候，找到父元素，再找到同階元素裡的h3移除active樣式*/
  });  
}); 