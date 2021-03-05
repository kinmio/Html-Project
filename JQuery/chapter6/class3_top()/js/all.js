$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.top a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 700);/*jQuery可以自行設計動畫效果 */
    });
}); 