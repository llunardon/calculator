//declaring variables
const numButtons = document.querySelectorAll(".button-num");
const opButtons = document.querySelectorAll(".button-op");
const eqButton = document.querySelector(".button-eq");
const clearButton = document.querySelector(".button-clear");
const inputScreen = document.querySelector("#input-screen");
const resultScreen = document.querySelector("#result-screen");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

//set number buttons
numButtons.forEach((button) => {
    button.addEventListener("click", () => writeNumber(button.textContent));
    return;
});

//set operation buttons
opButtons.forEach((button) => {
    button.addEventListener("click", () => setOperator(button.textContent));
    button.style.backgroundColor = "#bf0a0a";
    button.style.color = "white";
    return;
});

//set equals button
eqButton.addEventListener("click", () => equals(operator, firstNumber));
eqButton.style.backgroundColor = "#41f72d";
//set AC button
clearButton.addEventListener("click", () => clearScreen());
clearButton.style.backgroundColor = "#41f72d";

//FUNCTIONS
function writeNumber(number) {
    inputScreen.textContent += number; 
}

function setOperator(inputOperator) {
    //checks if the user has pressed "=" right before this operation
    //yes: simply stores the variables
    if (operator === "") {
        firstNumber = inputScreen.textContent;
        operator = inputOperator;
        inputScreen.textContent = "";
    }
    //no: calls equals and then stores the variables, to chain more operations together
    else {
        equals(operator, firstNumber); 
        firstNumber = inputScreen.textContent;
        operator = inputOperator;
        inputScreen.textContent = "";
    }
}

function clearScreen() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    inputScreen.textContent = "";
    resultScreen.textContent = "";
}

function add(a, b) {
    return Math.round((a + b) * 10000) / 10000;
}

function sub(a, b) {
    return Math.round((a - b) * 10000) / 10000;
}

function mul(a, b) {
    return Math.round((a * b) * 10000) / 10000;
}

function divide(a, b) {
    if (b !== 0)
        return Math.round((a / b) * 10000) / 10000;
    else 
        return undefined;
}

function equals (op, a) {
    if (op !== "") {
        let result;
        secondNumber = inputScreen.textContent;
        inputScreen.textContent = "";
        switch (op) {
            case "+": result = add(Number(a), Number(secondNumber));
                break;
            case "-": result = sub(Number(a), Number(secondNumber));
                break;
            case "*": result = mul(Number(a), Number(secondNumber));
                break;
            case "/": result = divide(Number(a), Number(secondNumber));
                break;
            default: return undefined;
                break;
        };
        inputScreen.textContent = result;
        resultScreen.textContent = result;
        firstNumber = 0;
        operator = "";
    }
    else
        return;
}
