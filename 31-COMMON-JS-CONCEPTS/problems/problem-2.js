const inputs = ["John", "", "Sarah", null, "Mike", undefined, "Emma", ""];

// Count how many valid (truthy) inputs there are.

console.log(inputs.filter(Boolean).length);
// console.log(inputs.filter(x => x).length);