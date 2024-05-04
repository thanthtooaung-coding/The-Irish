var score=0;
var game = document.getElementById('game');    
var vdo=document.getElementById('vdo');
var p=document.getElementById('p');
var lo=document.getElementById('lo');
var timer = document.querySelector(".timer");
var time = 0;
var timerID;
var gameStarted = false;
function phone() {            
    /*game.style.width = '600px';
    game.style.height = '398px';            
    block.style.left = '380px';           
    block.style.height = '30px';
    block.style.top = '257px';
    character.style.height = '70px';
    character.style.width = '80px';
    character.style.top = '280px';
    //document.getElementById("jumpButton").style.display = "block";                          
    vdo.style.display = "none";*/
    if (!block.classList.contains("phoneStart")) {
        block.classList.add("phoneStart");
    }
    animateCoins();
    start();
}                    
function laptop(){/*
    game.style.width = '1300px';
    game.style.height = '438px';            
    block.style.left = '1280px';
    block.style.top = '237px';
    block.style.height = '60px';
    character.style.height = '100px';
    character.style.width = '100px';
    character.style.top = '300px';
    //document.getElementById("jumpButton").style.display = "none";                                 
    //vdo.style.display = "block"; // Add this line to hide the div with id "vd"*/
    if (!block.classList.contains("laptopStart")) {
        block.classList.add("laptopStart");
    }
    animateCoins();
    start();
}                    
var character=document.getElementById('c');
var block=document.getElementById('block');
function jump(){
    if(character.classList != "animate"){
        var howToJump=CheckPhoneOrLaptop();
        if(howToJump === "phone"){
            character.classList.add('animate');//Like Card Game, add animate class in character <div>
            
        }else if(howToJump === "laptop"){
            character.classList.add('Laptopanimate');//Like Card Game, add animate class in character <div>
        }
        else{
            character.classList.add('animate');//Like Card Game, add animate class in character <div>
        }
        character.classList.add('animate');//Like Card Game, add animate class in character <div>
    }            
    var delay = 500;
    setTimeout(function(){
        character.classList.remove('animate','Laptopanimate');
    },delay)//setTimeout(function(){},delay)            
}
document.addEventListener("keydown", handleKeyPress);      
        
function handleKeyPress(event) {
    // Check if the pressed key is the space bar (key code 32) and the game has started
    if (event.keyCode === 32 && gameStarted) {
        jump();
    }
}

function CheckPhoneOrLaptop() {
    var gameWidth = game.style.width;
    var blockLeft = block.style.left;
    
    if (gameWidth === '600px' && blockLeft === '380px') {
        //phone();
        return "phone";
    } else if (gameWidth === '1300px' && blockLeft === '1280px') {
        return "laptop";
        //laptop();
    }
    
    // Return a default value or handle the case where neither button has been clicked
    return "unknown";
}
var video = document.querySelector('video');


/*function getRandomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //return "rgb(" + r + ", " + g + ", " + b + ")";
    var rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    block.style.backgroundColor = rgbColor;
}
//block.style.backgroundColor = getRandomRGB();
setInterval(getRandomRGB , 2000);*/
/*function changeBlockColor() {
    var block = document.getElementById('block');
    var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    block.style.backgroundColor = randomColor;
    }
    
    setInterval(changeBlockColor, 3000);*/
    //var block = document.getElementById('block');

    /*block.addEventListener('animationstart', function() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    block.style.backgroundColor = rgbColor;
    });*/
    function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
    }
    
    function changeBlockColor() {
    var block = document.getElementById('block');
    var randomColor = getRandomColor();
    block.style.backgroundColor = randomColor;
    }
    
    
    
function start(){   
    // Create coin elements

    //aplayer.play();  
    var coins = document.getElementsByClassName('coin');

    for (var i = 0; i < coins.length; i++) {
        if (checkCollision(character, coins[i])) {
            coins[i].remove();
            score++;
            updateScore();
        }
    }
    if (!gameStarted) {                
        gameStarted = true;
        setInterval(changeBlockColor, 2000);
        setInterval(function() {
            var coins = document.getElementsByClassName('coin');

            if (coins.length === 0) {
                createCoin();
            }
        }, 1000);
        //animateCoins();
        timer.style.display = "block";
        timer.textContent = "You started in: 0:00";

        time = 0;
        
        clearInterval(timerID);
        
        timerID = setInterval(updateTime, 1000);                
        var whatIsThat=CheckPhoneOrLaptop();
        if(whatIsThat === "phone"){
            p.style.display = 'none';
            if(block.classList != "start"){
                
                block.classList.add('phoneStart');//Like Card Game, add phoneStart class in block <div>                    
                video.play();
            }                                        
        }else if(whatIsThat === "laptop"){                
            lo.style.display = 'none';
            if(block.classList != "start"){
                block.classList.add('laptopStart');//Like Card Game, add laptopStart class in block <div>                                                
                video.play();
            }
        }
        else{
            /*if(block.classList != "start"){
                block.classList.add('phoneStart');//Like Card Game, add phoneStart class in block <div>                    
                video.play();
            } */
            
            return;
        }
        
        checkLose();                                                       
    }
}
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval
/*var checkLose=setInterval(function(){
    var cTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));//cTop variable will return the value of only number integer(parseInt) "top" with (px) from character variable (#c) when it make jump functions [e.g. In this program, before jumping, the original position of #c is at top: 250px; {So, that function return 250 px before jump() occuurs.} When the jump() occurs, the position of #c reaches at top: 200px; {So, that function return 200 px everytime jump() occuurs.}]
    var bLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));//bLeft variable will return the value of only number integer(parseInt) "left" with (px) from block variable (#block) when it make block functions [e.g. In this program, block() is happening infinitly, the position of #block increases left: 580px; in every second.]            
    if(bLeft>0 && bLeft<20 && cTop>=230){
        lose();
    }
},10)//setInterval (function(){},delay)  */
function checkLose() {
    var cTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var bLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (bLeft > 0 && bLeft < 20 && cTop >= 230) {
        lose();
        return "lose";
    }
    // Call checkLose() recursively after a delay
    setTimeout(checkLose, 10);
}                

