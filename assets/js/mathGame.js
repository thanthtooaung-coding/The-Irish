const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");    
const errorMessage = document.getElementById("error");
let score = 0;
scoreEl.innerText = `Score : ${score}`;    
function generateQuestion(){
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ceil2
    const num1 = Math.ceil(Math.random() * 12);
    const num2 = Math.ceil(Math.random() * 12);
    const num3 = Math.ceil(Math.random() * 1000);
    const num4 = Math.ceil(Math.random() * 1000);
    const operation = Math.ceil(Math.random() * 5);
    let question;
    let correctAnswer;                
    if(operation === 1){
        question = `What is ${num3} + ${num4}?`;
        correctAnswer = num3 + num4;
    }else if(operation === 2){
        question = `What is ${num3} - ${num4}?`;
        correctAnswer = num3 - num4;
    }else if(operation === 3){
        question = `What is ${num1} x ${num2}?`;
        correctAnswer = num1 * num2;
    }else if(operation === 4){
        question = `What is ${num1} ^ ${num2}?`;
        correctAnswer = Math.pow(num1, num2);
    }else{
        question = `What is ${num1} % ${num2}?`;
        correctAnswer = num1 % num2;
    }
    //questionEl.innerText = question;
    var i = 0;
    var txt = question;
    var speed = 50;
    var j = i + 1;
    var k = j + 1;
    var l = k + 1;                
    function typeWriter() {
        if (i < txt.length) {
            //if (txt.charAt(i)+txt.charAt(i + 1) === "is") {
                //  document.getElementById("question").textContent += " i";
            //}else{
                //document.getElementById("question").textContent += txt.charAt(i);
            //}
            document.getElementById("question").textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }                
    questionEl.innerText = "";
    typeWriter();
    return correctAnswer;
}            
let correctAns = generateQuestion();                            
function checkAnswer(e){
    e.preventDefault();
    const userAns = parseInt(inputEl.value);    
    if (isNaN(userAns)) {
        errorMessage.innerText = "Error: Input must be a number.";
        inputEl.value = "";
        return;
    }               
    if(userAns === correctAns){
        errorMessage.innerText = "";
        score++;
        correctAns = generateQuestion();
        if (score === 10){
            win();
        }
    }else{                                        
        if (score !== 0){                        
            errorMessage.innerText = "";
            score--;
            correctAns = generateQuestion();
        }else{                            
            lose();
            correctAns = generateQuestion();
        }
    }                                
    scoreEl.innerText = `Score : ${score}`;
    //correctAns = generateQuestion();
    inputEl.value = "";
    errorMessage.innerText = "";
}
function reset(){
    score = 0;
    scoreEl.innerText = `Score : ${score}`;
    //correctAns = generateQuestion();
    inputEl.value = "";                
}    
function lose(){
    alert("Oops! You lost. Score reset to 0.");                
    reset();
}
function win(){                
    alert("Congratulations! You won the game!");
    reset();
}
formEl.addEventListener("submit", checkAnswer);