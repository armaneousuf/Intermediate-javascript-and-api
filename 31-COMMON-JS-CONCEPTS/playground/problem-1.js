const mixed = [0, 1, "", "hello", null, 42, undefined, false, "0", NaN, true];

// You have an array with mixed values. Filter out all falsy values and keep only truthy ones.

console.log(mixed.filter(Boolean));