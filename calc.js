// Initialize variables to hold the sum of even numbers
let sum = 0;

// Loop through numbers 1 to 100
for (let i = 2; i <= 100; i += 2) { // Increment by 2 for even numbers
    sum += i; // Add the even number to the sum
    const square = i * i; // Calculate the square of the number
    const squareRoot = Math.sqrt(i); // Calculate the square root of the number

    // Log the results for the current number
    console.log(`Number: ${i}, Square: ${square}, Square Root: ${squareRoot.toFixed(2)}`);
}

// Display the total sum of even numbers
console.log(`Total Sum of Even Numbers between 1 and 100: ${sum}`);
