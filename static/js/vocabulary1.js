const vocabulary_lesson_1 = {"Ahoj": "Hi", "Dobrý den": "Hello", "dům": "house",
                       "kniha": "book", "kolik": "how many/much", "Česká republika": "Czech Republic",
                       "čeština": "Czech language", "město": "city", "bydlet": "to live (somewhere)",
                        "starý": "old", "mladý": "young", "dobrý": "good",
                       "kamarád": "friend - male", "kamarádka": "friend - female",
                        "přítel": "boyfriend", "přítelkyně": "girlfriend",
                        "pes": "dog", "počítač": "computer", "kluk": "boy", "holka":"girl",
                        "pivo":"beer", "škola": "school", "práce": "work", "pracovat": "to work", "autobus": "bus",
                        "auto": "car", "restaurace": "restaurant",
                        "nemocnice": "hospital", "mluvit": "to speak"}


const vocabulary_lesson_2 = {"ráno": "morning", "vstávat": "get up", "hodina": "hour/o'clock",
                       "vyčistit": "clean", "zub": "tooth", "nasnídat se": "have breakfast",
                       "obvykle": "usually", "šunka": "ham", "čaj": "tea",
                        "začínat": "begin", "učit se": "study", "jít": "go (on foot)",
                       "oběd": "lunch", "maso": "meat", "brambora":"potato", "zelenina":"vegetable",
                       "odpoledne":"afternoon", "hrát":"play", "číst":"read", "vracet se":"return",
                       "dívat se": "watch"}


const allVocabularies = [

                        {"Ahoj": "Hi", "Dobrý den": "Hello", "dům": "house",
                       "kniha": "book", "kolik": "how many/much", "Česká republika": "Czech Republic",
                       "čeština": "Czech language", "město": "city", "bydlet": "to live (somewhere)",
                        "starý": "old", "mladý": "young", "dobrý": "good",
                       "kamarád": "friend - male", "kamarádka": "friend - female",
                        "přítel": "boyfriend", "přítelkyně": "girlfriend",
                        "pes": "dog", "počítač": "computer", "kluk": "boy", "holka":"girl",
                        "pivo":"beer", "škola": "school", "práce": "work", "pracovat": "to work", "autobus": "bus",
                        "auto": "car", "restaurace": "restaurant",
                        "nemocnice": "hospital", "mluvit": "to speak"},


                        {"ráno": "morning", "vstávat": "get up", "hodina": "hour/o'clock",
                       "vyčistit": "clean", "zub": "tooth", "nasnídat se": "have breakfast",
                       "obvykle": "usually", "šunka": "ham", "čaj": "tea",
                        "začínat": "begin", "učit se": "study", "jít": "go (on foot)",
                       "oběd": "lunch", "maso": "meat", "brambora":"potato", "zelenina":"vegetable",
                       "odpoledne":"afternoon", "hrát":"play", "číst":"read", "vracet se":"return",
                       "dívat se": "watch"},


                       {"doktor": "doctor", "mít":"have", "narozeniny":"birthday", "chtít":"want",
                       "koupit":"buy", "takový":"such", "podávat":"hand something",
                       "hezký":"nice", "dárek": "gift", "hledat": "look for",
                       "jet": "go (in a vehicle)", "kupovat": "buy", "platit": "pay", "taška": "bag",
                       "kuřecí": "chicken", "rohlík": "bun", "potřebovat": "need",
                       "vepřový": "pork", "hovězí": "beef", "pamatovat si": "remember",
                        "manželka":"wife", "cukr":"sugar",
                        "kolegyně":"colleague (fem.)", "kolega":"colleague (masc.)",
                        "stůl":"table/desk", "kancelář":"office", "nový":"new",
                        "vzpomenout si": "remember", "vidět":"see", "říkat":"say", "když":"when",
                        "odpovídat":"answer",
                       },

                        {"rok": "year", "dovolená": "vacation", "těšit se": "look forward",
                       "zarezervovat": "to book", "letět": "fly", "letadlo": "plane",
                       "mluvit": "speak", "poslouchat": "listen", "koupat se": "have a bath",
                       "pláž": "beach", "opalovat se":"sunbathe", "pršet": "rain",
                       "zůstat": "stay", "pít": "drink", "rozhodnout se": "decide",
                      },

                       {"zeptat se": "ask", "jestli": "if", "čas": "time",
                        "moc": "much", "bolet": "hurt", "myslet si": "think",
                        "pomoct": "to help", "příbuzní": "relatives"},



                        ]



const adverb = {"part of speech:": "adverb"}
const conjunction = {"part of speech:": "conjunction"}
const informal = {"register:": "informal"}
const formal = {"register:": "formal"}


const hrad = {"part of speech:":"noun",
            "gender:": "masculine",
            "category": "hrad",
            "animacy": "inanimate",
            "plural ending": "-y"
            }

