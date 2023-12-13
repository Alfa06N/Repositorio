function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3)

    switch (numberChoice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            return 'Oops. Something went wrong';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
        return 1;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
        return 1;
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
        return 1;
    } else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        console.log(`Tie. They both chose ${computerSelection}`);
        return 0;
    } else {
        console.log(`You lost... ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);

        let playerSelection = prompt('Rock, Paper or Scissor?', 'Rock');
        let computerSelection = getComputerChoice();

        let roundWinner = playRound(playerSelection, computerSelection);

        switch (roundWinner) {
            case 0:
                console.log('No one scored points this round...');
                break;
            case 1:
                console.log('The player has earned a point');
                playerScore++;
                break;
            case 2:
                console.log('The computer has earned a point');
                computerScore++;
                break;
            default:
                console.log('Oops, something went wrong')
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Congratulations! The Player won with a total of ${playerScore} points.`);
    } else if (computerScore > playerScore) {
        console.log(`The Computer has won with a total of ${computerScore} points. Best of luck for the next one.`)
    } else {
        console.log(`Tie with a total of ${playerScore} points. Best of luck for the next one.`)
    }
}

game();