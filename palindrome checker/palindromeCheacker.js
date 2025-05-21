const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const resultBox = document.getElementById("result-box");

function paliChecker() {
  const rawInput = document.getElementById("text-input").value;
  const cleanedInput = rawInput.toLowerCase().replace(/[^a-z0-9]/g, ''); // remove spaces and punctuation

  if (cleanedInput === "") {
    alert("Please input a value");
    resultBox.style.display = "none";
    return;
  }

  const reversedInput = cleanedInput.split('').reverse().join('');

  resultBox.style.display = "block";
  if (cleanedInput === reversedInput) {
    result.innerText = `${rawInput} is a palindrome.`;
  } else {
    result.innerText = `${rawInput} is not a palindrome.`;
  }
}

button.addEventListener("click", paliChecker);
