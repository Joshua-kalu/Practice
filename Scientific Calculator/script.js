let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function sin() {
    try {
        display.value = Math.sin(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function cos() {
    try {
        display.value = Math.cos(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function tan() {
    try {
        display.value = Math.tan(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function log() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function pi() {
    display.value += Math.PI;
}

function e() {
    display.value += Math.E;
}