var farms =[
    {
        farmer:'Jack',
        dogs:['Jenny','Finn']
    },
    {
        farmer:'Bob',
        dogs:['Neir']
    }
];
var farmsLen = farms.length;
var el = document.querySelector('.list');
var str ='';//累加字串
console.log(farmsLen);
for(var i =0; i<farmsLen ; i++){
    var content ='<li>'+farms[i].farmer+'</li>';
    str+=content;
    console.log(str);
};
//使用innerHTML要留意每次執行會先清空一次，因此需要先有個空字串儲存字串在帶入值。
el.innerHTML = str; 