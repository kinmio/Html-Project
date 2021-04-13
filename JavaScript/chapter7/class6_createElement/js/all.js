var str = document.createElement('em');//新增一個元素
str.textContent ='1324';
str.setAttribute('class','blue');
//增加子節點，動態增加後面。
document.querySelector('.title').appendChild(str);

