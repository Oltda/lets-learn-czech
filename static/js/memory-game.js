var allCards = document.querySelectorAll(".thecard0")
var dobre = document.getElementById("dobre")
var spatne = document.getElementById("spatne")
var botPlays = document.getElementById("botPlays")
var yourTurn = document.getElementById("yourTurn")
var botGetsPoint = document.getElementById("botGetsPoint")
var gameBoard = document.getElementById("gameBoard")

var medalNotific = document.querySelectorAll(".medalNotific")

var mainButtons = document.getElementById("mainButtons")


var countBotPoint = 0;
var botPointBox =document.getElementById("botPointBox").textContent = countBotPoint;
var countUserPoint = 0;
var userPointBox =document.getElementById("userPointBox").textContent = countUserPoint;



const megaArray = [
                {
                  gameWords:[
                        ["pes", "dog"], ["kniha", "book"],
                        ["bratr","brother"], ["dům", "house"],
                        ["škola", "school"], ["učitel", "teacher"],
                        ["kamarád","friend"], ["práce", "work"],
                        ["mluvit", "speak"], ["město", "city"]
                        ]
                },
                {

                gameWords:[
                        ["snídaně", "breakfast"], ["večeře", "dinner"],
                        ["lunch","oběd"], ["hraju", "I play"],
                        ["čtu", "I read"], ["čteš", "you read"],
                        ["ráno","morning"], ["odpoledne", "afternoon"],
                        ["vařím", "I cook"], ["to začíná", "it starts"]
                        ]
                 },
                 {


                 gameWords:[
                            ["ho", "him"], ["mu", "to him"],
                            ["nás","us"], ["ji", "her"],
                            ["jí", "to her"], ["mě", "me"],
                            ["mně","to me"], ["tebe", "you (acc.)"],
                            ["tobě", "to you"], ["je", "them"]
                            ]
                },
                {

                 gameWords:[
                            ["jídlo", "food"], ["těstoviny", "pasta"],
                            ["pláž","beach"], ["něco", "something"],
                            ["dovolená", "vacation"], ["koupat se", "have a bath"],
                            ["další","next"], ["krátká", "short"],
                            ["později", "later"], ["už", "already"]
                            ]
                },
                {

                gameWords: [
                            ["ovoce", "fruit"], ["určitě", "for sure"],
                            ["rychle","fast"], ["příbuzní", "relatives"],
                            ["balík", "package"], ["hodně", "a lot"],
                            ["oslavovat","celebrate"], ["papír", "paper"],
                            ["zelenina", "vegetable"], ["zubař", "dentist"]
                            ]
                }
                ]



const gameWords = megaArray[lessonNumber -1].gameWords




var toBeAssignedToFlashCards = [];
var indices = [];

var x;
for(x=0; x < gameWords.length; x++){
var y;
for(y=0; y < gameWords[x].length; y++){
toBeAssignedToFlashCards.push(gameWords[x][y])

}

}




var indices = []
var t = 0;
while ( indices.length < 21 ){
t++;

if(t > 200){

break;
}

var oneIndex = Math.floor(Math.random() * 20);

if (indices.includes(oneIndex)){
    continue;
  }else{
indices.push(oneIndex);
}
}





for(let i=0; i < allCards.length; i++){
    allCards[i].children[1].textContent = toBeAssignedToFlashCards[indices[i]];
}

mainButtons.classList.add("hidden");
document.getElementById("mainButtonsGame").classList.remove("hidden");


// tady zacina hra samotna

var firstChoice;
var secondChoice;

