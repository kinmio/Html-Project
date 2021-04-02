

/**var farm ={
    farmer: 'Jack',
    chick: 30,
    duck:15,
    dog: ['finn','bob'],
    goDinner: function(){
      console.log(farm.farmer+' 該回家吃飯');
    },
    poultryTotal: function(){
      var num = farm.duck + farm.chick;
      console.log('Total:'+num);
    }
};*/

var farms = [
  {
    farmer:'Jack',
    dogs:['Finn','Zoe'],
    chick: 15,
    cornField: [8,5,6],
    broccoliField: [6,6,6,6],
    scarecrow:9,
  },
  {
    farmer:'Bob',
    dogs:['Jerry'],
    chick: 30,
    cornField: [18,15],
    broccoliField: [8,8,8],
    scarecrow:10,
  }
]

console.log(farms[0].farmer);
console.log(farms[1].farmer);
console.log(farms[0].dogs[1]);
