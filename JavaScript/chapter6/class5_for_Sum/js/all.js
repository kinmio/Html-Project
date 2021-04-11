var farms = [
    {
        farmer: 'Jack',
        field: 6,
        chick: 200,
        banana: 50000
    },
    {
        farmer: 'Bob',
        field: 10,
        chick: 50,
        banana: 1000
    },
    {
        farmer: 'Six',
        field: 7,
        chick: 130,
        banana: 3215
    }
]

//今年的種植香蕉的總數
var farmsTotal = farms.length;
var bananaTotal=0;

for(var i=0; i<farmsTotal; i++){
    bananaTotal+= farms[i].banana;//每跑一次迴圈，bananaTotal會更新一次
};

console.log('BananTotal: '+bananaTotal);