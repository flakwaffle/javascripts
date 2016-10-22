/*
This program takes two user inputs and returns a random integer between the two numbers.
*/

var minNum = prompt("Welcome to the Random Number Generator\nPlease enter a minimum number.");
var maxNum = prompt("Please enter a maximum number.");
//Math.floor rounds to the largest integer less than or equal to a given number
//Math.random() returns a random float between 0 and 1.
//parseInt() turns a string into an integer.
var result = Math.floor(Math.random() * parseInt(maxNum)) + parseInt(minNum);
alert("You rolled a " + result);
