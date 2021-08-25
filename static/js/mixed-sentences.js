
const classes = ["firstW", "secondW", "thirdW", "fourthW", "fifthW", "sixthW",
                "seventhW", "eighthW", "ninthW", "tenthW",
                "eleventhW", "twelfth", "thirteenthW"
                ]


const megaArr = [
            {
            sentences: [
                        ["Já ", "jsem ", "student. "], ["My", "nejsme", "z", "USA."],
                        ["On", "bydlí", "v", "Jihlavě."], ["Jak", "se", "jmenuješ?"],
                        ["Jak", "se", "máš?"], ["Kolik", "je", "ti", "let?"],
                        ["Kdy", "jdeš", "do", "práce?"]
                        ],

            withWrongWords:    [
                            ["Já ", "jsem ", "student. ", "On ", "jsme ", "studenti. "],
                            ["My", "nejsme", "z", "USA.", "jsme", "vy", "ne"],
                            ["On", "bydlí", "v", "Jihlavě.", "Ona", "do", "z"],
                            ["Jak", "se", "jmenuješ?", "Kdy", "ona", "jmenuje?"],
                            ["Jak", "se", "máš?", "Kolik", "on", "má"],
                            ["Kolik", "je", "ti", "let?", "Kde", "jsou", "jak"],
                            ["Kdy", "jdeš", "do", "práce?", "Jak", "jdou", "z"]
                            ],

            EngSentences: ["I am a student", "We are not from the USA", "He lives in Jihlava",
                            "What is your name?", "How are you?", "How old are you?",
                            "When do you go to work?"]
            },


          {
            sentences: [
                        ["Já", "čtu", "velkou", "knihu."], ["Oni", "pěčou", "jahodový", "dort."],
                        ["Ona", "spravuje", "rozbité", "auto."], ["Vy", "krájíte", "chleba."],
                        ["My", "nečteme", "časopis."], ["Jakou", "hraješ", "hru?"],
                        ["Kdy", "vypneš", "televizi?"], ["Učitel", "zapne", "radio."]
                        ],

        withWrongWords: [
                            ["Já", "čtu", "velkou", "knihu.", "čte", "ty", "chleba.", ],
                            ["Oni", "pěčou", "jahodový", "dort.", "on", "krájí", "chleba"],
                            ["Ona", "spravuje", "rozbité", "auto.", "vypne",],
                            ["Vy", "krájíte", "chleba.", "jahodový", "pěčete"],
                            ["My", "nečteme", "knihu", "časopis."],
                            ["Jakou", "hraješ", "hru?",  "zapneš", "televizi"],
                            ["Kdy", "vypneš", "televizi?", "vypne", "spravuje"],
                            ["Učitel", "zapne", "radio.", "vypne", "zapneš" ]
                            ],


        EngSentences: ["I read a big book", "They bake a strawberry cake",
                        "She fixes a broken car", "You cut bread", "We don't read a magazine",
                        "What game do you play?", "When do you turn the TV off?",
                        "The teacher turns the radio on"]
        },
        {
            sentences: [
                        ["Já", "pomáhám ", "mamince", "a", "tátovi."],
                        ["Ty", "zatelefonuješ", "kamarádovi.",],
                        ["On", "přijde", "k", "učiteli."],
                        ["Já", "dám", "řediteli", "knihu."],
                        ["Ty", "kupuješ", "přítelkyni", "počítač", "a", "růži."],
                        ["On", "vaří", "tátovi", "snídani", "a", "večeři."],
                        ["Ona", "posílá", "babičce", "sms zprávu", "nebo", "dopis."],
                        ["On", "nabízí", "kamarádovi", "práci."]
                        ],

            withWrongWords: [
                            ["Já", "pomáhám ", "mamince", "a", "tátovi.", "tátu", "maminku"],
                            ["Ty", "zatelefonuješ", "kamarádovi.", "kamaráda", "zatelefonuje" ],
                            ["On", "přijde", "k", "učiteli.", "učitele", "doktorovi", "doktora"],
                            ["Já", "dám", "řediteli", "knihu.", "knize", "ředitele" ],
                            ["Ty", "kupuješ", "přítelkyni", "počítač", "a", "růži.", "počítači", "nebo"],
                            ["On", "vaří", "tátovi", "snídani", "a", "večeři.", "táta", "snídaně", "večeře"],
                            ["Ona", "posílá", "babičce", "sms zprávu", "nebo", "dopis.", "babička", "dopisu", "zprávě"],
                            ["On", "nabízí", "kamarádovi", "práci.", "práce", "kamaráda"]
                            ],


            EngSentences:["I help mum and dad", "You call a friend", "He comes to the teacher",
                          "I give the director a book", "You buy the girlfriend a computer and rose",
                           "He cooks his dad breakfast and dinner", "She sends her grandma an sms message or a letter",
                           "He offers his friend a job"]
             },
             {
              sentences:[
                        ["Minulou", "zimu", "jsem", "jel", "do", "Německa."],
                        ["On", "četl", "zajímavý", "časopis", "a", "ona", "poslouchala", "rádio." ],
                        ["Byli", "jsme", "doma", "protože", "pršelo."],
                        ["Bylo", "hezky,", "a tak", "jsme", "šli", "na", "pláž."],
                        ["Moje", "kamarádky", "se opalovaly", "a", "moji", "kamarádi", "pili", "pivo."],
                        ["Vy", "jste", "jedli", "hlavně", "pizzu."],
                        ["Já", "jsem", "už", "spal, ale", "ona", "pracovala", "velmi", "tvrdě."],
                        ["Kamarád", "šel", "do", "nového", "muzea."]
                        ],

            withWrongWords:[
                            ["Minulou", "zimu", "jsem", "jel", "do", "Německa.", "léto", "jely", "jedu" ],
                            ["On", "četl", "zajímavý", "časopis", "a", "ona", "poslouchala", "rádio.", "četla", "poslouchali" ],
                            ["Byli", "jsme", "doma", "protože", "pršelo.", "Byla", "Byl", "už"],
                            ["Bylo", "hezky,", "a tak", "jsme", "šli", "na", "pláž.", "Byla", "jsem", "šel"],
                            ["Moje", "kamarádky", "se opalovaly", "a", "moji", "kamarádi", "pili", "pivo.", "opalovali", "pily"],
                            ["Vy", "jste", "jedli", "hlavně", "pizzu.", "jíte", "jsem"],
                            ["Já", "jsem", "už", "spal, ale", "ona", "pracovala", "velmi", "tvrdě."],
                            ["Kamarád", "šel", "do", "nového", "muzea.", "šla", "jde" ]
                            ],


             EngSentences: ["Last winter, I went to Germany.",
                            "He was reading an interesting magazine and she was listening to the radio.",
                            "We were at home because it was raining.",
                            "The weather was nice, so we went to the beach.",
                           "My friends (girls) were sunbathing and my friends (boys) were drinking beer.",
                           "You ate mainly pizza.",
                           "I was already sleeping but she was working very hard.",
                           "A friend (boy) went to a new museum."]
             },
             {
             sentences: [
                        ["Příští ", "týden", "pojedu", "do", "Prahy", "a", "určitě", "navštívím", "Národní Muzeum." ],
                        ["Příští", "neděli", "se budeme", "učit,", "protože", "v pondělí", "budeme", "psát", "test."],
                        ["Moje", "maminka", "bude", "vařit", "celý", "den."],
                        ["Kuchař", "uvaří", "kuřecí", "polévku."],
                        ["Až", "budu", "v", "nemocnici", "zatelefonuji", "tátovi."],
                        ["Jeho", "učitel", "přijede", "v", "pět", "hodin."],
                        ["Zítra", "nebudu", "jíst", "maso", "a", "budu", "pít", "čaj."],
                        ["Náš", "zubař", "ti", "určitě","pomůže."],
                        ["Myslím si,", "že", "to", "nebude","bolet."]

                        ],

            withWrongWords:[
                            ["Příští ", "týden", "pojedu", "do", "Prahy", "a", "určitě", "navštívím", "Národní Muzeum." ],
                            ["Příští", "neděli", "se budeme", "učit,", "protože", "v pondělí", "budeme", "psát", "test.", "naučíme se"],
                            ["Moje", "maminka", "bude", "vařit", "celý", "den.", "uvaří", "zítra"],
                            ["Kuchař", "uvaří", "kuřecí", "polévku.", "vaří", "vepřovou"],
                            ["Až", "budu", "v", "nemocnici", "zatelefonuji", "tátovi.", "telefonuji", "tátu"],
                            ["Jeho", "učitel", "přijede", "v", "pět", "hodin.", "bude", "přijíždět"],
                            ["Zítra", "nebudu", "jíst", "maso", "a", "budu", "pít", "čaj.", "bude", "budou"],
                            ["Náš", "zubař", "ti", "určitě","pomůže.", "bude", "budete", "doktor", "učitel", "nám"],
                            ["Myslím si,", "že", "to", "nebude","bolet.", "bude", "budete"]
                            ],


            EngSentences: ["Next week, I am going to Prague and I am definitely going to visit the National Museum.",
                            "Next Sunday, we will be studying as on Monday, we are going to write a test. ",
                            "My mum will be cooking the whole day.",
                            "The cook will cook a chicken soup.",
                           "When I am in the hospital, I will call my dad.",
                           "His teacher will come (in a vehicle) at five o'clock.",
                           "Tomorrow, I won't be eating meat and I will be drinking tea.",
                           "Our dentist will surely help you.",
                           "I think that it won't hurt."]
                        }
    ]

