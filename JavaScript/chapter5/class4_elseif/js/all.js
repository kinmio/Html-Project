document.getElementById('countId').onclick= function eat(){
    var myHungry = document.getElementById('hungryId').value;
    myHungry = parseInt(myHungry);
    if(myHungry > 8){
        document.getElementById('hungryAnswerId').textContent ='我很飽不想吃任何東西';
    }else if(myHungry<=7 && myHungry>=3){
        document.getElementById('hungryAnswerId').textContent ='我沒很餓但我想吃沙拉';
    }else if(myHungry <3){
        document.getElementById('hungryAnswerId').textContent ='我超餓的!甚麼都能吃';
    };
};