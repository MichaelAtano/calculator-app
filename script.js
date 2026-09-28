const display = document.querySelector(".display");
let firstNumber = null;
let operator = null;
let secondNumber = null;
let shouldResetDisplay = false;
function calculate() {
    secondNumber = Number(display.textContent);

if (operator === "+") {
    display.textContent = firstNumber + secondNumber;
}

if (operator === "-") {
    display.textContent = firstNumber - secondNumber;
}

if (operator === "×") {
    display.textContent = firstNumber * secondNumber;
}

if (operator === "÷") {
    if (secondNumber === 0) {
        display.textContent = "Error";
    } else {
        display.textContent = firstNumber / secondNumber;
    }
}

}
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

   button.addEventListener("click", function() {
if (button.textContent === "C") {
    display.textContent = "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    shouldResetDisplay = false;

    return;
}
   if (button.textContent === "=") {
    calculate();
    shouldResetDisplay = true;

    return;
}


    if (
        button.textContent === "+" ||
        button.textContent === "-" ||
        button.textContent === "×" ||
        button.textContent === "÷"
    ) {
        firstNumber = Number(display.textContent);
        operator = button.textContent;
        shouldResetDisplay = true;

        console.log("First number:", firstNumber);
        console.log("Operator:", operator);

        return;
    }
if (button.textContent === ".") {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }

    return;
}
    if (shouldResetDisplay) {
        display.textContent = button.textContent;
        shouldResetDisplay = false;
    } else if (display.textContent === "0") {
        display.textContent = button.textContent;
    } else {
        display.textContent += button.textContent;
    }

});
});

document.addEventListener("keydown", function(event) {
if (event.key === "Escape") {
    display.textContent = "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    shouldResetDisplay = false;

    return;
}
    if (event.key >= "0" && event.key <= "9") {
        if (shouldResetDisplay) {
            display.textContent = event.key;
            shouldResetDisplay = false;
        } else if (display.textContent === "0") {
            display.textContent = event.key;
        } else {
            display.textContent += event.key;
        }
    }
    if (event.key === "+") {
    firstNumber = Number(display.textContent);
    operator = "+";
    shouldResetDisplay = true;
}
if (event.key === "-") {
    firstNumber = Number(display.textContent);
    operator = "-";
    shouldResetDisplay = true;
}
if (event.key === "*") {
    firstNumber = Number(display.textContent);
    operator = "×";
    shouldResetDisplay = true;
}
if (event.key === "/") {
    firstNumber = Number(display.textContent);
    operator = "÷";
    shouldResetDisplay = true;
}
if (event.key === ".") {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
}
if (event.key === "Enter" || event.key === "=") {
    calculate();
    shouldResetDisplay = true;
}

});