var attempts = 0;
var answer = "";
var skip = 0;
var maxSkip = 5;
var win = 0;
var maxWin = 5;
// Array of city names and corresponding images
var citiesA = [
    { name: "Amarapura", image: "City/Amarapura.jpg" }
];
var citiesB = [
    { name: "Bagan", image: "City/Bagan.jpg" },
    { name: "Bago", image: "City/Bago.jpg" },
    { name: "Bhamo", image: "City/Bhamo.jpg" },            
];
var citiesC = [            
    { name: "Chaung Thar", image: "City/Chaung Thar.jfif" }
];
var citiesD = [
    { name: "Daik U", image: "City/Daik U.jfif" },
    { name: "Danubyu", image: "City/Danubyu.jpg" },
    { name: "Dawei", image: "City/Dawei.jpg" }          
];        
var citiesH = [
    { name: "Hakha", image: "City/Hakha.jpg" },
    { name: "Hinthada", image: "City/Hinthada.jfif" },            
    { name: "Hpa An", image: "City/Hpa An.jfif" },
    { name: "Hpakant", image: "City/Hpakant.png" }                       
];
var citiesI = [
    { name: "Inn Lay", image: "City/Inn Lay.jpg" }
];
var citiesK = [
    { name: "Kalaw", image: "City/Kalaw.jpg" },
    { name: "Kawthoung", image: "City/Kawthoung.jpg" },            
    { name: "Kyaikto", image: "City/Kyaikto.jfif" },
    { name: "Kyauktan", image: "City/Kyaikto.jfif" }
];        
var citiesL = [
    { name: "Labutta", image: "City/Labutta.jfif" },
    { name: "Lashio", image: "City/Lashio.jfif" },
    { name: "Laukkaing", image: "City/Laukkaing.jfif" },            
    { name: "Loikaw", image: "City/Loikaw.jfif" }
];
var citiesM = [
    { name: "Mandalay", image: "City/Mandalay.jfif" },
    { name: "Maubin", image: "City/Maubin.jpg" },
    { name: "Mawlamyine", image: "City/Mawlamyine.jpg" },
    { name: "Meiktila", image: "City/Meiktila.jfif" },
    { name: "Monywa", image: "City/Monywa.jfif" },
    { name: "Mogoke", image: "City/Mogoke.jfif" },             
    { name: "Myawaddy", image: "City/Myawaddy.jfif" },
    { name: "Myeik", image: "City/Myeik.jfif" },
    { name: "Myitkyina", image: "City/Myitkyina.jfif" }
];
var citiesP = [                        
    { name: "Pathein", image: "City/Pathein.jfif" },                        
    { name: "Pyin Oo Lwin", image: "City/Pyin Oo Lwin.jfif" }            
];
var citiesS = [
    { name: "Sagaing", image: "City/Sagaing.jfif" },            
    { name: "Shwebo", image: "City/Shwebo.jfif" }            
];
var citiesT = [
    { name: "Tachileik", image: "City/Tachileik.jfif" },
    { name: "Tamu", image: "City/Tamu.jfif" },
    { name: "Taunggyi", image: "City/Taunggyi.jfif" },
    { name: "Thaton", image: "City/Thaton.jfif" },            
    { name: "Twantay", image: "City/Twantay.jpg" }
];                
var citiesY = [            
    { name: "Yangon", image: "City/Yangon.jfif" },                                                
];
var citiesZ = [
    { name: "Zalun", image: "City/Zalun.jpg" }            
];        

