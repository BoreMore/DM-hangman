var aCanvas = document.getElementById("myCanvas");
var ctx = aCanvas.getContext("2d");
//ground frame
function failure1() {
    ctx.beginPath();
    ctx.moveTo(50, 700);
    ctx.lineTo(450, 700);
    ctx.stroke();
}
//vertical frame
function failure2() {
    ctx.beginPath();
    ctx.moveTo(150,700);
    ctx.lineTo(150,50);
    ctx.stroke();
}
//horizontal nonground frame
function failure3() {
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(350, 50);
    ctx.stroke();
}
//smallest frame
function failure4() {
    ctx.beginPath();
    ctx.moveTo(350, 50);
    ctx.lineTo(350, 100);
    ctx.stroke();
}
//head
function failure5() {
    //head
    ctx.beginPath();
    ctx.arc(350,150,50,0,2*Math.PI);
    ctx.stroke();
    //smirk
    ctx.beginPath();
    //ctx.arc(350,180,15,0,.6*Math.PI);
    ctx.ellipse(356,177,15,8,333*Math.PI/180,0,1*Math.PI);
    ctx.stroke();
    //left eye
    ctx.beginPath();
    ctx.ellipse(335,135,7.5,11,90*Math.PI/180,0,2*Math.PI);
    ctx.stroke();
    //right eye
    ctx.beginPath();
    ctx.ellipse(365,135,7.5,11,90*Math.PI/180,0,2*Math.PI);
    ctx.stroke();
    //nose
    ctx.beginPath();
    ctx.moveTo(350, 155);
    ctx.lineTo(340, 165);
    ctx.lineTo(350, 165);
    ctx.stroke();
    //left pupil
    ctx.beginPath();
    ctx.ellipse(335,135,6.25,5,90*Math.PI/180,0,2*Math.PI);
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
    //right pupil
    ctx.beginPath();
    ctx.ellipse(365,135,6.25,5,90*Math.PI/180,0,2*Math.PI);
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
    //left inner pupil
    ctx.beginPath();
    ctx.arc(335,135,2.5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    //right inner pupil
    ctx.beginPath();
    ctx.arc(365,135,2.5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}
//body
function failure6() {
    ctx.beginPath();
    ctx.moveTo(350, 200);
    ctx.lineTo(350, 450);
    ctx.stroke();
}
//left arm
function failure7() {
    ctx.beginPath();
    ctx.moveTo(350, 300);
    ctx.lineTo(275, 200);
    ctx.stroke();
}
//right arm
function failure8() {
    ctx.beginPath();
    ctx.moveTo(350, 300);
    ctx.lineTo(425, 200);
    ctx.stroke();
}
//left leg
function failure9() {
    ctx.beginPath();
    ctx.moveTo(350, 450);
    ctx.lineTo(275, 575);
    ctx.stroke();
}
//right leg
function failure10() {
    //right leg
    ctx.beginPath();
    ctx.moveTo(350, 450);
    ctx.lineTo(425, 575);
    ctx.stroke();
    //clear eyes
    ctx.clearRect(320, 120, 60, 30);
    // X left eye
    ctx.beginPath();
    ctx.moveTo(330, 130);
    ctx.lineTo(340, 140);
    ctx.stroke();
    ctx.moveTo(330, 140);
    ctx.lineTo(340, 130);
    ctx.stroke();
    // X right eye
    ctx.beginPath();
    ctx.moveTo(360, 130);
    ctx.lineTo(370, 140);
    ctx.stroke();
    ctx.moveTo(370, 130);
    ctx.lineTo(360, 140);
    ctx.stroke();
    //clear smile
    ctx.clearRect(330, 166, 50, 23);
    //frown
    ctx.beginPath();
    ctx.ellipse(350,185,9.5,5,180*Math.PI/180,0,1*Math.PI);
    ctx.stroke();
    //tongue
    ctx.beginPath();
    ctx.ellipse(357, 179, 4.5, 10, 45*Math.PI/180, .05*Math.PI, .8*Math.PI);
    ctx.fillStyle = "coral";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(350, 187);
    ctx.lineTo(356, 181);
    ctx.stroke();
    /*//clear left arm
    ctx.clearRect(274, 201, 75, 99);
    ctx.clearRect(274, 199, 5, 5);
    //clear right arm
    ctx.clearRect(351, 201, 75, 99);
    ctx.clearRect(400, 199, 30, 30);
    //left arm choking
    ctx.beginPath();
    ctx.moveTo(350, 300);
    ctx.lineTo(287, 235);
    ctx.lineTo(350, 200);
    ctx.stroke();
    //right arm choking
    ctx.beginPath();
    ctx.moveTo(350, 300);
    ctx.lineTo(413, 235);
    ctx.lineTo(350, 200);
    ctx.stroke();*/
}
// extended songs
/*var words = {
    speakAndSpell: ["I SOMETIMES WISH I WAS DEAD", "BOYS SAY GO", "NODISCO", "WHAT'S YOUR NAME", "PHOTOGRAPHIC", "BIG MUFF", "ANY SECOND NOW", "DREAMING OF ME"],
    aBrokenFrame: ["MONUMENT", "NOTHING TO FEAR", "SATELLITE", "THE MEANING OF LOVE", "A PHOTOGRAPH OF YOU", "SHOULDNT HAVE DONE THAT"],
    constructionTimeAgain: ["MORE THAN A PARTY", "SHAME", "THE LANDSCAPE IS CHANGING", "TOLD YOU SO", "AND THEN", "GET THE BALANCE RIGHT", "WORK HARD"],
    someGreatReward: ["LIE TO ME", "IT DOESNT MATTER", "STORIES OF OLD", "SOMEBODY", "IF YOU WANT"],
    blackCelebration: ["FLY ON THE WINDSCREEN", "A QUESTION OF LUST", "SOMETIMES", "IT DOESNT MATTER TWO", "HERE IS THE HOUSE", "WORLD FULL OF NOTHING", "DRESSED IN BLACK", "NEW DRESS", "BLACK DAY", "BUT NOT TONIGHT", "ITS CALLED A HEART", "SHAKE THE DISEASE"],
    musicForTheMasses: ["THE THINGS YOU SAID", "LITTLE 15", "I WANT YOU NOW", "TO HAVE AND TO HOLD", "NOTHING", "PLEASURE, LITTLE TREASURE", "PIMPF", "ROUTE 66"],
    violator: ["HALO", "WAITING FOR THE NIGHT", "POLICY OF TRUTH", "BLUE DRESS", "CLEAN", "DANGEROUS", "HAPPIEST GIRL"],
    songsOfFaithAndDevotion: ["CONDEMNATION", "MERCY IN YOU", "JUDAS", "GET RIGHT WITH ME", "RUSH", "HIGHER LOVE", "MY JOY"],
    ultra: ["THE LOVE THIEVES", "HOME", "SISTER OF NIGHT", "FREESTATE", "THE BOTTOM LINE", "INSIGHT", "PAINKILLER", "SLOWBLOW", "SURRENDER"],
    exciter: ["SHINE", "THE SWEETEST CONDITION", "THE DEAD OF NIGHT", "LOVETHEME", "COMATOSE", "BREATHE", "EASY TIGER", "I AM YOU", "GOODNIGHT LOVERS"],
    playingTheAngel: ["THE SINNER IN ME", "MACRO", "I WANT IT ALL", "NOTHING'S IMPOSSIBLE", "INTROSPECTRE", "DAMAGED PEOPLE", "LILIAN", "THE DARKEST STAR"],
    soundsOfTheUniverse: ["IN CHAINS", "LITTLE SOUL", "IN SYMPATHY", "PEACE", "COME BACK", "PERFECT", "JEZEBEL", "CORRUPT", "THE SUN AND THE MOON AND THE STARS"],
    deltaMachine: ["HEAVEN", "SECRET TO THE END", "MY LITTLE UNIVERSE", "SLOW", "BROKEN", "THE CHILD INSIDE", "SOFT TOUCH", "ALONE", "GOODBYE"],
    spirit: ["THE WORST CRIME", "SCUM", "YOU MOVE", "ETERNAL", "POISON HEART", "SO MUCH LOVE", "POORMAN", "FAIL"]
};*/

var words = { // 4 per album for now
    speakAndSpell: ["NEW LIFE", "PUPPETS", "JUST CAN'T GET ENOUGH", "TORA! TORA! TORA!"],
    aBrokenFrame: ["LEAVE IN SILENCE", "SEE YOU", "THE SUN AND THE RAINFALL", "MY SECRET GARDEN"],
    constructionTimeAgain: ["PIPELINE", "EVERYTHING COUNTS", "TWO MINUTE WARNING", "LOVE, IN ITSELF"],
    someGreatReward: ["PEOPLE ARE PEOPLE", "MASTER AND SERVANT", "BLASPHEMOUS RUMOURS", "SOMETHING TO DO"],
    blackCelebration: ["BLACK CELEBRATION", "A QUESTION OF TIME", "STRIPPED", "HERE IS THE HOUSE"],
    musicForTheMasses: ["NEVER LET ME DOWN AGAIN", "STRANGELOVE", "BEHIND THE WHEEL", "SACRED"],
    violator: ["WORLD IN MY EYES", "PERSONAL JESUS", "ENJOY THE SILENCE", "SWEETEST PERFECTION"],
    songsOfFaithAndDevotion: ["I FEEL YOU", "WALKING IN MY SHOES", "ONE CARESS", "IN YOUR ROOM"],
    ultra: ["BARREL OF A GUN", "IT'S NO GOOD", "ONLY WHEN I LOSE MYSELF", "USELESS"],
    exciter: ["DREAM ON", "WHEN THE BODY SPEAKS", "I FEEL LOVED", "FREELOVE"],
    playingTheAngel: ["A PAIN THAT I'M USED TO", "JOHN THE REVELATOR", "SUFFER WELL", "PRECIOUS"],
    soundsOfTheUniverse: ["HOLE TO FEED", "WRONG", "FRAGILE TENSION", "MILES AWAY / THE TRUTH IS"],
    deltaMachine: ["WELCOME TO MY WORLD", "ANGEL", "SOOTHE MY SOUL", "SHOULD BE HIGHER"],
    spirit: ["GOING BACKWARDS", "WHERE'S THE REVOLUTION", "COVER ME", "NO MORE (THIS IS THE LAST TIME)"]
};

var wins = 0;
var losses = 0;
var mySound;
var picked = "";
var prevPicked;
var prevPickedArray = [];
var dashes = [];
var totalWords = words["speakAndSpell"].length + words["aBrokenFrame"].length + words["constructionTimeAgain"].length 
+ words["someGreatReward"].length + words["blackCelebration"].length + words["musicForTheMasses"].length + words["violator"].length 
+ words["songsOfFaithAndDevotion"].length + words["ultra"].length + words["exciter"].length + words["playingTheAngel"].length
+ words["soundsOfTheUniverse"].length + words["deltaMachine"].length + words["spirit"].length;

init();

function init() {
    if (prevPickedArray.length >= totalWords) {
        prevPickedArray = [];
    }
    var game = true;
    var guesses = 10;
    var wordArray = [];
    var random;
    reset();
    random = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
    picked = words[random][Math.floor(Math.random() * words[random].length)];
    if (prevPicked === picked || prevPickedArray.indexOf(picked) > -1) {
        while (prevPicked === picked || prevPickedArray.indexOf(picked) > -1) {
            random = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];
            picked = words[random][Math.floor(Math.random() * words[random].length)];
        }
    }
    for (var i = 0; i < picked.length; i++) {
        var x = picked.charAt(i);
        wordArray.push(picked[i]);
        if (x === " " || x === "'" || x === "!" || x === "," || x === "/" || x === "(" || x === ")") {
            dashes.push(x);
        } else {
            dashes.push("-");
        }
    }
    prevPickedArray.push(picked);
    prevPicked = picked;
    document.getElementById("guessesLeft").innerHTML = guesses;   
    document.getElementById("word").innerHTML = dashes.join("");
    console.log(picked);
    switch (random) {
        case "speakAndSpell": 
            document.getElementById("hint").innerHTML = "Speak and Spell";
            document.getElementById("backgroundImg").style.background = "url('assets/images/SpeakAndSpell.jpg')";
            break;
        case "aBrokenFrame":
            document.getElementById("hint").innerHTML = "A Broken Frame";
            document.getElementById("backgroundImg").style.background = "url('assets/images/ABrokenFrame.jpg')";
            break;
        case "constructionTimeAgain":
            document.getElementById("hint").innerHTML = "Construction Time Again";
            document.getElementById("backgroundImg").style.background = "url('assets/images/ConstructionTimeAgain.png')";
            break;
        case "someGreatReward":
            document.getElementById("hint").innerHTML = "Some Great Reward";
            document.getElementById("backgroundImg").style.background = "url('assets/images/SomeGreatReward.png')";
            break;
        case "blackCelebration":
            document.getElementById("hint").innerHTML = "Black Celebration";
            document.getElementById("backgroundImg").style.background = "url('assets/images/BlackCelebration.png')";
            break;
        case "musicForTheMasses":
            document.getElementById("hint").innerHTML = "Music for the Masses";
            document.getElementById("backgroundImg").style.background = "url('assets/images/MFTM.png')";
            break;
        case "violator":
            document.getElementById("hint").innerHTML = "Violator";
            document.getElementById("backgroundImg").style.background = "url('assets/images/Violator.png')";
            break;
        case "songsOfFaithAndDevotion":
            document.getElementById("hint").innerHTML = "Songs of Faith and Devotion";
            document.getElementById("backgroundImg").style.background = "url('assets/images/SOFAD.png')";
            break;
        case "ultra":
            document.getElementById("hint").innerHTML = "Ultra";
            document.getElementById("backgroundImg").style.background = "url('assets/images/Ultra.png')";
            break;
        case "exciter":
            document.getElementById("hint").innerHTML = "Exciter";
            document.getElementById("backgroundImg").style.background = "url('assets/images/Exciter.png')";
            break;
        case "playingTheAngel":
            document.getElementById("hint").innerHTML = "Playing the Angel";
            document.getElementById("backgroundImg").style.background = "url('assets/images/PTA.png')";
            break;
        case "soundsOfTheUniverse":
            document.getElementById("hint").innerHTML = "Sounds of the Universe";
            document.getElementById("backgroundImg").style.background = "url('assets/images/SOTU.png')";
            break;
        case "deltaMachine":
            document.getElementById("hint").innerHTML = "Delta Machine";
            document.getElementById("backgroundImg").style.background = "url('assets/images/DeltaMachine.png')";
            break;
        case "spirit":    
            document.getElementById("hint").innerHTML = "Spirit";
            document.getElementById("backgroundImg").style.background = "url('assets/images/Spirit.png')";
            break;
        default:
            document.getElementById("hint").innerHTML = "Depeche Mode Song";
            document.getElementById("backgroundImg").style.background = "url('assets/images/DMlogo.jpg')";
        
    }
    
    document.onkeyup = function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90 && game === true) {
            var key = event.key.toUpperCase();
            for (var i = 0; i < wordArray.length; i++) {
                if (wordArray[i] === key && game === true) {
                    dashes[i] = key;
                    document.getElementById("word").innerHTML = dashes.join("");
                    if (dashes.indexOf("-") === -1 && game === true) {
                        gameOverWin();
                        game = false;
                    }
                }
            }
            if (wordArray.indexOf(key) === -1 && game === true) {
                var playerGuesses = document.getElementById("lettersGuessed").innerText;
                if (playerGuesses.indexOf(key) === -1) {
                    document.getElementById("lettersGuessed").innerText += key;
                    if (guesses > 0) {
                        guesses--;
                        document.getElementById("guessesLeft").innerHTML = guesses;
                        switch (guesses) {
                            case 9: 
                                failure1();
                                break;
                            case 8: 
                                failure2();
                                break;
                            case 7: 
                                failure3();
                                break;
                            case 6: 
                                failure4();
                                break;
                            case 5: 
                                failure5();
                                break;
                            case 4: 
                                failure6();
                                break;
                            case 3: 
                                failure7();
                                break;
                            case 2: 
                                failure8();
                                break;
                            case 1: 
                                failure9();
                                break;
                            case 0:
                                failure10();
                                gameOverLoss();
                                game = false;
                        }
                    }
                }
            }
        }    
    }
}

