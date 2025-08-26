let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let gameWon = false;


const guessInput = document.getElementById("my_input");
const guessButton = document.getElementById("my_button");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.querySelector("#attempts span");
const winGif = document.getElementById("winGif");
const randomNumberDisplay = document.getElementById("number");
randomNumberDisplay.textContent = randomNumber;


guessButton.addEventListener("click", () => {
    if (guessInput.value === "") {
        feedback.textContent = "Please enter a number!";
        return;
    }
  if (gameWon) return;

  let userGuess = parseInt(guessInput.value);

  if (userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100!";
  } else if (userGuess === randomNumber) {
    guessCount++;
    attemptsDisplay.textContent = guessCount;
    feedback.textContent = `🎉 Correct! It took you ${guessCount} guesses.`;
    winGif.innerHTML = `<img src="https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif" alt="You Win!">`;

    gameWon = true;
  } else if (userGuess < randomNumber) {
    guessCount++;
    attemptsDisplay.textContent = guessCount;
    feedback.textContent = "Too low! Try again.";
  } else {
    guessCount++;
    attemptsDisplay.textContent = guessCount;
    feedback.textContent = "Too high! Try again.";
  }
});
