// You have an array of numbers. Use the appropriate method to print each number multiplied by its index position.

// Here's the array:

const numbers = [5, 10, 15, 20, 25];

// For example:
// - 5 is at index 0, so print 5 × 0 = 0
// - 10 is at index 1, so print 10 × 1 = 10
// - 15 is at index 2, so print 15 × 2 = 30
// - etc.

const result = numbers.map((num, i) => num * i); //.reduce((a, b) => a+b, 0) will add the total sum 
console.log(result); 