function startGame() {
    //var randomLetter = Math.random() < 0.5 ? "L" : "K"; // Randomly choose "L" or "K"
    var L_or_K_answer = Math.floor(Math.random() * 26) + 1;
    if (L_or_K_answer === 1) {
        randomLetter ="A";
    } else if (L_or_K_answer === 2) {
        randomLetter ="B";
    } else if (L_or_K_answer === 3) {
        randomLetter ="C";
    } else if (L_or_K_answer === 4) {
        randomLetter ="D";
    } else if (L_or_K_answer === 8) {
        randomLetter ="H";
    } else if (L_or_K_answer === 9) {
        randomLetter ="I";
    } else if (L_or_K_answer === 11){
        randomLetter ="K";
    } else if (L_or_K_answer === 12) {
        randomLetter ="L";
    } else if (L_or_K_answer === 13) {
        randomLetter ="M";
    } else if (L_or_K_answer === 16) {
        randomLetter ="P";
    } else if (L_or_K_answer === 19) {
        randomLetter ="S";
    } else if (L_or_K_answer === 20) {
        randomLetter ="T";
    } else if (L_or_K_answer === 25) {
        randomLetter ="Y";
    } else if (L_or_K_answer === 26) {
        randomLetter ="Z";            
    }
    var cities;
    if (randomLetter === "A") {
        cities = citiesA;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'A'.";
    } else if (randomLetter === "B") {
        cities = citiesB;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'B'.";
    } else if (randomLetter === "C") {
        cities = citiesC;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'C'.";
    } else if (randomLetter === "D") {
        cities = citiesD;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'D'.";
    } else if (randomLetter === "H") {
        cities = citiesH;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'H'.";
    } else if (randomLetter === "I") {
        cities = citiesI;
        document.getElementById("gamePrompt").textContent = "Guess a lake in Myanmar that starts with the letter 'I'.";
    } else if (randomLetter === "K") {
        cities = citiesK;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'K'.";
    } else if (randomLetter === "L") {
        cities = citiesL;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'L'.";
    } else if (randomLetter === "M") {
        cities = citiesM;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'M'.";
    } else if (randomLetter === "P") {
        cities = citiesP;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'P'.";
    } else if (randomLetter === "S") {
        cities = citiesS;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'S'.";
    } else if (randomLetter === "T") {
        cities = citiesT;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'T'.";
    } else if (randomLetter === "Y") {
        cities = citiesY;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'Y'.";
    } else if (randomLetter === "Z") {
        cities = citiesZ;
        document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'Z'.";
    }            
    
    var randomIndex = Math.floor(Math.random() * cities.length);
    answer = cities[randomIndex].name;
    document.getElementById("guessInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("guessButton").disabled = false;
    document.getElementById("skipButton").disabled = false;
    document.getElementById("restartDiv").style.display = "none";
    document.getElementById("nextDiv").style.display = "none";
    document.getElementById("cityImage").src = "";
    document.getElementById("cityImage").src = cities[randomIndex].image;
    attempts = 0;
    skip = 0;
}            
function skipGuess() {
    skip++;
    if (skip >= maxSkip) {
        lose();
    } else {
        var randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        if (randomLetter === "A") {
            cities = citiesA;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'A'.";
        } else if (randomLetter === "B") {
            cities = citiesB;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'B'.";
        } else if (randomLetter === "C") {
            cities = citiesC;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'C'.";
        } else if (randomLetter === "D") {
            cities = citiesD;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'D'.";
        } else if (randomLetter === "H") {
            cities = citiesH;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'H'.";
        } else if (randomLetter === "I") {
            cities = citiesI;
            document.getElementById("gamePrompt").textContent = "Guess a lake in Myanmar that starts with the letter 'I'.";
        } else if (randomLetter === "K") {
            cities = citiesK;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'K'.";
        } else if (randomLetter === "L") {
            cities = citiesL;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'L'.";
        } else if (randomLetter === "M") {
            cities = citiesM;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'M'.";
        } else if (randomLetter === "P") {
            cities = citiesP;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'P'.";
        } else if (randomLetter === "S") {
            cities = citiesS;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'S'.";
        } else if (randomLetter === "T") {
            cities = citiesT;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'T'.";
        } else if (randomLetter === "W") {
            cities = citiesW;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'W'.";
        } else if (randomLetter === "Y") {
            cities = citiesY;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'Y'.";
        } else if (randomLetter === "Z") {
            cities = citiesZ;
            document.getElementById("gamePrompt").textContent = "Guess a city in Myanmar that starts with the letter 'Z'.";
        }            

        var randomIndex = Math.floor(Math.random() * cities.length);
        answer = cities[randomIndex].name;
        document.getElementById("cityImage").src = cities[randomIndex].image;
    }
}

function checkGuess() {
    var guessInput = document.getElementById("guessInput").value.trim();
    var result = document.getElementById("result");    
    if (guessInput === "") {                
        result.textContent = "Please enter a city name.";
        return;
    }

    if (guessInput.toLowerCase() === answer.toLowerCase()) {
        attempts++;   
        
        win++;        
        if (win >= maxWin) {
            result.textContent = `Congratulations! You won ${maxWin} times. Starting again.`;
            win = 0;
            document.getElementById("guessButton").disabled = true;
            document.getElementById("restartDiv").style.display = "block";
        } else {
            result.textContent = `Congratulations! Your guess is correct in ${attempts} attempts. Guess another city.`;
            document.getElementById("guessButton").disabled = true;
            document.getElementById("nextDiv").style.display = "block";
        }       
        //result.textContent = `Congratulations! Your guess is correct in ${attempts} attempts.`;
        
    } else {
        attempts++;
        result.textContent = "Sorry, your guess is incorrect. Try again.";
    }

    document.getElementById("guessInput").value = "";
}

                        
function lose() {
    var result = document.getElementById("result");
    result.textContent = "You have skipped too many times. You lose!";
    document.getElementById("guessButton").disabled = true;
    document.getElementById("skipButton").disabled = true;
    document.getElementById("restartDiv").style.display = "block";
}
document.getElementById("guessButton").addEventListener("click", checkGuess);
document.getElementById("restartButton").addEventListener("click", startGame);
document.getElementById("nextButton").addEventListener("click", startGame);
document.getElementById("skipButton").addEventListener("click", skipGuess);

startGame();