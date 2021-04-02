/* 宣告函式  命名函式(帶入參數)*/
/*打招呼*/
function greet(){
    var greetNote ='歡迎光臨，請問您是VIP嗎?帳單有滿千嗎?兩者達到可以送贈品喔';
    document.getElementById('greetId').textContent = greetNote;
}

/*呼叫(執行)函式 */
greet();


var mybill =1250;
var vip = false;
var andCheck = mybill>=1000 && vip ==true;
var orCheck = mybill>=1000 || vip ==true;
document.getElementById('andId').textContent = andCheck;
document.getElementById('orId').textContent = orCheck;
