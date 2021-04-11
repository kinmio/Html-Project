var farms = [
    {
        farmer: 'Jack',
        field: 6,
    },
    {
        farmer: 'Bob',
        field: 10,
    }
]

var farmsTotal = farms.length;
console.log(farmsTotal);

for (var i=0;i<farmsTotal;i++){
    console.log(farms[i].farmer);
    console.log('第'+(i+1)+'個農場主人是'+farms[i].farmer);
}