"use strict";

let secretNumber;
let score = 10;
let highscore = 0;

const generateSecretNumber = () => Math.trunc(Math.random() * 10 + 1);
secretNumber = generateSecretNumber();

// Utility functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score; 
};

const displaySecretNumber = function (number) {
  document.querySelector(".secretNumber").textContent = number;
};

// Reset game
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = generateSecretNumber();

  displayMessage("Start guessing...");
  displayScore(score);
  displaySecretNumber("?");

  document.querySelector(".guess").value = "";

  // Reset styles
  document.body.style.backgroundColor = "#000";
  document.querySelector(".guess").style.backgroundColor = "#000";
  document.querySelector(".check").style.color = "#000";
  document.querySelector(".again").style.color = "#000";
  document.querySelector(".secretNumber").style.color = "#000";
});

// Check guess
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No input
  if (!guess) {
    displayMessage("⛔ No number!");

    // Correct guess
  } else if (guess === secretNumber) {
    displaySecretNumber(secretNumber);
    displayMessage("🎉 Correct Number!");
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "#60b347";
    document.querySelector(".check").style.color = "#60b347";
    document.querySelector(".again").style.color = "#60b347";
    document.querySelector(".secretNumber").style.color = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Wrong guess
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});
