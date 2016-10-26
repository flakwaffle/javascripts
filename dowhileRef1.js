var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

//initiates while loop at least once
do {
  guess = prompt("I am thinking of a number between 1 and 10");
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
}

//while true
while ( ! correctGuess)
  document.write("<h1>You guessed the number!<h1>");
  document.write("It took you " + guessCount + " guesses to guess the number " + randomNumber + "!");