const lessonSource = megaArr[lessonNumber -1]
const sentences = lessonSource.sentences
const withWrongWords = lessonSource.withWrongWords
const EngSentences = lessonSource.EngSentences







const nextSent = document.getElementById("nextSent")
const translatedEng = document.getElementById("translatedEng")
const containers = document.getElementById("containers")
const words = document.getElementById("words")
const allWords = document.querySelectorAll(".slovo")
const allDropContainers = document.querySelectorAll(".dropContainer")
const tryAgain = document.getElementById("tryAgain")

    function generateRandomIndex(){

            let NextTotalWords = withWrongWords[0].length



            let indexy = []
            while (indexy.length < NextTotalWords){
                    let r = Math.floor(Math.random() * NextTotalWords)
            if(indexy.indexOf(r) === -1){
                indexy.push(r)
                }
            }

            return indexy

     }



     let indexy = generateRandomIndex()



    function assignWords(){


            for(let i=0; i < withWrongWords[0].length; i++){
            allWords[i].classList.add("WordAssigned")
            allWords[i].classList.remove("chosen")
            allWords[i].textContent = withWrongWords[0][indexy[i]]
            }


            for(let x = 0; x < allDropContainers.length; x++){
            allDropContainers[x].classList.remove("filled")
            allDropContainers[x].classList.remove("checked")
            allDropContainers[x].classList.remove("wrong")
            allDropContainers[x].classList.remove("assigned")
            allDropContainers[x].textContent = ""
            }


            for(let k=0; k < sentences[0].length; k++){

            allDropContainers[k].classList.add("assigned")
            }
            translatedEng.textContent = EngSentences[0]

    }


    assignWords()