/*const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            url: 'translating_for_fun_suzume_japanese_myanmar_lyrics_suzume_no_toj.m4a',
        },
    ]
});*/
/*function lose(){
    block.classList.remove('start','phoneStart','laptopStart');//Like Card Game, add start class in block <div>                        
    alert("You Lose!!");                        
    //ap.pause();
    //ap.currentTime = 0;
    var audioPlayer = document.getElementById('aplayer');
    audioPlayer.pause();           
    //var aplayerContainer = document.getElementById('aplayer');
    //aplayerContainer.innerHTML = ''; 
    audioPlayer.seek(0);
}*/
/*var audioPlayer = document.getElementById('aplayer');
var aplayer = new APlayer({
    container: audioPlayer,
    audio: [{
        url: 'translating_for_fun_suzume_japanese_myanmar_lyrics_suzume_no_toj.m4a',
    }],
});*/
function lose() {
    video.pause();
    video.currentTime = 0;
    alert('Game Over! Your score: ' + score);  
    stopCoinAnimation();  
    score = 0;
    updateScore();                        
    clearInterval(timerID);        
    time = 0;                        
    var whatIsThat=CheckPhoneOrLaptop();
    if(whatIsThat === "phone"){
        p.style.display = 'block';        
    }else if(whatIsThat === "laptop"){ 
        lo.style.display = 'block';
    }        
    //score = 0;                
    //clearInterval(score);
    //scoreElement.textContent = "Score: 0" ;
    timer.style.display = 'none';
    timer.textContent = "You started in: 0:00";
    game.classList.remove('timer');
    character.classList.remove('animate', 'Laptopanimate');
    block.classList.remove('start', 'phoneStart', 'laptopStart');                        
    //aplayer.pause();
    //aplayer.seek(0);                                    
    
    gameStarted=false;
    //alert("You Lose!!");
    var whatIsThat=CheckPhoneOrLaptop();
    if(whatIsThat === "phone"){                
        p.style.display = 'block';
        timer.style.display="none";
    }
    
    else if(whatIsThat === "laptop"){
        lo.style.display = 'block';
        timer.style.display="none";
    }          
    for (var i = 0; i < coins.length; i++) {
        coins[i].remove();
    }  
    for (var i = 0; i < coins.length; i++) {
        coins[i].classList.remove('phoneCoin','laptopCoin');
    }
}
/*function lose() {
    // Reset the score to 0
    score = 0;
    updateScore();
    
    // Display the game over message
    alert('Game Over! Your score: ' + score);
    
    // Reset the game state
    gameStarted = false;
    clearInterval(timerID);
    time = 0;
    timer.textContent = 'You started in: 0:00';
    p.style.display = 'block';
    lo.style.display = 'none';
    vdo.style.display = 'block';
    character.style.top = '250px';
    block.style.animation = 'none';
    block.style.left = '580px';
    
    start();
    }
    */
function restart(){
    //block.style.animation = "none";
    start();
}
//https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
function updateStyles() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        game.style.width = '600px';
        game.style.height = '398px';
        block.style.left = '380px';
        block.style.height = '30px';
        block.style.top = '257px';
        character.style.height = '70px';
        character.style.width = '80px';
        character.style.top = '291px';
        document.getElementById("jumpButton").style.display = "block";
        document.getElementById("vdo").style.display = "none";
        document.getElementById("lo").style.display = "none";
        document.getElementById("p").style.display = "block";
    } else {
        game.style.width = '1300px';
        game.style.height = '438px';
        block.style.left = '1280px';
        block.style.top = '237px';
        block.style.height = '60px';
        character.style.height = '100px';
        character.style.width = '100px';
        character.style.top = '300px';
        document.getElementById("jumpButton").style.display = "none";
        document.getElementById("vdo").style.display = "block";
        document.getElementById("p").style.display = "none";        
        document.getElementById("lo").style.display = "block";        
    }
}

// Call the updateStyles function when the window is resized
window.addEventListener('resize', updateStyles);

// Call the updateStyles function initially
updateStyles();

