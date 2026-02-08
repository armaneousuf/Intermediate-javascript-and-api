const values = [false, 0, "", null, "first truthy", undefined, 42];
// Use `find` to get the first truthy value.

console.log(values.find(Boolean));
