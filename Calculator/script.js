// Variables utilizadas en cada operación
let firstNumber = '';
let operator = null;
let secondNumber = '';
let calculatorInterface = document.querySelector('#calculatorInterface');
let input = document.querySelector('#input');
let result = document.querySelector('#result');

// functions

    // Para cada operación
function getSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function getSubtraction(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function getSplit(numberOne, numberTwo) {
    if (numberTwo == '0') {
        reset();
        alert("Hey, you can't split for 0. What's up??");
        return 'ERROR';   
    }
    return numberOne / numberTwo;
}

function getMultiplication(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function getPercentage(numberOne, numberTwo) {
    return (numberOne*numberTwo/100)
}

function allClear() {
    input.textContent = '0';
    result.textContent = '';
}

function backSpace() {
    let arrayInput = input.textContent.split('');
    let isOperator = arrayInput.pop();

    if (isOperator == operator) {
        operator = null;
        firstNumber = '';
        secondNumber = '';
    } else if (operator !== null) {
        secondNumber = secondNumber.slice(0, -1);
    }
    
    input.textContent = input.textContent.slice(0, -1);
    
    if (input.textContent == '') {
        input.textContent = '0';
    }
}

function reset() {
    firstNumber = '';
    operator = null;
    secondNumber = '';
}

function operate(operator, firstNumber, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber)
    switch (operator) {

        case '+':
            return getSum(firstNumber, secondNumber);
        case '-':
            return getSubtraction(firstNumber, secondNumber);
        case '/':
            return getSplit(firstNumber, secondNumber);
        case 'x':
            return getMultiplication(firstNumber, secondNumber);
        case '%':
            return getPercentage(firstNumber, secondNumber);
    }
}

function identifyColon() {
    if (operator === null) {
        if (!input.textContent.includes('.')) {
            input.textContent += '.';
        }
    } else {
        if (secondNumber !== '' && !secondNumber.includes('.')) {
            input.textContent += '.';
            secondNumber += '.';
        }
    }
}

// addEventListeners

calculatorInterface.addEventListener('click', function (event) {
    event.preventDefault();
    let getElement = event.target;
    
    if (getElement.classList.contains('delete') && getElement.textContent == 'AC') {
        allClear(); // Reinicia el screen
        reset();

    } else if (getElement.classList.contains('delete')) { 
        backSpace(); // Retrocede

    } else if (getElement.classList.contains('number') && getElement.textContent != '.') {
        if (operator === null) { // Si hay operador, se está ingresando el primer número entonces
            if (input.textContent === '0' && getElement.textContent !== '.') {
                input.textContent = getElement.textContent;
            } else {
                input.textContent += getElement.textContent;
            }
        } else { //Si hay operador, se está ingresando el segundo número, pero aún no lo especificar
            secondNumber += getElement.textContent;
            input.textContent += getElement.textContent;
}

    } else if (getElement.textContent === '.') {
        identifyColon();

    } else if (getElement.classList.contains('operator') && getElement.textContent != '=') {
        // Si hablamos de un operador y no es '='
        if (operator === null) {
            firstNumber = input.textContent;
            operator = getElement.textContent;
            input.textContent += getElement.textContent;
        } else if (operator !== null && secondNumber === '') { 
            operator = getElement.textContent // Solo actualizamos el valor de operator
            backSpace();
            input.textContent += getElement.textContent;
        } else {
            console.log(`First number: ${firstNumber}\nOperator: ${operator}\n Second number: ${secondNumber}`)
            result.textContent = operate(operator, firstNumber, secondNumber); //Imprimimos el valor de la operación anterior

            operator = getElement.textContent; // Actualizamos el valor del operador
            firstNumber = result.textContent; //El valor del primer número ahora es el resultado de la operación anterior
            secondNumber = ''; 
            input.textContent = result.textContent + operator;
        }  

    } else if (getElement.textContent === '=') {
        if (firstNumber !== '' && secondNumber !== '') {
            console.log(`Resultado: ${operate(operator, firstNumber, secondNumber)}\n${firstNumber} ${operator} ${secondNumber}`);
            if (operate(operator, firstNumber, secondNumber) == 'ERROR') {
                input.textContent = '0';
                result.textContent = '';
                reset();
            } else {
                input.textContent = operate(operator, firstNumber, secondNumber);
                result.textContent = '';
                reset(); 
            }
            
        }
    }
})