startButton.addEventListener('click', start);
function updateTime() {
    time += 1;
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    timer.textContent = "You started in: " + minutes + ":" + seconds.toString().padStart(2, "0");
}
var score = 0;

function createCoin() {
    var coin = document.createElement('div');
    coin.classList.add('coin');
    coin.style.top='451px';
    //coin.style.left = Math.random() * 1300 + 'px';
    
    var whatIsThat=CheckPhoneOrLaptop();
    if(whatIsThat === "phone"){
        coin.style.left = Math.random() * 380 + 'px';
    } else if (whatIsThat === "laptop"){
        coin.style.left = Math.random() * 1300 + 'px';
    }
    var coins = document.getElementsByClassName("coin");
    coin.style.left = getRandomPosition() + 'px';
    game.appendChild(coin);
}
function getRandomPosition() {
    const gameWidth = game.clientWidth; // Get the width of the game container
    const coinWidth = 30; // Width of the coin element
    const maxPosition = gameWidth - coinWidth; // Calculate the maximum position within the game container
    return Math.random() * maxPosition;
}        
/*    var coinInterval = null; // Variable to store the setInterval ID for coin movement

function createCoin() {
if (coinInterval !== null) {
clearInterval(coinInterval); // Clear the previous interval if it exists
}

coinInterval = setInterval(function() {
var coins = document.getElementsByClassName('coin');
for (var i = 0; i < coins.length; i++) {
    coins[i].style.left = parseInt(coins[i].style.left) - 1 + 'px';
}
}, 10);
}*/
/*   function createCoin() {
    
    var coin = document.createElement('div');
    coin.classList.add('coin');
    //coin.style.top = Math.floor(Math.random() * 101) + 200 + 'px';
    //coin.style.top = Math.floor(Math.random() * 200) + 'px';
    coin.style.top='451px';
    document.getElementById('coins').appendChild(coin);
}*/
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
function checkCollision(character, coin) {
    var characterRect = character.getBoundingClientRect();
    var coinRect = coin.getBoundingClientRect();
    
    if (characterRect.right < coinRect.left || characterRect.left > coinRect.right || characterRect.bottom < coinRect.top || characterRect.top > coinRect.bottom) {
        // No collision
        return false;
    }
    
    // Collision occurred
    return true;
}
var scoreElement = document.getElementById("score");
function updateScore() {
var scoreElement = document.getElementById("score");
scoreElement.textContent = "Score: " + score;
if (score === 40 || time === 240) {
    win();
    }
}

// Inside the jump() function
for (var i = 0; i < coins.length; i++) {
    if (checkCollision(character, coins[i])) {
        coins[i].remove();
        score++;
        updateScore();
    }
}
function animateCoins() {
    // Get the coins elements
    var coins = document.getElementsByClassName('coin');        
    // Loop through each coin and add the animation class            
    if(coins.classList != "animate"){
        var howCoinMove=CheckPhoneOrLaptop();
        //if(gameStarted){
            if(howCoinMove === "phone" && gameStarted){
                for (var i = 0; i < coins.length; i++) {
                    coins[i].classList.add('laptopCoin');
                }
            }else if(howCoinMove === "laptop"  && gameStarted){                    
                for (var i = 0; i < coins.length; i++) {
                    coins[i].classList.add('laptopCoin');
                }
            }                
        //}                
    }            
}
function stopCoinAnimation() {
    var coins = document.getElementsByClassName('coin');
    for (var i = 0; i < coins.length; i++) {
        coins[i].classList.remove('phoneCoin','laptopCoin');
    }
}
/*function animateCoins() {
    var coinsContainer = document.getElementById('coins');
    for (var i = 0; i < 10; i++) {
        var coin = document.createElement('div');
        coin.classList.add('coin');
        coinsContainer.appendChild(coin);
    }
    }*/
function win() {
    video.pause();
    video.currentTime = 0;
    alert("You won with score " + score +"!");
    score = 0;
    updateScore();
    clearInterval(timerID);            
    time = 0;
    var whatIsThat=CheckPhoneOrLaptop();
    if(whatIsThat === "phone"){
        p.style.display = 'block';        
    }else if(whatIsThat === "laptop"){ 
        lo.style.display = 'block';
    }
    timer.style.display = 'none';
    timer.textContent = "You started in: 0:00";
    game.classList.remove('timer');
    character.classList.remove('animate', 'Laptopanimate');
    block.classList.remove('start', 'phoneStart', 'laptopStart');                           
    gameStarted=false;
    // Reset coin animations
    var coins = document.getElementsByClassName("coin");
    var whatIsThat=CheckPhoneOrLaptop();
    if(whatIsThat === "phone"){                
        p.style.display = 'block';
        timer.style.display="none";
    }
    
    else if(whatIsThat === "laptop"){
        lo.style.display = 'block';
        timer.style.display="none";
    }          
    for (var i = 0; i < coins.length; i++) {
        coins[i].remove();
    }  
    for (var i = 0; i < coins.length; i++) {
        coins[i].classList.remove('phoneCoin','laptopCoin');
    }
}