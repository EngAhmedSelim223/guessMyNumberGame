"use strict";

// Selecting elements
const againBtn = document.querySelector(".again");
const displaySecretNumber = document.querySelector(".number");
const numberInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const messageBox = document.querySelector(".message");
const displayScore = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

// Initial values
let secretNumber = generateSecretNumber();
let score = 20;
let maxScore = 0;

// Generate a secret number
function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Display message
function displayMessage(message) {
  messageBox.textContent = message;
}

// Reset game
function resetGame() {
  secretNumber = generateSecretNumber();
  score = 20;
  displayMessage("Start guessing...");
  displayScore.textContent = score;
  displaySecretNumber.textContent = "?";
  numberInput.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  displaySecretNumber.style.width = "15rem";
}

// Update high score
function updateHighScore(currentScore) {
  if (currentScore > maxScore) {
    maxScore = currentScore;
    highScore.textContent = maxScore;
  }
}

// Handle guess
function handleGuess(guess) {
  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displaySecretNumber.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    displaySecretNumber.style.width = "30rem";
    updateHighScore(score);
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      displayScore.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      displayScore.textContent = 0;
    }
  }
}

// Event listeners
checkBtn.addEventListener("click", function () {
  const guess = Number(numberInput.value);
  handleGuess(guess);
});

againBtn.addEventListener("click", resetGame);
