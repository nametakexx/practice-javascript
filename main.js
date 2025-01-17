function ClickCounterGame(){
    let count = 0;
    const gameCountainer = document.getElementById("game-container");
 
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
     gameCountainer.appendChild(button1);
     gameCountainer.appendChild(button2);
     gameCountainer.appendChild(button3);
     gameCountainer.appendChild(counter);
     
 }
 ClickCounterGame();


 function startNumberGuesGame(){
    const gameCountainer = document.getElementById("game-container");
    const randomNumber = Math.floor(Math.random() * 100)+1;
    let message = document.createElement("p");
    message.textContent = randomNumber;
    let input = document.createElement("input");
    input.type = "nunber";
    input.placeholder = "好きな数字を入力してください (1 ~ 100)"

    gameCountainer.appendChild(message);
    gameCountainer.appendChild(input);
    
 }
 startNumberGuesGame();