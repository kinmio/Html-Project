var el = document.getElementById('main');
var str ='<h1 class="blue">1234</h1>'
el.innerHTML =str+str;
var link =  'http://www.google.com.tw';
var name = 'Bob';
var el2 = document.querySelector('.list');
el2.innerHTML = '<li><a href="'+ link+'">'+ name +'</a></li>';