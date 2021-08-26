const allCards = document.querySelectorAll(".thecard0")


const botPlays = document.getElementById("botPlays")
const yourTurn = document.getElementById("yourTurn")
const botGetsPoint = document.getElementById("botGetsPoint")
const gameBoard = document.getElementById("gameBoard")


let countBotPoint = 0;
let botPointBox =document.getElementById("botPointBox").textContent = countBotPoint;
let countUserPoint = 0;
let userPointBox =document.getElementById("userPointBox").textContent = countUserPoint;



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



    function initiateGame(){

        const toBeAssignedToFlashCards = [];

        for(let x=0; x < gameWords.length; x++){
            for(let y=0; y < gameWords[x].length; y++){
            toBeAssignedToFlashCards.push(gameWords[x][y])
            }
        }

        let indices = []
        while (indices.length < 20){
                let r = Math.floor(Math.random() * 20)
        if(indices.indexOf(r) === -1){
            indices.push(r)
            }
        }
        for(let i=0; i < allCards.length; i++){
        allCards[i].children[1].textContent = toBeAssignedToFlashCards[indices[i]];
        }

        const mainButtons = document.getElementById("mainButtons")
        mainButtons.classList.add("hidden");
        document.getElementById("mainButtonsGame").classList.remove("hidden");

        return indices
        }


    const indices = initiateGame()


let firstChoice;
let secondChoice;
const chosenPair = []

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


        //WHEN PLAYER GETS THE CORRECT PAIR
        if(chosenPair.length > 1 && firstChoice === secondChoice){

            countUserPoint++;

            //IF THERE ARE NO MORE CARDS LEFT - GAME OVER AND MEDAL
            if(gameWords.length === 1){medal()}

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

            const dobre = document.getElementById("dobre")
            dobre.style.opacity = "1";

            userPointBox =document.getElementById("userPointBox").textContent = countUserPoint;

            setTimeout(function(){
                dobre.style.opacity = "0";
                gameBoard.classList.remove("disabl")
            }, 1800);

        }


        //WHEN PLAYER CHOOSES A WRONG PAIR
        if(chosenPair.length > 1 && firstChoice != secondChoice){

            gameBoard.classList.add("disabl")

            const spatne = document.getElementById("spatne")
            spatne.style.opacity = "1";


            setTimeout(function(){

            botPlays.style.display = "block";
            yourTurn.style.display = "none";

            spatne.style.opacity = "0";

                for(let h=0; h < allCards.length; h++){
                    if(allCards[h].classList.contains("flipped")){
                    allCards[h].classList.remove('flipped');
                    }

                }
            }, 1800);

        setTimeout(robot, 3000)

    }

}

function robot(){

        let NumberA = Math.floor(Math.random() * gameWords.length);
        let NumberB = Math.floor(Math.random() * gameWords.length);


        botPlays.style.display = "block";

        NumberA = NumberA;
        NumberB = NumberB;
            let botFirstWord = gameWords[NumberA][0]
            let botSecondWord = gameWords[NumberB][1]

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

                        const flippedCards = document.querySelectorAll(".flipped")

                        for(let i=0; i < flippedCards.length; i++){
                        flippedCards[i].classList.replace("flipped", "BotCorrect")
                        }

                        const BotCorrect = document.querySelectorAll(".BotCorrect")

                        for(let i=0; i < BotCorrect.length; i++){
                        BotCorrect[i].children[1].style.background = "#87cefa";
                        }

                        // IF THERE ARE NO MORE CARDS LEFT - GAME OVER AND MEDAL
                                if(gameWords.length > 0){
                                setTimeout(robot, 1000)
                                }
                                if(gameWords.length === 0){medal()}
                   }
                }, 1500);

                    botGetsPoint.style.opacity = "0";

               setTimeout(function(){
               if(NumberA != NumberB){
               chosenPair.splice(0, 2)


               yourTurn.style.display = "block";
               gameBoard.classList.remove("disabl")


               for(let t=0; t < allCards.length; t++){
               allCards[t].classList.remove("flipped")
                    }
                }
                botPlays.style.display = "none";
                }, 2500);
        }



        function medal(){

                    yourTurn.style.display = "none";
                    botPlays.style.display = "none";

                    let medalIndex;

                    if(countBotPoint > countUserPoint || countUserPoint === countBotPoint){
                        botGetsPoint.style.opacity = "0";
                        medalIndex = 0;
                        }

                    if(countUserPoint > countBotPoint){
                           if(countUserPoint > 5 && countUserPoint <= 7){
                                medalIndex = 1;
                            }

                            if(countUserPoint > 7 && countUserPoint <= 9){
                                medalIndex = 2;
                            }

                            if(countUserPoint > 9){
                                medalIndex = 3;
                            }
                        }
                        const medalNotific = document.querySelectorAll(".medalNotific")
                        medalNotific[medalIndex].style.display = "block";
                        setTimeout(function(){
                        medalNotific[medalIndex].style.opacity = "1";
                        },200);
        }