var chosenPair = []
function flipIt(card){
card.classList.add("flipped")




        for(let i=0; i < gameWords.length; i++){
        if(gameWords[i].includes(card.children[1].textContent)){
        chosenPair.push(i)
               }
         }

         if(chosenPair.length > 1){
         firstChoice = chosenPair[0];
         secondChoice = chosenPair[1];
         }


        if(chosenPair.length > 1 && firstChoice === secondChoice){
        countUserPoint++;
                                    if(gameWords.length === 1){


                                    yourTurn.style.display = "none";
                                    botPlays.style.display = "none";



                                if(countBotPoint > countUserPoint){
                                botGetsPoint.style.opacity = "0";

                                    medalNotific[0].style.display = "block";
                                    setTimeout(function(){
                                    medalNotific[0].style.opacity = "1";
                                    },200);
                                }
                                if(countUserPoint > countBotPoint){

                                    if(countUserPoint > 5 && countUserPoint <= 7){
                                        medalNotific[1].style.display = "block";
                                        setTimeout(function(){
                                        medalNotific[1].style.opacity = "1";
                                        },200);

                                    }
                                    if(countUserPoint > 7 && countUserPoint <= 9){
                                    medalNotific[2].style.display = "block";
                                    setTimeout(function(){
                                    medalNotific[2].style.opacity = "1";
                                    },200);
                                    }
                                    if(countUserPoint > 9){
                                    medalNotific[3].style.display = "block";
                                    setTimeout(function(){
                                    medalNotific[3].style.opacity = "1";
                                    },200);
                                    }
                                }
                                if(countUserPoint === countBotPoint){
                                document.querySelectorAll(".formHead")[0].textContent = "It is a tie!";
                                medalNotific[0].style.display = "block";
                                setTimeout(function(){
                                medalNotific[0].style.opacity = "1";
                                    },200);

                                }

                            }


        gameBoard.classList.add("disabl")
        chosenPair.splice(0, 2)


        for(let i=0; i < allCards.length; i++){
            if(allCards[i].classList.contains("flipped")){
            allCards[i].classList.remove('flipped');
            allCards[i].classList.add('correct');
            allCards[i].children[1].style.background = "#90ee90";
            }
        }


        gameWords.splice(firstChoice, 1)


        dobre.style.opacity = "1";
       // countUserPoint++;
        userPointBox =document.getElementById("userPointBox").textContent = countUserPoint;


        setTimeout(function(){
            dobre.style.opacity = "0";
            gameBoard.classList.remove("disabl")
        }, 1800);


        }


        if(chosenPair.length > 1 && firstChoice != secondChoice){
        gameBoard.classList.add("disabl")
        spatne.style.opacity = "1";


        setTimeout(function(){

        botPlays.style.display = "block";
        yourTurn.style.display = "none";

        spatne.style.opacity = "0";
        var h;
        for(h=0; h < allCards.length; h++){

            if(allCards[h].classList.contains("flipped")){
            allCards[h].classList.remove('flipped');
            }

        }
        }, 1800);




setTimeout(robot, 3000)

function robot(){



        var NumberA = Math.floor(Math.random() * gameWords.length);
        var NumberB = Math.floor(Math.random() * gameWords.length);


        botPlays.style.display = "block";
        //botPlays.style.opacity = "1";
        NumberA = NumberA;
        NumberB = NumberB;
            var botFirstWord = gameWords[NumberA][0]
            var botSecondWord = gameWords[NumberB][1]

            for(let i=0; i < allCards.length; i++){

                if(allCards[i].children[1].textContent === botFirstWord || allCards[i].children[1].textContent === botSecondWord){
                    allCards[i].classList.add("flipped")
                }
             }


                setTimeout(function(){
               if(NumberA === NumberB){
                chosenPair.splice(0, 2)

                botPlays.style.display = "block";
                botGetsPoint.style.opacity = "1";

                countBotPoint++;
                botPointBox = document.getElementById("botPointBox").textContent = countBotPoint;

                    gameWords.splice(NumberA, 1)

                    var flippedCards = document.querySelectorAll(".flipped")

                    for(let i=0; i < flippedCards.length; i++){
                    flippedCards[i].classList.replace("flipped", "BotCorrect")
                    }

                    var BotCorrect = document.querySelectorAll(".BotCorrect")

                    for(let i=0; i < BotCorrect.length; i++){
                    BotCorrect[i].children[1].style.background = "#87cefa";
                    }
                    // tohle mi vyresi co se stane kdyz bot uhodne posledni par
                            if(gameWords.length > 0){
                            setTimeout(robot, 1000)  //tohle je velmi dulezite - znovu mi to triggeruje tuhle funkci kdyz komp uhodne spravnou dvpjci, nemuzu pouzivat while loop s setTimeout
                            }
                            if(gameWords.length === 0){
                            yourTurn.style.display = "none";
                            botPlays.style.display = "none";



                                if(countBotPoint > countUserPoint){
                                botGetsPoint.style.opacity = "0";
                                    medalNotific[0].style.display = "block";
                                    setTimeout(function(){
                                    medalNotific[0].style.opacity = "1";
                                    },200);


                                }
                                if(countUserPoint > countBotPoint){
                                    if(countUserPoint > 5 && countUserPoint <= 7){

                                        medalNotific[1].style.display = "block";
                                        setTimeout(function(){
                                        medalNotific[1].style.opacity = "1";
                                        },200);

                                    }
                                    if(countUserPoint > 7 && countUserPoint <= 9){
                                        medalNotific[2].style.display = "block";
                                        setTimeout(function(){
                                        medalNotific[2].style.opacity = "1";
                                        },200);

                                    }
                                    if(countUserPoint > 9){
                                        medalNotific[3].style.display = "block";
                                        setTimeout(function(){
                                        medalNotific[3].style.opacity = "1";
                                        },200);

                                    }
                                botGetsPoint.style.opacity = "0";
                                }
                                if(countUserPoint === countBotPoint){
                                botGetsPoint.style.opacity = "0";

                                document.querySelectorAll(".formHead")[0].textContent = "It is a tie!";
                                medalNotific[0].style.display = "block";
                                setTimeout(function(){
                                medalNotific[0].style.opacity = "1";
                                    },200);

                                }

                            }
                     }
                    }, 1500);

                    botGetsPoint.style.opacity = "0";

               setTimeout(function(){
               if(NumberA != NumberB){
               chosenPair.splice(0, 2)


               yourTurn.style.display = "block";

                gameBoard.classList.remove("disabl")

               var t;
               for(t=0; t < allCards.length; t++){
               allCards[t].classList.remove("flipped")
                    }
                }
                botPlays.style.display = "none";
                }, 2500);
        }


    }

}

