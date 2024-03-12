let playerOne;
let playerTwo;

// objects / function factory

// myGameBoard IIFE
const myGameBoard = (() => {
    const gameBoardFactory = () => {
        let board;

        // Crea el tablero
        const createBoard = () => {
            const rows = 3;
            const columns = 3;
            board = document.querySelector('.grid');

            // Borra el contenido existente del div .grid
            board.innerHTML = '';

            // Usa for para crear una matriz 2D
            for (let i = 0; i < rows; i++) {
                // Crea las filas
                const row = document.createElement('div');
                row.classList.add('row');


                for (let j = 0; j < columns; j++) {
                    // Crea las columnas
                    const cell = document.createElement('div');
                    cell.classList.add('column');
                    cell.textContent = '';
                    row.appendChild(cell);
                }

                // Agrega cada row al board
                board.appendChild(row);
            }
            return board;
        }

        // Obtiene el valor actual del tablero
        const getBoard = () => {
            return board;
        }

        // Marca una casilla del tablero
        const setCellValue = (row, column, value) => {
            if (row >= 0 && row < board.length && column >= 0 && column < board.length) {
                board[row][column] = value;
            } else {
                console.error('Invalid row or column index.');
            }
            return board;
        }

        return { createBoard, getBoard, setCellValue }; 
    }

    return gameBoardFactory();
})();

// Player factory
const player = (name, symbol) => {
    const playerName = () => {
        return name;
    }

    const playerSymbol = () => {
        return symbol;
    }

    const markGrid = (symbol) => {
        // Obtiene las celdas del grid
        const cells = document.querySelectorAll('.column');

        // Agrega un evento a cada una:
        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                // El índice de la fila es el índice de la fila entre 3.
                const row = Math.floor(index / 3);

                // El índice de la columna es el índice dividido entre 3
                const column = index % 3;

                const move = control.isValidMove(cell);

                if (move) {
                    // Marcar la celda
                    cell.textContent = symbol;

                    console.log({ row, column, symbol});
                }
            })
        });
    }

    return { playerName, playerSymbol, markGrid };
}

// control IIFE
const control = (() => {
    const flowGame = () => {

        // Función para inicializar el juego
        const startGame = () => {
            let inputPlayers = interfaceControl.validInput();
            console.log(inputPlayers);

            if (inputPlayers !== false) {
                interfaceControl.closeInputPlayers();
                // Crear instancias de los jugadores:
                playerOne = player(inputPlayers.inputOne, 'X');
                playerTwo = player(inputPlayers.inputTwo, 'O');

                myGameBoard.createBoard();
            }
            

            let currentPlayer = playerOne;
            gameLogic(currentPlayer);
        }

        // Variable para verificar si alguien ha ganado
        const verifyBoard = () => {
            const board = myGameBoard.getBoard();

            // Verificar las filas:
            for (let i = 0; i < 3; i++) {
                if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][2]) {
                    return board[i][0];
                }
            }

            // Verificar las columnas:
            for (let i = 0; i < 3; i++) {
                if (board[0][i] !== '' && board[0][i] === board[1][i] && board[2][i]) {
                    return board[0][i];
                }
            }

            // Verifica diagonal izquierda a derecha
            if (board[0][0] !== '' && board[0][0] === board[1][1] && board[2][2]) {
                return board[0][0];
            }

            // Verifica diagonal derecha a izquierda
            if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
                return board[0][2];
            }

            return null;
        }

        // Variable para declarar el ganador
        const declareWinner = (winner) => {
            console.log('Congratulations! The winner is', winner);
        }

        const printBoard = () => {
            let board = myGameBoard.getBoard();
            console.log('Estado actual del tablero:');
            console.table(board);
        }

        const gameLogic = (currentPlayer) => {
            // Obtiene la jugada del currentPlayer
            currentPlayer.markGrid(currentPlayer.playerSymbol());

            if (isValidMove(move)) {
                // Marcar casilla
                myGameBoard.setCellValue(move.row, move.column, currentPlayer.playerSymbol());
                console.log(`${currentPlayer.playerName()} has marked X in the position ${move.row}-${move.column}.`)

                if (verifyBoard() === 'X') {
                    declareWinner(currentPlayer.playerName());
                    return null;
                } else if (verifyBoard() === 'O') {
                    declareWinner(currentPlayer.playerName());
                    return null;
                }

                // Alternar el turno del jugador
                currentPlayer = switchPlayer(currentPlayer);

                // Volvemos a llamar a gameLogic si aún no hay ganador
                gameLogic(currentPlayer);
            }
        }

            const switchPlayer = (currentPlayer) => {
                if (currentPlayer.playerSymbol() === 'X') {
                    return playerTwo;
                } else {
                    return playerOne;
                }
            }

            const isValidMove = (cell) => {
                if (cell.textContent === '') {
                    return true;
                }
                console.log('Esta celda está llena');
                return false;
            }
        return { startGame, verifyBoard, declareWinner, gameLogic, isValidMove, printBoard };
    }
    return flowGame;
})();

// functions

const interfaceControl = (() => {
    const interfaceFunctions = () => {

        const getStartButton = () => {
            const button = document.querySelector('.button.start');
            return button
        }

        // Mostrar beginning dialog
        const showInputPlayers = () => {
            let beginning = document.querySelector('.beginning');
            let overlay = document.querySelector('.overlay');

            beginning.style.display = 'flex';
            overlay.style.display = 'block';
            
        }

        const getFightButton = () => {
            const button = document.querySelector('.button.accept');

            return button;
        }

        const closeInputPlayers = () => {
            let beginning = document.querySelector('.beginning');
            let overlay = document.querySelector('.overlay');

            beginning.style.display = 'none';
            overlay.style.display = 'none';

            interfaceControl.grid().style.display = 'flex';
        }

        const grid = () => {
            const myGrid = document.querySelector('.grid');
            return myGrid;
        }

        const validInput = () => {
            let inputOne = document.querySelector('.inputOne').value;
            let inputTwo = document.querySelector('.inputTwo').value;

            if (inputOne !== '' && inputTwo !== '') {
                

                return { inputOne,  inputTwo }
            }
            return false;
        }

        return { showInputPlayers, getStartButton, getFightButton, validInput, closeInputPlayers, grid };
    }

    return interfaceFunctions();
})();

// addEventListener

interfaceControl.getStartButton().addEventListener('click', function (event) {
    event.preventDefault();

    interfaceControl.showInputPlayers();

})

interfaceControl.getFightButton().addEventListener('click', (event) => {
    event.preventDefault();

    control.startGame();
})