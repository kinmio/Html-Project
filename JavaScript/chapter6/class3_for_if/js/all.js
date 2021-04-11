var farms = [
    {
        farmer: 'Jack',
        field: 6,
        chick: 200
    },
    {
        farmer: 'Bob',
        field: 10,
        chick: 50
    },
    {
        farmer: 'Six',
        field: 7,
        chick: 130
    }
]

//撈出那些農場有超過100隻以上

var farmsTotal = farms.length;

for(var i=0; i<farmsTotal; i++){
    console.log('chick:'+farms[i].chick);
    if(farms[i].chick>100){
        console.log(farms[i].farmer+'的農場的雞有超過100隻');
    };
};