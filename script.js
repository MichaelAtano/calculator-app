const display = document.querySelector(".display");
let firstNumber = null;
let operator = null;
let secondNumber = null;
let shouldResetDisplay = false;
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

   button.addEventListener("click", function() {

    if (button.textContent === "=") {
        secondNumber = Number(display.textContent);

        if (operator === "+") {
            display.textContent = firstNumber + secondNumber;
        }

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