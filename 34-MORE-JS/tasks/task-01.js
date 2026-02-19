// Write a function called divider(a, b) that:

// Divides a by b.

// Throws an error if b is 0 (with a message like "Cannot divide by zero").

// Call the function inside a try/catch block.

// If it succeeds, print the result.
// If it throws an error, print the error message.

function divider(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero")
    } else {
        return a / b;
    }
}

try {
    console.log(divider(10, 2));
    console.log(divider(2, 0));
} catch (error) {
    console.log("Error:", error.message);
}