const chosenAnswers = document.querySelectorAll(".chosen")

let negativePoints = 0;



const initialSentencesLength = sentences.length;

let numberOfFilled = 0;
function chooseWord(element){
        document.getElementById("headline").style.opacity = "0";

        numberOfFilled++;

        const assignedDropContainer = document.querySelectorAll(".assigned")

        if(numberOfFilled <= sentences[0].length){
            for(let i=0; i < assignedDropContainer.length; i++){
                if(assignedDropContainer[i].classList.contains("filled") === false){
                        assignedDropContainer[i].textContent = element.textContent;
                        element.classList.add("chosen")
                        assignedDropContainer[i].classList.add("filled")
                        break;
                }
            }
        }



        if(numberOfFilled === sentences[0].length){

            for(let i=0; i < sentences[0].length; i++){

                if(allDropContainers[i].textContent === sentences[0][i]){
                    allDropContainers[i].classList.add("checked")
                        }else{allDropContainers[i].classList.add("wrong")}
                }
                const wrongAnswers = document.querySelectorAll(".wrong")
                const chosenAnswers = document.querySelectorAll(".chosen")
                const WordAssigned = document.querySelectorAll(".WordAssigned")

                if(wrongAnswers.length > 0){
                        negativePoints = negativePoints +0.5;
                        tryAgain.style.opacity = "1";

                        for(let i=0; i < WordAssigned.length; i++){
                        WordAssigned[i].style.pointerEvents="none";
                        }

                        setTimeout(function(){

                        for(let i=0; i < WordAssigned.length; i++){
                            WordAssigned[i].style.pointerEvents="auto";
                            WordAssigned[i].classList.remove("chosen")
                        }
                        tryAgain.style.opacity = "0";


                        for(let i=0; i < allDropContainers.length; i++){

                                allDropContainers[i].classList.remove("wrong")
                                allDropContainers[i].classList.remove("checked")
                                allDropContainers[i].classList.remove("filled")
                                allDropContainers[i].textContent = ""
                        }

                        }, 2800);

                        numberOfFilled = 0;
                }

                if(wrongAnswers.length === 0){

                    nextSent.classList.remove("disactivated")

                    for(let i=0; i < allWords.length; i++){
                        allWords[i].classList.remove("WordAssigned");
                        }
                }
        }
}



    function generateSentence(){


            // final score
            let finalScore = initialSentencesLength - negativePoints;

            if(sentences.length === 1){
            words.style.opacity = "0";
            translatedEng.style.display = "none";
            nextSent.classList.add("disactivated")

                let medalIndex;
                if(finalScore/(initialSentencesLength/100) <= 60){
                medalIndex = 0
                }
                if(finalScore/(initialSentencesLength/100) > 60 && finalScore/(initialSentencesLength/100) <= 70){
                medalIndex=1
                }
                if(finalScore/(initialSentencesLength/100) > 70 && finalScore/(initialSentencesLength/100) <= 80){
                medalIndex=2
                }
                if(finalScore/(initialSentencesLength/100) > 80){
                medalIndex=3
                }



                document.querySelectorAll(".medalNotific")[medalIndex].style.display = "block";
                    setTimeout(function(){
                    document.querySelectorAll(".medalNotific")[medalIndex].style.opacity = "1";
                    },200);

            }


           containers.style.transform = "translateX(600px)";
           containers.style.opacity = "0";

             translatedEng.style.opacity = "0"
             containers.style.transitionDuration = "1s"

            if(sentences.length > 1){
                setTimeout(function(){


                    EngSentences.splice(0, 1);
                    translatedEng.textContent = EngSentences[0]

                    containers.style.transform = "translateX(0px)";
                    containers.style.transitionDuration = "0s"
                    containers.style.opacity = "1";
                    translatedEng.style.opacity = "1"
                 }, 1000);

                nextSent.classList.add("disactivated")

                sentences.splice(0, 1);
                withWrongWords.splice(0, 1);

                indexy = generateRandomIndex()

                numberOfFilled = 0;
                assignWords()
            }
    }



let numOfRemovals = 0;
function removeWord(element){
const allChosenWords = document.querySelectorAll(".chosen")
const allAssignedDropBoxes = document.querySelectorAll(".assigned")


for(let r=0; r < allChosenWords.length; r++){

    if(allChosenWords[r].textContent === element.textContent){
    allChosenWords[r].classList.remove("chosen")

    element.classList.remove("filled")
    }else{continue;}

}

numberOfFilled--;
numOfRemovals++;

element.textContent = "";


}



