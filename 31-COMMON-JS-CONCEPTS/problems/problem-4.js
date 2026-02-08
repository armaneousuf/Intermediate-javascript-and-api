const nums = [5, 0, 12, 0, 8, 3, 0, 15];
// Create a new array with only the numbers that are truthy (exclude 0).

const truthyValues = nums.filter(x => x);
console.log(truthyValues);

// Using for loop 
// const truthyValues = [];
// for (let i = 0; i < nums.length; i++){
//     if (nums[i]) {
//         truthyValues.push(nums[i]);
//     }
// }

// console.log(truthyValues);