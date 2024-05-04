var answer = "";
var skip = 0;
var maxSkip = 5;
var win = 0;
var maxWin = 5;         
var Animal_A = [
    { AnimalName: "Ant", image: "Animal/Ant.jfif" }
];

var Animal_B = [
    { AnimalName: "Baboon", image: "Animal/Baboon.jfif" },
    { AnimalName: "Bear", image: "Animal/Bear.jfif" },
    { AnimalName: "Buffalo", image: "Animal/Buffalo.jfif" }
];

var Animal_C = [
    { AnimalName: "Cheetah", image: "Animal/Cheetah.jfif" },
    { AnimalName: "Cow", image: "Animal/Cow.jfif" }
];

var Animal_D = [
    { AnimalName: "Deer", image: "Animal/Deer.png" },
    { AnimalName: "Dolphin", image: "Animal/Dolphin.png" },        
    { AnimalName: "Donkey", image: "Animal/Donkey.jfif" },
    { AnimalName: "Dog", image: "Animal/Dog.jfif" }
];


var Animal_E = [
    { AnimalName: "Eagle", image: "Animal/Eagle.jfif" },
    { AnimalName: "Elephant", image: "Animal/Elephant.jpg" }
];
var Animal_F = [
    { AnimalName: "Fox", image: "Animal/Fox.jfif" },
    { AnimalName: "Frog", image: "Animal/Frog.jfif" }
];


var Animal_G = [
    { AnimalName: "Giraffe", image: "Animal/Giraffe.jfif" }
];

var Animal_H = [
    { AnimalName: "Hawk", image: "Animal/Hawk.jfif" },
    { AnimalName: "Hippopotamus", image: "Animal/Hippopotamus.jfif" },
    { AnimalName: "Heron", image: "Animal/Heron.jfif" },            
    { AnimalName: "Horse", image: "Animal/Horse.jfif" }
];


var Animal_I = [
    { AnimalName: "Iguana", image: "Animal/Iguana.jfif" }
];


var Animal_J = [
    { AnimalName: "Jellyfish", image: "Animal/Jellyfish.jfif" }
];


var Animal_K = [
    { AnimalName: "Kangaroo", image: "Animal/Kangaroo.png" },
    { AnimalName: "Koala", image: "Animal/Koala.jfif" }                        
];


var Animal_L = [            
    { AnimalName: "Leopard", image: "Animal/Leopard.jfif" },
    { AnimalName: "Lion", image: "Animal/Lion.jfif" },                        
    { AnimalName: "Llama", image: "Animal/Llama.jfif" }
];


var Animal_M = [
    { AnimalName: "Monkey", image: "Animal/Monkey.jfif" },
    { AnimalName: "Moose", image: "Animal/Moose.jfif" },
    { AnimalName: "Mongoose", image: "Animal/Mongoose.jfif" },
    { AnimalName: "Mouse", image: "Animal/Mouse.jfif" },
    { AnimalName: "Mosquito", image: "Animal/Mosquito.jfif" },
    { AnimalName: "Mule", image: "Animal/Donkey.jfif" },      
    { AnimalName: "Myna", image: "Animal/Myna.jfif" }                 
];


var Animal_N = [
    { AnimalName: "Nightingale", image: "Animal/Nightingale.jfif" }
];


var Animal_O = [
    { AnimalName: "Octopus", image: "Animal/Octopus.jfif" }
];


var Animal_P = [
    { AnimalName: "Panda", image: "Animal/Panda.jfif" },
    { AnimalName: "Peacock", image: "Animal/Peacock.jfif" },
    { AnimalName: "Polar Bear", image: "Animal/Polar Bear.jfif" }
];


var Animal_Q = [
    { AnimalName: "Quokka", image: "Animal/Quokka.jfif" }
];


var Animal_R = [
    { AnimalName: "Raccoon", image: "Animal/Raccoon.jfif" }
];


var Animal_S = [
    { AnimalName: "Snake", image: "Animal/Snake.jfif" }
];

var Animal_T = [
    { AnimalName: "Tiger", image: "Animal/Tiger.jfif" },
    { AnimalName: "Turtle", image: "Animal/Turtle.jfif" }
];


var Animal_U = [
    { AnimalName: "Unicorn", image: "Animal/Unicorn.jpg" }
];


var Animal_V = [
    { AnimalName: "Vinegaroon", image: "Animal/Vinegaroon.jfif" }
];


var Animal_W = [
    { AnimalName: "Whale", image: "Animal/Whale.jfif" }
];


var Animal_X = [
    { AnimalName: "X-ray Fish", image: "Animal/X-ray Fish.jfif" }
];


var Animal_Y = [
    { AnimalName: "Yak", image: "Animal/Yak.jfif" }
];


