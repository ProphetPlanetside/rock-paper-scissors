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
        return 'A Tie! ' + playerSelection + ' ties with ' + computerSelection;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    }
    // Implied that playerSelection == 'scissors'
    else if (computerSelection == 'rock') {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
    // Implied that playerSelection == 'scissors'
    else {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));