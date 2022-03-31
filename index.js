let secretWords = ["ابادان" , "خوزستان" , "پورشه" , "راضیه" , "جاوااسکریپت", "سیگار", "پشمالو", "بسکتبال"];
// let underLines = document.querySelector("#clue p");
let buttons = document.getElementById("letters");

let randomWords = "";

let nullArray = [];
let result = "";

let mistake = 0;

function selectRandomItems(){
    randomWords = secretWords[Math.floor(Math.random() * secretWords.length)];
    buttons.addEventListener("click" , clickHandeler)
    window.addEventListener("keydown" , keyHandeler)
    console.log(randomWords) 
}

function updateUnderscor(){
    let splited = randomWords.split("");
    let mapWords = splited.map(items => nullArray.indexOf(items) >= 0 ? items : "_");
    result = mapWords.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`    
}

function checkIfwin(){
    if(randomWords === result){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src = "winner.png"
    }
}


function checkIfLost(){
    if(mistake === 6){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `کلمه : ${randomWords}`       
        document.getElementById("clue").style.fontSize = "65px"       
    }
}

function UpdatePictiors(){
    const image = document.getElementById("image").querySelector("img");
    image.src = `hangman${mistake}.png`
}


function LatterHandeler(letter){
    letter = letter.toLowerCase();
    nullArray.indexOf(letter) === -1 ? nullArray.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if(randomWords.indexOf(letter) >= 0) {
        updateUnderscor();
        checkIfwin()
    }else if(randomWords.indexOf(letter) === -1) {
        mistake++;
        checkIfLost();
        UpdatePictiors();
    }
}







function clickHandeler(e){
    LatterHandeler(e.target.id);
}

function keyHandeler(event){
    LatterHandeler(event.key);
}

selectRandomItems();
updateUnderscor();























