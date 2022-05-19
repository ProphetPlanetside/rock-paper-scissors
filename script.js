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
    // Convert playerSelection string to be all lowercase.
    playerSelection = playerSelection.toLowerCase();
    // The player and computer tie.
    if (playerSelection == computerSelection) {
        roundMessage(1, playerSelection, computerSelection);
        return 1;
    }
    // Win
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        roundMessage(2, playerSelection, computerSelection);
        return 2;
    }
    // Lose
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        roundMessage(3, playerSelection, computerSelection);
        return 3;
    }

    // Win
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        roundMessage(4, playerSelection, computerSelection);
        return 4;
    }
    // Lose
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        roundMessage(5, playerSelection, computerSelection);
        return 5;
    }
    // Win
    // Implied that playerSelection == 'scissors'
    else if (computerSelection == 'rock') {
        roundMessage(6, playerSelection, computerSelection);
        return 6;
    }
    // Lose
    // Implied that playerSelection == 'scissors'
    else {
        roundMessage(7, playerSelection, computerSelection);
        return 7;
    }
}

// Takes a number, 'result', from 1 to 7.
// Return win/lose/tie message corresponding to that number.
function roundMessage(result, playerSelection, computerSelection) {
    if (result == 1) {
        console.log('This round is a Tie! ' + playerSelection + ' ties with ' + computerSelection);
    }
    else if (result == 2) {
        console.log('You Lose this round! ' + computerSelection + ' beats ' + playerSelection);
    }
    else if (result == 3) {
        console.log('You Win this round! ' + playerSelection + ' beats ' + computerSelection);
    }
    else if (result == 4) {
        console.log('You Lose this round! ' + computerSelection + ' beats ' + playerSelection);
    }
    else if (result == 5) {
        console.log('You Win this round! ' + playerSelection + ' beats ' + computerSelection);
    }
    else if (result == 6) {
        console.log('You Lose this round! ' + computerSelection + ' beats ' + playerSelection);
    }
    // result == 7
    else {
        console.log('You Win this round! ' + playerSelection + ' beats ' + computerSelection);
    }
}

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

// Call the game function to run the game.
game();