var Animal_Z = [
    { AnimalName: "Zebra", image: "Animal/Zebra.jfif" }
];

function startGame() {                        
    var A_to_Z_answer = Math.ceil(Math.random() * 26);
    if (A_to_Z_answer === 1) {
        randomLetter ="A";
    } else if (A_to_Z_answer === 2) {
        randomLetter ="B";
    } else if (A_to_Z_answer === 3) {
        randomLetter ="C";
    } else if (A_to_Z_answer === 4) {
        randomLetter ="D";
    } else if (A_to_Z_answer === 5) {
        randomLetter ="E";
    } else if (A_to_Z_answer === 6) {
        randomLetter ="F";
    } else if (A_to_Z_answer === 7) {
        randomLetter ="G";
    } else if (A_to_Z_answer === 8) {
        randomLetter ="H";
    } else if (A_to_Z_answer === 9) {
        randomLetter ="I";
    } else if (A_to_Z_answer === 10) {
        randomLetter ="J";
    } else if (A_to_Z_answer === 11){
        randomLetter ="K";
    } else if (A_to_Z_answer === 12) {
        randomLetter ="L";
    } else if (A_to_Z_answer === 13) {
        randomLetter ="M";
    } else if (A_to_Z_answer === 14) {
        randomLetter ="N";
    } else if (A_to_Z_answer === 15) {
        randomLetter ="O";
    } else if (A_to_Z_answer === 16) {
        randomLetter ="P";
    } else if (A_to_Z_answer === 17) {
        randomLetter ="Q";
    } else if (A_to_Z_answer === 18) {
        randomLetter ="R";
    } else if (A_to_Z_answer === 19) {
        randomLetter ="S";
    } else if (A_to_Z_answer === 20) {
        randomLetter ="T";
    } else if (A_to_Z_answer === 21) {
        randomLetter ="U";
    } else if (A_to_Z_answer === 22) {
        randomLetter ="V";
    } else if (A_to_Z_answer === 23) {
        randomLetter ="W";
    } else if (A_to_Z_answer === 24) {
        randomLetter ="X";
    } else if (A_to_Z_answer === 25) {
        randomLetter ="Y";
    } else {
        randomLetter ="Z";            
    }
    var Animal_;
    if (randomLetter === "A") {
        Animal_ = Animal_A;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'A'.";
    } else if (randomLetter === "B") {
        Animal_ = Animal_B;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'B'.";
    } else if (randomLetter === "C") {
        Animal_ = Animal_C;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'C'.";
    } else if (randomLetter === "D") {
        Animal_ = Animal_D;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'D'.";
    } else if (randomLetter === "E") {
        Animal_ = Animal_E;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'E'.";
    } else if (randomLetter === "F") {
        Animal_ = Animal_F;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'F'.";
    } else if (randomLetter === "G") {
        Animal_ = Animal_G;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'G'.";
    } else if (randomLetter === "H") {
        Animal_ = Animal_H;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'H'.";
    } else if (randomLetter === "I") {
        Animal_ = Animal_I;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'I'.";
    } else if (randomLetter === "J") {
        Animal_ = Animal_J;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'J'.";
    } else if (randomLetter === "K") {
        Animal_ = Animal_K;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'K'.";
    } else if (randomLetter === "L") {
        Animal_ = Animal_L;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'L'.";
    } else if (randomLetter === "M") {
        Animal_ = Animal_M;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'M'.";
    } else if (randomLetter === "N") {
        Animal_ = Animal_N;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'N'.";
    } else if (randomLetter === "O") {
        Animal_ = Animal_O;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'O'.";
    } else if (randomLetter === "P") {
        Animal_ = Animal_P;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'P'.";
    } else if (randomLetter === "Q") {
        Animal_ = Animal_Q;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'Q'.";
    } else if (randomLetter === "R") {
        Animal_ = Animal_R;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'R'.";
    } else if (randomLetter === "S") {
        Animal_ = Animal_S;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'S'.";
    } else if (randomLetter === "T") {
        Animal_ = Animal_T;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'T'.";
    } else if (randomLetter === "U") {
        Animal_ = Animal_U;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'U'.";
    } else if (randomLetter === "V") {
        Animal_ = Animal_V;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'V'.";
    } else if (randomLetter === "W") {
        Animal_ = Animal_W;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'W'.";
    } else if (randomLetter === "X") {
        Animal_ = Animal_X;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'X'.";
    } else if (randomLetter === "Y") {
        Animal_ = Animal_Y;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'Y'.";
    } else {
        Animal_ = Animal_Z;
        document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'Z'.";
    }                        
    var randomIndex = Math.floor(Math.random() * Animal_.length);
    answer = Animal_[randomIndex].AnimalName;
    document.getElementById("guessInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("guessButton").disabled = false;
    document.getElementById("skipButton").disabled = false;
    document.getElementById("restartDiv").style.display = "none";
    document.getElementById("nextDiv").style.display = "none";
    document.getElementById("cityImage").src = "";
    document.getElementById("cityImage").src = Animal_[randomIndex].image;            
    skip = 0;
}            
function skipGuess() {
    document.getElementById("result").textContent = "";
    skip++;
    if (skip >= maxSkip) {
        lose();
    } else {
        var randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        if (randomLetter === "A") {
            Animal_ = Animal_A;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'A'.";
        } else if (randomLetter === "B") {
            Animal_ = Animal_B;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'B'.";
        } else if (randomLetter === "C") {
            Animal_ = Animal_C;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'C'.";
        } else if (randomLetter === "D") {
            Animal_ = Animal_D;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'D'.";
        } else if (randomLetter === "E") {
            Animal_ = Animal_E;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'E'.";
        } else if (randomLetter === "F") {
            Animal_ = Animal_F;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'F'.";
        } else if (randomLetter === "G") {
            Animal_ = Animal_G;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'G'.";
        } else if (randomLetter === "H") {
            Animal_ = Animal_H;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'H'.";
        } else if (randomLetter === "I") {
            Animal_ = Animal_I;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'I'.";
        } else if (randomLetter === "J") {
            Animal_ = Animal_J;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'J'.";
        } else if (randomLetter === "K") {
            Animal_ = Animal_K;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'K'.";
        } else if (randomLetter === "L") {
            Animal_ = Animal_L;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'L'.";
        } else if (randomLetter === "M") {
            Animal_ = Animal_M;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'M'.";
        } else if (randomLetter === "N") {
            Animal_ = Animal_N;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'N'.";
        } else if (randomLetter === "O") {
            Animal_ = Animal_O;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'O'.";
        } else if (randomLetter === "P") {
            Animal_ = Animal_P;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'P'.";
        } else if (randomLetter === "Q") {
            Animal_ = Animal_Q;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'Q'.";
        } else if (randomLetter === "R") {
            Animal_ = Animal_R;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'R'.";
        } else if (randomLetter === "S") {
            Animal_ = Animal_S;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'S'.";
        } else if (randomLetter === "T") {
            Animal_ = Animal_T;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'T'.";
        } else if (randomLetter === "U") {
            Animal_ = Animal_U;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'U'.";
        } else if (randomLetter === "V") {
            Animal_ = Animal_V;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'V'.";
        } else if (randomLetter === "W") {
            Animal_ = Animal_W;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'W'.";
        } else if (randomLetter === "X") {
            Animal_ = Animal_X;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'X'.";
        } else if (randomLetter === "Y") {
            Animal_ = Animal_Y;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'Y'.";
        } else {
            Animal_ = Animal_Z;
            document.getElementById("gamePrompt").textContent = "Guess an animal that starts with the letter 'Z'.";
        }                        
        var randomIndex = Math.floor(Math.random() * Animal_.length);
        answer = Animal_[randomIndex].AnimalName;
        document.getElementById("cityImage").src = Animal_[randomIndex].image;
        var guessInput = document.getElementById("guessInput");
        guessInput.value = "";
    }
}                
function checkGuess() {
    var guessInput = document.getElementById("guessInput").value.trim();
    var result = document.getElementById("result");    
    if (guessInput === "") {                
        result.textContent = "Please enter an animal name.";                
        return;
    }    
    if (guessInput.toLowerCase() === answer.toLowerCase()) {                      
        win++;                        
        if(win <= 4){
            alert("Correct! You guessed the animal.");          
        }
        
        if (win >= maxWin) {
            result.textContent = "Congratulations! You've won the game. Starting again.";
            win = 0;                    
            document.getElementById("restartDiv").style.display = "block";
        } else {                                                                 
            nextAnimal();
        }                                       
    } else {                
        result.textContent = "Wrong guess! Try again.";
    }    
    document.getElementById("guessInput").value = "";
}                                      
function nextAnimal() {
    document.getElementById("guessInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("nextDiv").style.display = "none";
    startGame();
}
function lose() {
    var result = document.getElementById("result");
    result.textContent = "Oops! You've reached the maximum number of attempts. Game over.";
    document.getElementById("guessButton").disabled = true;
    document.getElementById("skipButton").disabled = true;
    document.getElementById("restartDiv").style.display = "block";
}
document.getElementById("guessButton").addEventListener("click", checkGuess);
document.getElementById("restartButton").addEventListener("click", startGame);
document.getElementById("nextButton").addEventListener("click", startGame);
document.getElementById("skipButton").addEventListener("click", skipGuess);

startGame();