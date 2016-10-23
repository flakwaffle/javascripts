var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
//parseInt() - turns to integer
if (parseInt(guess) === randomNumber ) {
  //correctGuess boolean allows greater choices.
  correctGuess = true;
} else if (guess < randomNumber) {
    var guessAgain = parseInt(prompt('Its higher! Guess again!'));
    //nested 'if' conditional. Checks if second guess is equal to randomNumber.
    if (guessAgain === randomNumber) {
      correctGuess = true;
    }
} else if (guess > randomNumber) {
        var guessAgain = parseInt(prompt('Its lower! Guess again!'));
        //nested 'if' conditional. Checks if second guess is equal to randomNumber.
        if (guessAgain === randomNumber) {
          correctGuess = true;
        }
}


if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
    //returns else if correctGuess is false on previous conditionals.
} else {
  document.write('<p>Sorry. My number was actually ' + randomNumber + "</p>");
}