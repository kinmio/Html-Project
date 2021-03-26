/*hoistiong觀念 - function初始判定是最優先的，function習慣優先放在最上方*/

var total /*全域變數 */

function count(oneNum,twoNum) {
    total = oneNum + twoNum;
    console.log(total);
}/*區域變數 */

count(9000,100542);
console.log(total);