// The unordered list where the player’s guessed letters will appear.
const guessedLettersElement = document.querySelector(".guessed-letters");
// The button with the text “Guess!” in it.
const guessLetterButton = document.querySelector(".guess");
// The text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");
// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display.
const remainingGuessesElement = document.querySelector(".remaining");
// The span inside the paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".remaining span");
// The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
// The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector("play-again");

const word = "magnolia";
const guessedLetters = [];

// Add placeholders for each letter
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    //console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
}
placeholder(word);

// guess button - captures input value
guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  //empty message paragraph
  message.innerText = "";
  // capture input
  const guess = letterInput.value;

  const goodGuess = validateInput(guess);

  if (goodGuess) {
    makeGuess(guess);
  }

  // empty input
  letterInput.value = "";
});


// Validate player input
const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/; //regular expression, ensures player inputs a letter
  if (input.length === 0) {
    message.innerText = "Please enter a letter A-Z";
  } else if (input.length > 1) {
    message.innerText = "You can only guess one letter at a time";
  } else if ( !input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter A-Z"
  } else {
    return input;
  }
};

//capture input function
const makeGuess = function(guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, try again";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};