//クリックしたら動作する

function errorInput(){
console.log(document.getElementById("month").value)
console.log(document.getElementById("day").value)

const month =document.getElementById("month").value;
const day =document.getElementById("day").value;

console.log("month",month,"day",day)

}

//document.getElementById("month")はタグを確認するだけ
//valueはその値のタグの値を示す

/*
javascriptjpのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐ずく
タグの中にある追加情報のことを属性という
*/