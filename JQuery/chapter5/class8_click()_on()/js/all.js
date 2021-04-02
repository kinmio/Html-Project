$(document).ready(function(){ /*js起手語法，確保載入jQuery*/

    $('.wrap').on('click','h2', function () {
        alert('有效!');/*彈跳式視窗 */        
    });
    $('.box').html('<h2>用jQuery動態產生的</h2>');
}); 