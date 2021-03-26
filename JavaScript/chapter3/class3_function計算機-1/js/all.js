/* 宣告函式  命名函式(帶入參數)*/
/*打招呼*/
function greet(){
    var greetNote ='歡迎光臨，請問您要點甚麼?';
    document.getElementById('greetId').textContent = greetNote;
}

/*呼叫(執行)函式 */
greet();

/*onclick點擊事件 */
document.getElementById('countId').onclick = function order(){
    var humNum = document.getElementById('humNumId').value;/*撈出值，皆為字串*/
    var cokeNum =parseInt(document.getElementById('cokeNumId').value);
    humNum = parseInt(humNum);/*轉換成整數*/
    console.log(typeof(humNum));/*typeof查詢類型*/
    var total = (humNum*50) + (cokeNum*30);
    document.getElementById('totalId').textContent = total;
}