const pán = {"part of speech:":"noun",
            "gender:": "masculine",
            "category": "pán",
            "animacy": "animate",
            "plural ending": "-i"
            }

const stroj = {"part of speech:":"noun",
            "gender:": "masculine",
            "category": "stroj",
            "animacy": "inanimate",
            "plural ending": "-e"
            }

const muž = {"part of speech:":"noun",
            "gender:": "masculine",
            "category": "muž",
            "animacy": "animate",
            "plural ending": "-i"
            }

const předseda = {"part of speech:":"noun",
                "gender:": "masculine",
                "category": "předseda",
                "animacy": "animate",
                "plural ending": "-ové"
                }

const žena = {"part of speech:":"noun",
            "gender:": "feminine",
            "category": "žena",
            "plural ending": "-y"
            }

const dovolená = {"part of speech:":"noun",
            "gender:": "feminine",
            "category": "mladá",
            "plural ending": "-y"
            }


const narozeniny = {"part of speech:":" collective noun",
            "gender:": "feminine",
            "category": "žena",
            "plural ending": "-y"

            }

const růže  = {"part of speech:":"noun",
            "gender:": "feminine",
            "category": "růže",
            "plural ending": "-e"
            }

const město = {"part of speech:":"noun",
            "gender:": "neuter",
            "category": "město",
            "plural ending": "-a"
            }

const pole = {"part of speech:":"noun",
            "gender:": "neuter",
            "category": "pole",
            "plural ending": "-e"
            }



const jít = {"part of speech:":"irregular verb",
              "class": "first",
              "já":"jdu",
              "ty":"jdeš",
              "on/ona":"jde",
              "my":"jdeme",
              "vy":"jdete",
              "oni/ony":"jdou"
              }

const mít =   {"part of speech:":"irregular verb",
              "class": "fifth",
              "já":"mám",
              "ty":"máš",
              "on/ona":"má",
              "my":"máme",
              "vy":"máte",
              "oni/ony":"mají"
              }



const chtít = {"part of speech:":"irregular verb",
              "class": "first",
              "já":"chci",
              "ty":"chceš",
              "on/ona":"chce",
              "my":"chceme",
              "vy":"chcete",
              "oni/ony":"chtějí"
              }

const jet = {"part of speech:":"irregular verb",
              "class": "first",
              "já":"jedu",
              "ty":"jedeš",
              "on/ona":"jede",
              "my":"jedeme",
              "vy":"jedete",
              "oni/ony":"jedou"
              }
const pomoct = {"part of speech:":"irregular verb",
              "class:": "third",
              "já":"pomůžu",
              "ty":"pomůžeš",
              "on/ona/ono":"pomůže",
              "my":"pomůžeme",
              "vy":"pomůžete",
              "oni/ony":"pomůžou"
              }


const class1 = {"part of speech:":"verb",
              "class": "first",
              "já":"-u",
              "ty":"-eš",
              "on/ona":"-e",
              "my":"-eme",
              "vy":"-ete",
              "oni/ony":"-ou"
              }

const class2 = {"part of speech:":"verb",
              "class": "second",
              "já":"-nu",
              "ty":"-neš",
              "on/ona":"-ne",
              "my":"-neme",
              "vy":"-nete",
              "oni/ony":"-nou"
              }



const class3 = {"part of speech:":"verb",
              "class:": "third",
              "já":"-i/-ju",
              "ty":"-eš",
              "on/ona/ono":"-e",
              "my":"-eme",
              "vy":"-ete",
              "oni/ony":"-í/-jou"
              }

const class4 = {"part of speech:":"verb",
              "class": "fourth",
              "já":"-ím",
              "ty":"-íš",
              "on/ona":"-í",
              "my":"-íme",
              "vy":"-íte",
              "oni/ony":"-í"
              }

const class5 = {"part of speech:":"verb",
              "class": "fifth",
              "já":"-ám",
              "ty":"-áš",
              "on/ona":"-á",
              "my":"-áme",
              "vy":"-áte",
              "oni/ony":"-ají"
              }


const mladý = {"part of speech:":"adjective",
             "category": "mladý",
             "masculine": "-ý",
             "feminine": "-á",
             "neuter": "-é"
            }

const jarní = {"part of speech":"adjective",
             "category": "jarní",
             "masculine": "í",
             "feminine": "í",
             "neuter": "í"
            }



