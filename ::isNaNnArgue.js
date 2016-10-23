//isNaNnArgue
//lower and upper ar arguements and will send information into the function
function getRandomNumber( lower, upper ) {
  //isNaN() determines if the arguement is not a number
  if ( isNaN(lower) || isNaN(upper)) {
  //throws an error message into the console
    throw new Error('Error: NaN found');
  } else {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }
}

console.log( getRandomNumber( 'nine', 24 ) );
console.log( getRandomNumber( 1, 100 ) );
console.log( getRandomNumber( 200, 'five hundred' ) );
console.log( getRandomNumber( 1000, 20000 ) );
console.log( getRandomNumber( 50, 100 ) );

