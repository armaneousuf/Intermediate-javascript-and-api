const words = ["cat", "elephant", "dog", "butterfly", "mouse", "giraffe", "ant"];
// Create a new array containing only strings that have more than 5 characters, and make them all uppercase.

const moreThanFive = words.filter(x => x.length > 5).map(x => x.toUpperCase())
console.log(moreThanFive);