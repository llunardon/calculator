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

function operator (op, a, b) {
    switch (op) {
        case "+": return add(a, b);
        case "-": return sub(a, b);
        case "*": return mul(a, b);
        case "/": return divide(a, b);

        default: return undefined;
    };
}

