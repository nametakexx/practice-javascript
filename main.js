const select = document.createElement("select");
select.name = "games";
select.id = "game-select";
const option = [
    { value: "", text: "--ゲームを選択してください--"},
    { value: "", text: "クリッカーゲーム"},
    { value: "", text: "数当てゲーム"}
];
options.forEach(optionData => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent= optionData.text;
    select.appendChild(option);
});
document.gameSelect.appendChild(select);


const gameSelector = document.getElementById('game-select');
const gameContainer = document.getElementById("game-container");
gameSelector.addEventListener('change',function(){
    gameContainer.innerHTML = '';
    switch(gameSelector.value) {
        case 'number-guess':
            startNumberGuesGame();
            break;
            case 'cliker':
                ClickCounterGame();
                break;
    }
})

function ClickCounterGame(){
    let count = 0;
    const gameContainer = document.getElementById("game-container");
 
    let button1 = document.createElement("button");
     button1.textContent = "+1ボタン";

     let button2 = document.createElement("button");
     button2.textContent = "+10ボタン";

     let button3 = document.createElement("button");
     button3.textContent = "リセットボタン";

     let counter = document.createElement("p");
     counter.textContent = count;
     
     button1.addEventListener("click",function(){
        if(count < 100){ 
        count++;
        }
         counter.textContent = count;
     })

     button2.addEventListener("click",function(){
        if(count <= 90){
            count+=10;
        }
        counter.textContent = count;
    })
    button3.addEventListener("click",function(){
        count=0;
        counter.textContent = count;
    })
    counter.addEventListener("click",function(){
        count=0;
        counter.textContent = count;
    })
     gameContainer.appendChild(button1);
     gameContainer.appendChild(button2);
     gameContainer.appendChild(button3);
     gameContainer.appendChild(counter);
     
 }



 function startNumberGuesGame(){
    const gameContainer = document.getElementById("game-container");
    const randomNumber = Math.floor(Math.random() * 100)+1;
    let message = document.createElement("p");
    message.textContent = randomNumber;
    let input = document.createElement("input");
    input.type = "nunber";
    input.placeholder = "好きな数字を入力してください (1 ~ 100)"

    gameContainer.appendChild(message);
    gameContainer.appendChild(input);
    
    let button = document.createElement("button")
    button.textContent = "確認"

    button.addEventListener("click",function(){
        const val = parseInt(input.value);
        if (randomNumber == val){
            message.textContent = "正解"
        } 
        else if (randomNumber >= val){
            message.textContent = "小さいよ"
        }
        else if (randomNumber <= val){
            message.textContent = "大きいよ"
        }
        count++;
        countDisplay.textContent = `試行回数 : ${count}`;
    })
    gameContainer.appendChild(button)
    
    let count = 0;
    const countDisplay = document.createElement("p");
    countDisplay.textContent = `試行回数 : ${count}`;
    gameContainer.appendChild(countDisplay);
   
 } 
   