const listDict = {"Ahoj": informal, "Dobrý den":formal, "kolik":adverb,
                "obvykle":adverb, "moc":adverb, "když":conjunction, "jestli":conjunction,
                "autobus":hrad, "dům":hrad, "zub": hrad, "oběd": hrad,
                "dárek": hrad, "rohlík":hrad, "cukr":hrad, "stůl":hrad,
                "rok":hrad, "čas":hrad,

                "dovolená":dovolená,
                "kamarád":pán, "pes":pán, "kluk":pán, "doktor":pán,
                "kolega":předseda,

                "počítač":stroj, "čaj":stroj,

                 "přítel":muž,

                "kniha":žena, "Česká republika":žena, "čeština":žena,
                "kamarádka":žena, "holka":žena, "škola":žena, "taška":žena,
                "brambora":žena, "zelenina":žena, "šunka":žena, "hodina":žena,
                "manželka":žena,

                "práce":růže, "restaurace":růže, "nemocnice":růže, "přítelkyně":růže,
                "kolegyně":růže, "kancelář":růže, "pláž":růže,

                 "město":město, "pivo":město, "auto":město,
                 "ráno":město, "maso":město, "ráno":město, "auto":město,
                 "letadlo":město,

                 "odpoledne":pole,

                  "vstávat":class5, "nasnídat se":class5, "začínat":class5,
                  "dívat se":class5, "podávat":class5, "hledat":class5,
                  "říkat":class5, "odpovídat":class5, "poslouchat":class5,
                  "koupat se":class5, "zeptat se":class5,


                 "bydlet":class4, "mluvit":class4, "vyčistit":class4,
                 "učit se":class4, "vracet se":class4, "platit":class4,
                 "vidět":class4, "koupit":class4, "těšit se":class4,
                 "letět":class4, "mluvit":class4, "pršet":class4,
                 "bolet":class4, "myslet si":class4,


                 "pracovat": class3, "hrát":class3, "kupovat": class3,
                 "potřebovat": class3, "pamatovat si":class3,
                 "zarezervovat":class3, "opalovat se":class3, "pít":class3,

                  "zůstat":class2, "rozhodnout se":class2,

                 "číst": class1, "vzpomenout si":class1,

                 "starý":mladý, "mladý":mladý, "dobrý":jarní, "takový":mladý,
                 "zdarec": informal, "hezký": mladý, "kuřecí":jarní,
                 "vepřový":mladý, "hovězí":jarní, "nový":mladý,
                 "příbuzní":jarní,

                 "jít":jít, "mít":mít, "jet":jet, "chtít":chtít,
                 "narozeniny": žena, "pomoct":pomoct,

                }


const wordsTable = document.querySelectorAll(".wordsTable")



for(let i=0; i < allVocabularies.length; i++){

    for(let s=0; s < Object.values(allVocabularies[i]).length; s++){

        const EngWords = document.createElement('div');
        EngWords.setAttribute("class", "EngWords")

        EngWords.innerHTML = Object.values(allVocabularies[i])[s]
        wordsTable[i].appendChild(EngWords)

        const CzWords = document.createElement('div');
        CzWords.setAttribute("class", "CzWords");
        CzWords.setAttribute("onclick", "wordInfo(this)");
        CzWords.innerHTML = Object.keys(allVocabularies[i])[s]
        wordsTable[i].appendChild(CzWords)

    }
}



let vocDisplayed = false;

const dictionaryButt = document.getElementById("dictionaryButt")
const vocDrag = document.getElementById("vocDrag")

dictionaryButt.addEventListener("click", function() {showVocab()});



function showVocab(){
    var newSidebar = document.getElementById("newSidebar")
    var mainButtons = document.getElementById("mainButtons")
    vocDrag.classList.toggle("show")

    if(vocDrag.classList.contains("show")){
    vocDisplayed = true;
    }else{
    vocDisplayed = false;
    wordInf.style.display = "none";
    }

    if(newSidebar.classList.contains("show")){
    newSidebar.classList.remove("show")
    mainButtons.classList.remove("show")
    }

}



const keyInf = document.querySelectorAll(".keyInf")
const ValInf = document.querySelectorAll(".ValInf")


for(let i = 0; i < keyInf.length; i++){
    ValInf[i].style.height = keyInf[i].clientHeight + "px";
}


const wordInf = document.getElementById("wordInf")



function wordInfo(element){

    wordInf.style.display = "block";


        for(let i=0; i < keyInf.length; i++){
            keyInf[i].classList.remove("vis")
            ValInf[i].classList.remove("vis")
        }



        for(let i = 0; i < Object.keys(listDict[element.textContent]).length; i++){

            keyInf[i].textContent = Object.keys(listDict[element.textContent])[i];
            keyInf[i].classList.add("vis")
            ValInf[i].textContent = Object.values(listDict[element.textContent])[i];
            ValInf[i].classList.add("vis")
        }
}


function closeTable(){

    wordInf.style.display = "none";
}


function changeVocab(BtnNumber){
    const selectVocBtn = document.querySelectorAll(".closeInfVocab")
    const wordsTableCont = document.querySelectorAll(".wordsTableCont");


    for(let i=0; i < wordsTableCont.length; i++){

        wordsTableCont[i].classList.remove("slideLeft");
        wordsTableCont[BtnNumber].classList.add("slideLeft");

        selectVocBtn[i].classList.remove("selected")
        selectVocBtn[BtnNumber].classList.add("selected")
     }

}

