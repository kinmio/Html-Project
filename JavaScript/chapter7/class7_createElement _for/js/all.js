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
console.log(farmsLen);
var el = document.querySelector('.list');
for(var i=0;i<farmsLen;i++){
    var str =document.createElement('li');
    str.textContent = farms[i].farmer;
    console.log(str);
    el.appendChild(str);
}

