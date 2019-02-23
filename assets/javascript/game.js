var Victories = 0;
var Defeats = 0;
var guessesLeft = 10;
var currentGuesses = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //user guess input
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //computer selects random letter
    currentGuesses.push(userGuess); //pushing user guess to guesses so far
    if (userGuess == computerGuess) {
        Victories++;

        guessesLeft = 10; //reseting the guesses back to 10 
        currentGuesses.length = 0; //this removes everything from the currentGuesses array, so that the guesses from the previous round don't show
    } else if (guessesLeft == 0) {
        Defeats++;

        guessesLeft = 10;
        currentGuesses.length = 0;
    } else if (userGuess !== computerGuess) {
        guessesLeft--; //decrementing the guesses left
    }
    // Taking the tallies and displaying them in HTML    
    var html = "<h2>Read my mind and tell me the letter I'm thinking of!</h2>" + "<hr size=2>" +
        "<p>Total Victories: " +
        Victories +
        "</p>" +
        "<p>Total Defeats: " +
        Defeats +
        "</p>" +
        "<p>Guesses Left: " +
        guessesLeft +
        "</p>" +
        "<p>Current Guesses: " +
        currentGuesses +
        "</p>";

    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}