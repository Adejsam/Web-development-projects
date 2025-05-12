let result = document.getElementById("result");
let display = document.getElementById("displayValue");

function appendDisplay(input) {
  display.value += input;
}

function clearDisplay(){
    display.value = "";
    result.value = 0;
}

function calculateResult() {
    result.value = eval(display.value);
}
