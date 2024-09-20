function changeColor(){
 document.getElementById("text").style.color = "red";
}
//document.getElementById("text").style.color ="red";
/*これは、ドキュメントの中の「text」というIDを持っているタグのスタイルの色を赤にしてください。*/


/*document.getElementById("h1").style.color = "red";*/
let count = 0;
function increasCount(){
count++;
document.getElementById("counter").innerText = count;
if(count>4){
    count =0;
}

}
function herasuCount(){
    count--;
    document.getElementById("counter").innerText = count;
}