const numButtons = document.querySelectorAll(".button-num");
const opButtons = document.querySelectorAll(".button-op");
const eqButton = document.querySelector(".button-eq");
const clearButton = document.querySelector(".button-clear");
const inputScreen = document.querySelector("#input-screen");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

numButtons.forEach((button) => {
    button.addEventListener("click", () => writeNumber(button.textContent));
    return;
});

opButtons.forEach((button) => {
    button.addEventListener("click", () => setOperator(button.textContent));
    return;
});

eqButton.addEventListener("click", () => equals(operator, firstNumber));
clearButton.addEventListener("click", () => clearScreen());

//FUNCTIONS
function writeNumber(number) {
    inputScreen.textContent += number; 
}

function setOperator(inputOperator) {
    firstNumber = inputScreen.textContent;
    operator = inputOperator;
    inputScreen.textContent = "";
}

function clearScreen() {
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    inputScreen.textContent = "";
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0)
        return a / b;
    else 
        return undefined;
}

function equals (op, a) {
    secondNumber = inputScreen.textContent;
    inputScreen.textContent = "";
    switch (op) {
        case "+": inputScreen.textContent = add(Number(a), Number(secondNumber));
            break;
        case "-": inputScreen.textContent = sub(Number(a), Number(secondNumber));
            break;
        case "*": inputScreen.textContent = mul(Number(a), Number(secondNumber));
            break;
        case "/": inputScreen.textContent = divide(Number(a), Number(secondNumber));
            break;
        default: return undefined;
            break;
    };
    firstNumber = 0;
}
