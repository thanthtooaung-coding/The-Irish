let answer;
let attempts = 0;

function startGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    document.getElementById("guessInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("guessButton").disabled = false;
    document.getElementById("restartDiv").style.display = "none";
    attempts = 0;
}

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const result = document.getElementById("result");
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "Please enter a valid number between 1 and 100.";
    } else if (guess === answer) {
        attempts++;
        result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById("guessButton").disabled = true;
        document.getElementById("restartDiv").style.display = "block";
    } else if (guess < answer) {
        attempts++;
        result.textContent = "Too low. Guess again.";
    } else if (guess > answer) {
        attempts++;
        result.textContent = "Too high. Guess again.";
    }
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}

document.getElementById("guessButton").addEventListener("click", checkGuess);
document.getElementById("restartButton").addEventListener("click", startGame);

startGame();