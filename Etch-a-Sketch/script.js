let grid = document.querySelector('#grid');
let settings = document.querySelector('#settings');
let selectedChoice = document.querySelector('.selectedChoice');
let isMousePressed = false;
console.log(selectedChoice.value)


// function

function createGridSquare(grid) {
    // Crea las 256 cuadrículas con un bucle
    for (let i = 0; i < 256; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        grid.appendChild(gridSquare);
    }
}
createGridSquare(grid)

function setButtonClass(buttonTarget) {
    // Verifica si NO posee la clase selectedChoice
    if (!buttonTarget.classList.contains('selectedChoice')) {
        let allButtons = document.querySelectorAll('button');
        // Inicio un bucle for para eliminar la clase del que si está seleccionado
        allButtons.forEach(element => {
            if (element.classList.contains('selectedChoice')) {
                element.classList.remove('selectedChoice');
            }
        });

        buttonTarget.classList.add('selectedChoice');
        selectedChoice = buttonTarget;
    }

}

function setSquareClass(square) {
    if (selectedChoice.textContent === 'Color Mode') {
        square.classList.add('selectedChoice');
    } else {
        square.classList.remove('selectedChoice');
    }
}

function clearGrid() {
    let allSquares = document.querySelectorAll('.gridSquare');
    allSquares.forEach(element => {
        element.classList.remove('selectedChoice');
    });
}
    
// addEventListener

settings.addEventListener('click', function (event) {
    event.preventDefault();
    buttonTarget = event.target;
    console.log(buttonTarget.textContent);

    if (buttonTarget.tagName === 'BUTTON') {
        if (buttonTarget.textContent === 'Color Mode' || buttonTarget.textContent === 'Eraser') {
            setButtonClass(buttonTarget);
        } else if (buttonTarget.textContent === 'Clear') {
            clearGrid();
        }
    }
});

grid.addEventListener('dblclick', function (event) {
    event.preventDefault();
    setSquareClass(event.target);
    
});

grid.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isMousePressed) {
        setSquareClass(event.target);
    }
})

    // Eventos para pintar o borrar al mantener presionado el botón del mouse y moverse
grid.addEventListener('mousedown', function (event) {
    event.preventDefault();
    isMousePressed = true;
});

document.addEventListener('mouseup', function (event) {
    event.preventDefault();
    isMousePressed = false;
});