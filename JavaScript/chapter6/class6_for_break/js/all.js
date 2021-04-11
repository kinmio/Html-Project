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

//我要找一個農場買50隻小雞

var farmsTotal = farms.length;
for(var i = 0;i < farmsTotal; i++){
    if(farms[i].chick>50){
        console.log(farms[i].farmer+'的小雞數量剛好足夠');
        farms[i].chick -=50;
        console.log(farms[i].farmer+'的小雞剩下'+farms[i].chick);
        break;//當條件滿足時，可以跳出迴圈，執行下個迴圈條件
    }
}