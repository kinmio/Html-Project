$(document).ready(function(){ /*js起手語法，確保載入jQuery*/
    $("a[href$='.doc']").addClass('far fa-file-word');
    $("a[href$='.jpg']").addClass('far far fa-file-image');
    $("a[href$='.zip']").addClass('far fa-file-archive');
    $("a[href$='.tip']").addClass('fas fa-arrow-alt-circle-right');
}); 