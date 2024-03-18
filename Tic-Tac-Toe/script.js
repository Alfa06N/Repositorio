let playerOne;
let playerTwo;

// objects / function factory

const interface = (() => {
    let board;

    // Crea el tablero:

    const createBoard = () => {
        board = interface.getGrid();

        board.innerHTML = '';

        // Crea las cuadrículas
        for (let i = 0; i < 9; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            board.appendChild(gridSquare);
        }
    }

    const validInput = () => {
        let inputOne = document.querySelector('.inputOne').value;
        let inputTwo = document.querySelector('.inputTwo').value;

        if (inputOne.trim() !== '' && inputTwo.trim() !== '') {
            return { inputOne, inputTwo }
        }
        return false;
    }

    const getGrid = () => {
        const myGrid = document.querySelector('.grid');
        return myGrid;
    }

    const getStartButton = () => {
        const button = document.querySelector('.button.start');
        return button;
    }

    const showInputPlayers = () => {
        let beginning = document.querySelector('.beginning');
        let overlay = document.querySelector('.overlay');

        beginning.style.display = 'flex';
        overlay.style.display = 'block';
    }
        
    const closeInputPlayers = () => {
        let beginning = document.querySelector('.beginning');
        let overlay = document.querySelector('.overlay');

        let inputOne = document.querySelector('.inputOne');
        let inputTwo = document.querySelector('.inputTwo');

        inputOne.value = '';
        inputTwo.value = '';

        beginning.style.display = 'none';
        overlay.style.display = 'none';
    }

    const showGrid = () => {
        interface.getGrid().style.display = 'grid';
    }

    const getFightButton = () => {
        const button = document.querySelector('.button.accept');

        return button;
    }

    const showPlayers = () => {
        let title = document.querySelector('.showPlayers');

        if (control.getCurrentPlayer() === playerOne) {
            title.innerHTML = `<span>${playerOne.playerName()} (${playerOne.playerSymbol()})</span> VS ${playerTwo.playerName()} (${playerTwo.playerSymbol()})`;
        } else {
            title.innerHTML = `${playerOne.playerName()} (${playerOne.playerSymbol()}) VS <span>${playerTwo.playerName()} (${playerTwo.playerSymbol()})</span>`;
        }
    }

    const showWinner = () => {
        const final = document.querySelector('.final');
        const overlay = document.querySelector('.overlay');

        final.style.display = 'flex';
        overlay.style.display = 'block';
    }

    const closeWinner = () => {
        const final = document.querySelector('.final');
        const overlay = document.querySelector('.overlay');
        final.style.display = 'none';
        overlay.style.display = 'none';

        const title = document.querySelector('.winner');
        const titleDialog = document.querySelector('.titleDialog');

        titleDialog.textContent = 'El ganador es';
        title.textContent = '';
    }

    const getRebootButton = () => {
        return document.querySelector('.reboot');
    }

    const getExitButton = () => {
        return document.querySelector('.cancel');
    }

    // addEventListener()

    const initEventListeners = () => {
        interface.getStartButton().addEventListener('click', function (event) {
            event.preventDefault();
            interface.showInputPlayers();
        });

        interface.getFightButton().addEventListener('click', (event) => {
            event.preventDefault();
            control.startGame();
        });

        document.querySelector('.exit').addEventListener('click', (event) => {
            event.preventDefault();
            interface.closeInputPlayers();
        })

        document.querySelector('.exit').addEventListener('click', (event) => {
            event.preventDefault();

            interface.closeInputPlayers();
        })

        interface.getGrid().addEventListener('click', function (event) {
            event.preventDefault();
            let target = event.target;

            if (target.textContent === '') {
                // Marca la casilla
                let player = control.getCurrentPlayer();
                player.markGrid(target);

                // Verifica el ganador
                if (control.verifyWinner() === false) {
                    // Cambia el turno del jugador
                    control.switchPlayer();
                    interface.showPlayers();
                }
            }
        })

        interface.getRebootButton().addEventListener('click', (event) => {
            event.preventDefault()
            interface.closeWinner();
            control.rebootGame();
        })

        interface.getExitButton().addEventListener('click', (event) => {
            event.preventDefault();
            interface.closeWinner();
            control.backHome();
        })
    }
        
    return { createBoard, validInput, getGrid, getStartButton, showInputPlayers, showGrid, getFightButton, closeInputPlayers, showPlayers, showWinner, closeWinner, getRebootButton, getExitButton, initEventListeners };

})();

const player = (name, symbol) => {
    const playerName = () => {
        return name;
    }

    const playerSymbol = () => {
        return symbol;
    }

    const markGrid = (target) => {
        let symbol = control.getCurrentPlayer().playerSymbol();
        if (target.textContent === '') {
            target.textContent = symbol;
            target.classList.add(symbol);
        }
    }

    return { playerName, playerSymbol, markGrid }
}

const control = (() => {

    let currentPlayer;

    const getCurrentPlayer = () => {
        return currentPlayer;
    }

    // Inicializa el juego
    const startGame = () => {
        let inputPlayers = interface.validInput();
        console.log(inputPlayers)

        if (inputPlayers !== false) {
            interface.closeInputPlayers();
            // Crear instancias de los jugadores:
            console.log(inputPlayers.inputOne);
            console.log(inputPlayers.inputTwo);

            playerOne = player(inputPlayers.inputOne, 'X');
            playerTwo = player(inputPlayers.inputTwo, 'O');

            interface.createBoard();
            interface.showGrid();
            currentPlayer = playerOne;

            interface.getStartButton().style.display = 'none';
            interface.showPlayers();
        }
    }

    const switchPlayer = () => {
        if (control.getCurrentPlayer().playerSymbol() === 'X') {
            console.log('Turno del jugador:', playerTwo.playerName());
            currentPlayer = playerTwo;
        } else {
            console.log('Turno del jugador:', playerOne.playerName());
            currentPlayer = playerOne;
        }
    }

    const verifyWinner = () => {
        const cells = document.querySelectorAll('.gridSquare');

        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Row
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]
        ];

        let isBoardFull = true;

        for (const cell of cells) {
            if (cell.textContent === '') {
                isBoardFull = false;
                break;
            }

        }

        if (isBoardFull) {
            const winner = document.querySelector('.winner');
            const title = document.querySelector('.titleDialog');
            title.textContent = 'No hay ningún ganador';
            winner.textContent = 'Empatados';
            interface.showWinner();
        } else {
            for (const combo of combos) {
                const [a, b, c] = combo; // posisiones
                const cellA = cells[a].textContent;
                const cellB = cells[b].textContent;
                const cellC = cells[c].textContent;

                if (cellA !== '' && cellA === cellB && cellA === cellC) {
                    control.declareWinner();
                    return true;
                }
            }
        }

        return false;
    }

    const declareWinner = () => {
        const winner = control.getCurrentPlayer();

        const title = document.querySelector('.winner');

        title.textContent = winner.playerName();
        interface.showWinner();
    }

    const rebootGame = () => {
        interface.closeWinner();
        interface.createBoard();
        currentPlayer = playerOne;
        interface.showPlayers();
    }

    const backHome = () => {
        interface.getStartButton().style.display = 'block';
        interface.getGrid().style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.showPlayers').style.display = 'none';
        currentPlayer = null;
    }

    return { getCurrentPlayer, startGame, switchPlayer, verifyWinner, declareWinner, rebootGame, backHome };
    
})();

// addEventListener

document.addEventListener('DOMContentLoaded', () => {
    interface.initEventListeners();
})