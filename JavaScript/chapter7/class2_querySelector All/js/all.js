var el =document.querySelectorAll('.titleClass em');//選取多個元素，會回傳一個陣列值
console.log(el);
el[0].textContent ='1234567';
el[1].textContent ='1234';

var elLen= el.length;

for(var i=0; i<elLen; i++){
    el[i].textContent = i +'1324';
};
