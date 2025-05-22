// Get references to DOM elements for input, button, result display, and animation container
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

// Animation steps for visualizing the call stack when input is 5
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

// Recursive function to convert decimal to binary as a string
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// Show animation for the call stack when input is 5
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    // Add animation frame for each step
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    // Show explanation message for each step
    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    // Remove animation frame after delay
    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  // Show final binary result after animation completes
  setTimeout(() => {
    result.textContent = decimalToBinary(5)
  }, 20000);
};

// Validate user input and display binary conversion or animation
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  // Check for valid, non-negative integer input
  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  // If input is 5, show the call stack animation
  if (inputInt === 5) {
    showAnimation();
    return;
  }

  // Otherwise, display the binary conversion result
  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

// Event listener for convert button click
convertBtn.addEventListener("click", checkUserInput);

// Allow pressing Enter in the input field to trigger conversion
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});