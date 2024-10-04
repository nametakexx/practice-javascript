//クリックしたら動作する

function errorInput(){
const month =document.getElementById("month").value;
const day =document.getElementById("day").value;
if(month<1 || month>12){
    alert("適切な値ではありません");
    return
}
console.log("month",month,"day",day);

}

//document.getElementById("month")はタグを確認するだけ
//valueはその値のタグの値を示す

/*
javascriptjpのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐ずく
タグの中にある追加情報のことを属性という
{}で囲まれている範囲を関数という
*/