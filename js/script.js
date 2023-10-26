// unordered list where player's guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
// Guess button
const guessLetterButton = document.querySelector(".guess");
//text input where player will guess a letter
const letterInput = document.querySelector(".letter");
//word in progress - empty paragraph
const wordInProgress = document.querySelector(".word-in-progress");
//remaining guesses - empty paragraph
const remainingGuessesElement = document.querySelector(".remaining");
//remaining guesses - span inside paragraph
const remainingGuessesSpan = document.querySelector(".remaining span");
// message when player guesses a letter - empty paragraph
const message = document.querySelector("message");
// play again button - hidden
const playAgainButton = document.querySelector(".play-again")

const word = "magnolia";
const guessedLetters = [];

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


// Guess button event listener
guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  //empty message paragraph
  message.innerText = "";
  //grab input
  const guess = letterInput.value;
  // validate input
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
});

// Check player's input
const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a letter";
  } else if (input.length > 1) {
    message.innerText = "You can only guess one letter at a time";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter";
  } else {
    return input;
  }
};

// capture player input
const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if(guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, try again";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};