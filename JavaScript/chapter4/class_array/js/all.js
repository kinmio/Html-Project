var cornField =[8,5,6];
/*陣列的寫法 */

var cornField2 = cornField[2];

console.log(cornField[0]);/*陣列起始直為0 */
console.log(cornField2);

var cornField3 = [];/*陣列為空值*/
cornField3.push(9);/*透過push把值放進陣列 */
cornField3.push(4);
cornField3.push(6);

cornField3[0] = 7;

console.log('i have '+cornField3.length+' farms');/*顯示陣列長度 */
console.log(cornField3);