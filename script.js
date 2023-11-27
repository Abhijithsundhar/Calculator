function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearOne() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    var display = document.getElementById('display');
    if (display.value !== '' && display.value !== 'Error') {
        display.value = (parseFloat(display.value) * -1).toString();
    }
}
