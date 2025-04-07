let number = -1;

while (number < 0 || number > 100 || isNaN(number)) {
  number = parseInt(prompt("Enter a number between 0 and 100:"));

  if (number < 0 || number > 100 || isNaN(number)) {
    alert("Invalid input. Please enter a number between 0 and 100.");
  }
}

alert("You entered a valid number: " + number);
