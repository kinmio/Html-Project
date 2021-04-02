/* 宣告函式  命名函式(帶入參數)*/
/*打招呼*/
function greet(){
    var greetNote ='歡迎光臨，請問您要點甚麼?漢堡剩下最後8個唷!';
    document.getElementById('greetId').textContent = greetNote;
}

/*呼叫(執行)函式 */
greet();


function order(hamNum,cokeNum){
    var total = (hamNum*50) +(cokeNum*20);
    document.getElementById('totalId').textContent = total;
}

order(8,1);