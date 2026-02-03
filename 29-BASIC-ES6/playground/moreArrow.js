const numbers = [1, 2, 3, 4, 5];

// Your turn:
// a) Double each number using .map()
// b) Filter only even numbers using .filter()
// c) Sum all numbers using .reduce()
// d) Check if any number is greater than 3 using .some()

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((par1, par2) => par1 + par2, 0);
console.log(sum);

const hasBigNumber = numbers.some(num => num > 3);
console.log(hasBigNumber);