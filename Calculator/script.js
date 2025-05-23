const display = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('number')) {
            if (waitingForSecondOperand) {
                display.value = value;
                waitingForSecondOperand = false;
            } else {
                display.value = display.value === '0' ? value : display.value + value;
            }
            currentInput = display.value;
        }

        if (button.classList.contains('decimal')) {
            if (!display.value.includes('.')) {
                display.value += '.';
                currentInput = display.value;
            }
        }

        if (button.classList.contains('operator')) {
            const currentOperator = value;
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else if (operator) {
                const result = calculate(firstOperand, parseFloat(currentInput), operator);
                display.value = result;
                firstOperand = result;
            }
            operator = currentOperator;
            waitingForSecondOperand = true;
        }

        if (button.classList.contains('equals')) {
            if (operator && firstOperand !== null) {
                display.value = calculate(firstOperand, parseFloat(currentInput), operator);
                firstOperand = null;
                operator = null;
                waitingForSecondOperand = true;
            }
        }

        if (button.classList.contains('clear')) {
            display.value = '0';
            currentInput = '';
            firstOperand = null;
            operator = null;
            waitingForSecondOperand = false;
        }

        if (button.classList.contains('backspace')) {
            if (display.value.length > 1) {
                display.value = display.value.slice(0, -1);
            } else {
                display.value = '0';
            }
            currentInput = display.value;
        }
    });
});

function calculate(first, second, operator) {
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '×':
            return first * second;
        case '÷':
            return second !== 0 ? first / second : 'Error';
        default:
            return second;
    }
}