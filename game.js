// ============================== Guessing game =============================================

let secretNumber = Math.floor(Math.random() * 10) + 1;

let guess = +prompt("Guess a number between 1 and 10:");

if (guess === secretNumber) {
    alert(" Correct! You guessed the number!");
    alert("You win 7crore rupees!")
} else {
    alert(" Wrong! The correct number was " + " " + secretNumber);
}