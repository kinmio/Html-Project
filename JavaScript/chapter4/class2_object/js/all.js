

var farm ={
  /*屬性property  值value */
    farmer: 'Jack',
    chick: 30,
    dog: ['finn','bob'],
};

farm.chick = 15;/*add new  value*/

var dog2 = farm.dog[1];

console.log(farm.dog[0]);
console.log(dog2);
console.log(farm.farmer);
console.log(farm);