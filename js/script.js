// unordered list where player's guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters");
// Guess button
const guessButton = document.querySelector(".guess");
//text input where player will guess a letter
const guessLetterInput = document.querySelector(".letter");
//word in progress - empty paragraph
const wordInProgress = document.querySelector(".word-in-progress");
//remaining guesses - empty paragraph
const remainingGuessesMessage = document.querySelector(".remaining");
//remaining guesses - span inside paragraph
const remainingGuessesSpan = document.querySelector(".remaining span");
// message when player guesses a letter - empty paragraph
const message = document.querySelector("message");
// play again button - hidden
const playAgainButton = document.querySelector(".play-again")

const word = "magnolia";

// Add placeholders for each letter
const placeholder = function (word) {
  const letters = [];
  for (const letter of word) {
    console.log(letter);
    letters.push("●");
  }
  wordInProgress.innerText = letters.join("");
};
placeholder(word);

// Event listener button: When player makes a guess
guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  let letterInput = guessLetterInput.value;
  console.log(letterInput);
  letterInput = "";
});
