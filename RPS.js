function RPS(){
    const choices = [ "gu","choki","pa"];
    let handImage = ""
    //この書き方は、配列　C言語参照
    
    // let select=document.createElement("select");
    // let option1=document.createElement("option");
    // let option2=document.createElement("option");
    // let option3=document.createElement("option");
    // const gu="gu";
    // option1.value=gu;
    // option1.textContent=gu;
    // select.appendChild(option1);
    // option2.value="choki";
    // option2.textContent="choki";
    // select.appendChild(option2);
    // gameCountainer.appendChild(select);
    // option3.value="pa";
    // option3.textContent="pa";
    // select.appendChild(option3);
    let select=document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
    option.value =choice;
    option.textContent=choice;
    option.id = "Choice";
    handImage = choice;
    select.appendChild(option);
    });
    
    gameCountainer.appendChild(select);
    
    let choiceButton = document.createElement("button")
    choiceButton.textContent= "決定"

    gameCountainer.appendChild(choiceButton);

    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "200px";
    image.style.height = "200px";
    image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";

    let enemyImage = document.createElement("image");
    enemyImage.alt="Choice";
    image.style.width = "200px";
    image.style.height = "200px";

    choiceButton.addEventListener("click",function(){
        switch(select.value){
            case "gu":
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";
                break;
            case "choki":
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s800/janken_choki.png";
                break;
             case "pa":
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s800/janken_pa.png";
                 break;
            default:
                break;
        }
        let enemyHand = choices[Math.floor(Math.random() * choices.length)]
        console.log(enemyhand);
        
    })
    gameCountainer.appendChild(image);



    // forEach 配列などの複数のデータがるもの使える。全部やる関数。
    // 配列.forEach（配列の中身｛＝＞命令｝）
}