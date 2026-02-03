// Write arrow functions for:

// a) Calculate area of rectangle (length, width)
const getArea = (length, width) => length * width;

// b) Get the larger of two numbers
const max = (a, b) => Math.max(a, b);

// c) Concatenate three strings with spaces between them
const joinWords = (word1, word2, word3) => word1 + ' ' + word2 + ' ' + word3;

// Test them:
console.log(getArea(5, 10));        // should be 50
console.log(max(15, 8));            // should be 15
console.log(joinWords('Hello', 'my', 'friend')); // "Hello my friend"