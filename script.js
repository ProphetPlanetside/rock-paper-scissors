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

console.log(computerPlay());