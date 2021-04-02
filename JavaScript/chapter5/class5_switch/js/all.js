document.getElementById('countId').onclick= function Taiwan(){
    var light = document.getElementById('lightId').value;
    /*switch括號裡的值一定會帶進去執行 */
    switch(light){
        case 'red':
            document.getElementById('lightAnswerId').textContent = '紅色警戒';
            break;
        case 'yellow':
            document.getElementById('lightAnswerId').textContent = '黃色警戒';
            break;
        case 'green':
            document.getElementById('lightAnswerId').textContent = '綠色安全警示';
            break;
        default:
            alert('沒有任何資料');
    };
};