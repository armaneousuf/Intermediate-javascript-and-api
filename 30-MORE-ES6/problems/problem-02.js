// Given an array of numbers, create a new array with only the even numbers doubled.

const numbers = [2, 4, 5, 6, 8];
const doubledEven = numbers
    .filter((x) => x % 2 === 0)
    .map((x) => x * 2);
console.log(doubledEven);