function playSong() {
    switch (picked) {
        case "NEW LIFE":
            mySound = new Audio("assets/sound/newLife.mp3");
            break;
        case "PUPPETS":
            mySound = new Audio("assets/sound/puppets.mp3");
            break;
        case "JUST CAN'T GET ENOUGH":
            mySound = new Audio("assets/sound/justCantGetEnough.mp3");
            break;
        case "TORA! TORA! TORA!":
            mySound = new Audio("assets/sound/toraToraTora.mp3");
            break;   
        case "LEAVE IN SILENCE":
            mySound = new Audio("assets/sound/leaveInSilence.mp3");
            break;    
        case "SEE YOU":
            mySound = new Audio("assets/sound/seeYou.mp3");
            break;
        case "THE SUN AND THE RAINFALL":
            mySound = new Audio("assets/sound/theSunAndTheRainfall.mp3");
            break;
        case "MY SECRET GARDEN":
            mySound = new Audio("assets/sound/mySecretGarden.mp3");
            break;   
        case "PIPELINE":
            mySound = new Audio("assets/sound/pipeline.mp3");
            break;
        case "EVERYTHING COUNTS":
            mySound = new Audio("assets/sound/everythingCounts.mp3");
            break;
        case "TWO MINUTE WARNING":
            mySound = new Audio("assets/sound/twoMinuteWarning.mp3");
            break;
        case "LOVE, IN ITSELF":
            mySound = new Audio("assets/sound/loveInItself.mp3");
            break;   
        case "PEOPLE ARE PEOPLE":
            mySound = new Audio("assets/sound/peopleArePeople.mp3");
            break;
        case "MASTER AND SERVANT":
            mySound = new Audio("assets/sound/masterAndServant.mp3");
            break;
        case "BLASPHEMOUS RUMOURS":
            mySound = new Audio("assets/sound/blasphemousRumours.mp3");
            break;
        case "SOMETHING TO DO":
            mySound = new Audio("assets/sound/somethingToDo.mp3");
            break;   
        case "BLACK CELEBRATION":
            mySound = new Audio("assets/sound/blackCelebration.mp3");
            break;
        case "A QUESTION OF TIME":
            mySound = new Audio("assets/sound/aQuestionOfTime.mp3");
            break;
        case "STRIPPED":
            mySound = new Audio("assets/sound/stripped.mp3");
            break;
        case "HERE IS THE HOUSE":
            mySound = new Audio("assets/sound/hereIsTheHouse.mp3");
            break;   
        case "NEVER LET ME DOWN AGAIN":
            mySound = new Audio("assets/sound/neverLetMeDownAgain.mp3");
            break;
        case "STRANGELOVE":
            mySound = new Audio("assets/sound/strangelove.mp3");
            break;
        case "BEHIND THE WHEEL":
            mySound = new Audio("assets/sound/behindTheWheel.mp3");
            break;
        case "SACRED":
            mySound = new Audio("assets/sound/sacred.mp3");
            break;   
        case "WORLD IN MY EYES":
            mySound = new Audio("assets/sound/worldInMyEyes.mp3");
            break;
        case "PERSONAL JESUS":
            mySound = new Audio("assets/sound/personalJesus.mp3");
            break;
        case "ENJOY THE SILENCE":
            mySound = new Audio("assets/sound/enjoyTheSilence.mp3");
            break;
        case "SWEETEST PERFECTION":
            mySound = new Audio("assets/sound/theSweetestPerfection.mp3");
            break;   
        case "I FEEL YOU":
            mySound = new Audio("assets/sound/iFeelYou.mp3");
            break;
        case "WALKING IN MY SHOES":
            mySound = new Audio("assets/sound/walkingInMyShoes.mp3");
            break;
        case "ONE CARESS":
            mySound = new Audio("assets/sound/oneCaress.mp3");
            break;
        case "IN YOUR ROOM":
            mySound = new Audio("assets/sound/inYourRoom.mp3");
            break;   
        case "BARREL OF A GUN":
            mySound = new Audio("assets/sound/barrelOfAGun.mp3");
            break;
        case "IT'S NO GOOD":
            mySound = new Audio("assets/sound/itsNoGood.mp3");
            break;
        case "ONLY WHEN I LOSE MYSELF":
            mySound = new Audio("assets/sound/onlyWhenILoseMyself.mp3");
            break;
        case "USELESS":
            mySound = new Audio("assets/sound/useless.mp3");
            break;   
        case "DREAM ON":
            mySound = new Audio("assets/sound/dreamOn.mp3");
            break;
        case "WHEN THE BODY SPEAKS":
            mySound = new Audio("assets/sound/whenTheBodySpeaks.mp3");
            break;
        case "I FEEL LOVED":
            mySound = new Audio("assets/sound/iFeelLoved.mp3");
            break;
        case "FREELOVE":
            mySound = new Audio("assets/sound/freelove.mp3");
            break;   
        case "A PAIN THAT I'M USED TO":
            mySound = new Audio("assets/sound/aPainThatImUsedTo.mp3");
            break;
        case "JOHN THE REVELATOR":
            mySound = new Audio("assets/sound/johnTheRevelator.mp3");
            break;
        case "SUFFER WELL":
            mySound = new Audio("assets/sound/sufferWell.mp3");
            break;
        case "PRECIOUS":
            mySound = new Audio("assets/sound/precious.mp3");
            break;   
        case "HOLE TO FEED":
            mySound = new Audio("assets/sound/holeToFeed.mp3");
            break;
        case "WRONG":
            mySound = new Audio("assets/sound/wrong.mp3");
            break;
        case "FRAGILE TENSION":
            mySound = new Audio("assets/sound/fragileTension.mp3");
            break;
        case "MILES AWAY / THE TRUTH IS":
            mySound = new Audio("assets/sound/milesAway.mp3");
            break;   
        case "WELCOME TO MY WORLD":
            mySound = new Audio("assets/sound/welcomeToMyWorld.mp3");
            break;
        case "ANGEL":
            mySound = new Audio("assets/sound/angel.mp3");
            break;
        case "SOOTHE MY SOUL":
            mySound = new Audio("assets/sound/sootheMySoul.mp3");
            break;
        case "SHOULD BE HIGHER":
            mySound = new Audio("assets/sound/shouldBeHigher.mp3");
            break;   
        case "GOING BACKWARDS":
            mySound = new Audio("assets/sound/goingBackwards.mp3");
            break;
        case "WHERE'S THE REVOLUTION":
            mySound = new Audio("assets/sound/wheresTheRevolution.mp3");
            break;
        case "COVER ME":
            mySound = new Audio("assets/sound/coverMe.mp3");
            break;
        case "NO MORE (THIS IS THE LAST TIME)":
            mySound = new Audio("assets/sound/noMore.mp3");
            break;   
    }
    mySound.play();
}

function gameOverWin() {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    game = false;
    playSong();
    startNewGame();
    } 

function gameOverLoss() {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    for (var o = 0; o < picked.length; o++) {
            if (dashes[o] === "-") {
            dashes[o] = "<li style='color:#808080'>" + picked.charAt(o) + "</li>";
        } else {
            dashes[o] = "<li style='color:#222'>" + picked.charAt(o) + "</li>";
        }
    }
    document.getElementById("word").innerHTML = dashes.join("");
    game = false;
    playSong();
    startNewGame();
}

function reset() {
    document.getElementById("lettersGuessed").innerHTML = "";
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("word").style.color = "#222";
    ctx.clearRect(0,0,500,750);
    game = true;
    random = undefined;
    picked = "";
    dashes = [];
}

function startNewGame() {
    document.getElementById("newGameButton").style.display = "block";
    document.getElementById("newGameButton").addEventListener("click", init);
    document.getElementById("newGameButton").addEventListener("click", stopSound);    
}

function stopSound() {
    mySound.pause();
}
