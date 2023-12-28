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
            return 'Hubo un problema';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return true;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return true;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return true;
    } else if (playerSelection == computerSelection) {
        console.log(`Tie. They both chose ${computerSelection}`);
        return 'tie';
    } else {
        console.log(`You lost... ${computerSelection} beats ${playerSelection}`);
        return false;
    }
}

function updateScore(playerScore, computerScore) {
    let score = document.querySelector('h2');
    score.textContent = `Player Score => ${playerScore} VS ${computerScore} <= Computer Score`;
};

let choiceGame = document.querySelector('#choiceGame');
let playerScore = 0;
let computerScore = 0;

function updateConsoleResult(roundWinner, playerScore, computerScore, playerSelection, computerSelection) {
    let lastChild = document.querySelector('#results').lastChild;
    let inputElement;

    if (lastChild && lastChild.nodeType === 1 && lastChild.tagName.toLowerCase() === 'input') {
        inputElement = document.querySelector('input');
    } else {
        inputElement = document.createElement('input');
    }

    if (playerScore === 5) {
        inputElement.textContent = `The game is over. The winner is you with 5 points!`;
    } else if (computerScore === 5) {
        inputElement.textContent = `The game is over. You lost... best luck for the next!`;
    } else if (roundWinner === true) {
        inputElement.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (roundWinner === false) {
        inputElement.textContent = `You lost... ${computerSelection} beats ${playerSelection}`;
    } else {
        inputElement.textContent = `Tie. They both chose ${computerSelection}`;
    }

    results = document.querySelector('#results');
    results.appendChild(inputElement);


}

choiceGame.addEventListener('click', function (event) {
    event.preventDefault();

    let playerSelection = event.target.textContent;
    let computerSelection = getComputerChoice();
    let roundWinner = playRound(playerSelection, computerSelection)

    if (roundWinner === true) {
        playerScore++;
        updateScore(playerScore, computerScore);

    } else if (roundWinner === false) {
        computerScore++;
        updateScore(playerScore, computerScore);

    }

    updateConsoleResult(roundWinner, playerScore, computerScore, playerSelection, computerSelection);

});