/* 宣告函式  命名函式(帶入參數)*/
/*打招呼*/
function greet(){
    var greetNote ='歡迎光臨，請問您是本月壽星嗎?';
    document.getElementById('greetId').textContent = greetNote;
}

/*呼叫(執行)函式 */
greet();


var myMonth = 3;
var thisMonth = 4;

var birthdayCheck = myMonth == thisMonth;
console.log(birthdayCheck);
document.getElementById('birthdayId').textContent = birthdayCheck;

var nowPeople =1;
var totalPeople =2;
var allPeopleNoHereCheck = totalPeople !== nowPeople;
console.log(allPeopleNoHereCheck);
document.getElementById('peopleId').textContent = allPeopleNoHereCheck;