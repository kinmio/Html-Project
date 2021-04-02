$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $('.remove').click(function (e) { 
        $(this).parent().parent().remove();
    });
}); 