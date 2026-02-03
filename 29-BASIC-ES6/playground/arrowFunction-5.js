// Example of what you need to do:
// const isPositive = (num) => num > 0;

// Should become:
// const isPositive = (num) => {
//   console.log("Checking:", num);
//   return num > 0;
// };

// Now you try these:

// const triple = (x) => x * 3;
// Add: console.log('Tripling:', x) before returning

const triple = (x) => {
    console.log('Tripling:', x)
    return x * 3;
}


// const getDiscount = (price) => price * 0.9;
// Add: console.log('Original price:', price) before returning
const getDiscount = (price) => {
    console.log('Original price:', price);
    return price * 0.9;
}


// Bonus: Try this one
// const add = (a, b) => a + b;
// Add: console.log('Adding:', a, 'and', b) before returning
const add = (a, b) => {
    console.log('Adding:', a, 'and', b);
    return a + b;
}