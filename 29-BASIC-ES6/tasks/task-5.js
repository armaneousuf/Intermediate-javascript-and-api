// Write an arrow function doubleArray that:

// takes an array of numbers

// returns a new array

// each number is doubled


// ES6 way to map
const doubleArray = (arr) => arr.map((n) => n * 2);
console.log(doubleArray([1, 2, 3, 4]));


// Traditional way to use map
function tripleArray(arr2) {
    return arr2.map(function (n) {
        return n * 3;
    })
}

console.log(tripleArray([1, 3, 5, 7]));