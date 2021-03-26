$(document).ready(function () {
    $("a[href$='.jpg']").addClass('fas fa-gifts');
    var indexName='小明';
    var polite='Hello ';

    document.getElementById('myname').textContent= polite+indexName;
});