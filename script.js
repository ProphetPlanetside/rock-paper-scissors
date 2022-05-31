let playerScore = 0;
let computerScore = 0;

const divRoundResults = document.querySelector('#roundResults');
const divCurrentScore = document.querySelector('#currentScore');
const divGameOverMessage = document.querySelector('#gameOverMessage');

// Displays a Game Over message once the player or computer gets 5 points, then resets the scores in case
// the user wants to play again.
function checkForWinner() {
    if (playerScore == 5) {
        divGameOverMessage.textContent = "Game Over, YOU WIN!  Click a button to play another game.";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        divGameOverMessage.textContent = "Game Over, You Lose.  Click a button to play another game.";
        playerScore = 0;
        computerScore = 0;
    }
}

// Generate a random number from 1 to 3.
// If '1' return 'rock'.
// If '2' return 'paper'.
// If '3' return 'rock'.
function computerPlay() {
    // Generate a random number 1, 2, or 3.
    let play = Math.floor(Math.random() * 3) + 1;
    if (play == 1) {
        return 'rock';
    }
    else if (play == 2) {
        return 'paper';
    }
    // Play == 3
    else {
        return 'scissors';
    }
}

// Take a string 'playerSelection' and convert it to all lowercase.
// Compare playerSelection to computerSelection and see who wins.
// Return a message saying 'you lose', 'you tie', or 'you win.'
function playRound(playerSelection, computerSelection) {
    // Ensures the game over message does not display if you're in the middle of playing a game.
    divGameOverMessage.textContent = "";
    // Convert playerSelection string to be all lowercase.
    playerSelection = playerSelection.toLowerCase();
    // The player and computer tie.
    if (playerSelection == computerSelection) {
        roundMessage(1, playerSelection, computerSelection);
        //return 1;
    }
    // Lose
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        roundMessage(2, playerSelection, computerSelection);
        computerScore++;
        //return 2;
    }
    // Win
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        roundMessage(3, playerSelection, computerSelection);
        playerScore++;
        //return 3;
    }

    // Lose
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        roundMessage(4, playerSelection, computerSelection);
        computerScore++;
        //return 4;
    }
    // Win
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        roundMessage(5, playerSelection, computerSelection);
        playerScore++;
        //return 5;
    }
    // Lose
    // Implied that playerSelection == 'scissors'
    else if (computerSelection == 'rock') {
        roundMessage(6, playerSelection, computerSelection);
        computerScore++;
        //return 6;
    }
    // Win
    // Implied that playerSelection == 'scissors' and computerSelection == 'paper'
    else {
        roundMessage(7, playerSelection, computerSelection);
        playerScore++;
        //return 7;
    }
    divCurrentScore.textContent = "The current score is: Player -> " + playerScore + ", Computer -> " + computerScore;
    checkForWinner();
}

// Takes a number, 'result', from 1 to 7.
// Return win/lose/tie message corresponding to that number.
function roundMessage(result, playerSelection, computerSelection) {
    if (result == 1) {
        divRoundResults.textContent = 'This round is a Tie! ' + playerSelection + ' ties with ' + computerSelection;
    }
    else if (result == 2) {
        divRoundResults.textContent = 'You Lose this round! ' + computerSelection + ' beats ' + playerSelection;
    }
    else if (result == 3) {
        divRoundResults.textContent = 'You Win this round! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (result == 4) {
        divRoundResults.textContent = 'You Lose this round! ' + computerSelection + ' beats ' + playerSelection;
    }
    else if (result == 5) {
        divRoundResults.textContent = 'You Win this round! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (result == 6) {
        divRoundResults.textContent = 'You Lose this round! ' + computerSelection + ' beats ' + playerSelection;
    }
    // result == 7
    else {
        divRoundResults.textContent = 'You Win this round! ' + playerSelection + ' beats ' + computerSelection;
    }
}

// New code from "Revisiting Rock Paper Scissors"
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// These 3 below didn't work because I didn't wrap the playRound function call within a "function()".
// rockBtn.onclick = playRound('rock', computerPlay());
// paperBtn.onclick = playRound('paper', computerPlay());
// scissorsBtn.onclick = playRound('scissors', computerPlay());

// document.getElementById("rock").addEventListener("click", function() {playRound('rock', computerPlay());});
// The above or below work. I can use the above if I don't want to first create the const rockBtn.
// In the event listener, the playRound function call must be wrapped in a function for it to work.
rockBtn.addEventListener("click", function() {playRound('rock', computerPlay());});
paperBtn.addEventListener("click", function() {playRound('paper', computerPlay());});
scissorsBtn.addEventListener("click", function() {playRound('scissors', computerPlay());});

// The buttons work with playRound just fine if I use the below for the buttons in the HTML file.
// (Instead of writing in the .js file -> inline js in HTML).
{/* <button id = "rock" onclick = "playRound('rock', computerPlay())">Rock</button>
<button id = "paper" onclick = "playRound('paper', computerPlay())">Paper</button>
<button id = "scissors" onclick = "playRound('scissors', computerPlay())">Scissors</button> */}

// I am on step 2.c










// Call the game function to run the game (5 rounds).
// game();

// Calls the playRound function to play a 5 round game.
// Reports a winner or loser at the end by keeping score.
// Prompts user for selections.
function game() {
    let playerSelection = 'rock';
    let computerSelection = 'rock';
    let playerScore = 0;
    let computerScore = 0;
    // If result = 0, the round is a Tie.
    // If result = 2, 4, or 6, player Loses the round.
    // If result = 3, 5, or 7, player Wins the round.
    let result = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Your move. Rock, Paper, or Scissors?").toLowerCase();
        console.log(playerSelection);
        // While loop is used to make sure the user enters Rock, Paper, or Scissors.
        // If the entry is not valid, it keeps asking the user again until they give a valid response.
        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            playerSelection = prompt("Invalid selection, try again. Rock, Paper, or Scissors?").toLowerCase();
        }
        // Get the computer's selection for the round.
        computerSelection = computerPlay();
        // Play a round.
        result = playRound(playerSelection, computerSelection);
        // Computer Wins round
        if (result == 2 || result == 4 || result == 6) {
            computerScore++;
        }
        // Player wins round
        else if (result == 3 || result == 5 || result == 7) {
            playerScore++;
        }
        // No need for an 'else' here.
        // If it's a tie, then neither the player's nor computer's score increases.
    }
    if (playerScore > computerScore) {
        console.log('You Won the Game! You scored ' + playerScore + ' and the Computer scored ' + computerScore);
    }
    else if (playerScore < computerScore) {
        console.log('You Lost the Game. You scored ' + playerScore + ' and the Computer scored ' + computerScore);
    }
    else {
        console.log('The Game ends in a Tie! You scored ' + playerScore + ' and the Computer scored ' + computerScore);
    }
}