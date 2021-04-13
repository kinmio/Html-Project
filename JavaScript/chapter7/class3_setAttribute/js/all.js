//假使要透過JS動態增加東西

var el = document.querySelector('.titleClass a');
//選擇想改的屬性,想改的元素
el.setAttribute('href','http://www.yahoo.com.tw');//設定屬性

var el2 = document.querySelector('.str');
el2.setAttribute('id','strId');

//取出屬性裡的元素
var el3 = document.querySelector('.titleClass a');
el3.getAttribute('href');
console.log(el3);