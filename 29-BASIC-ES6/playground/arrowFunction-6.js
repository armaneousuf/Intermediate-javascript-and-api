const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

// a) Get an array of just the names
// Hint: use .map() and access the 'name' property

const names = users.map(user => user.name) // your code // Should be: ['Alice', 'Bob', 'Charlie']
console.log(names);

// b) Filter users older than 24
// Hint: use .filter() and check the 'age' property
const olderUsers = users.filter(users => users.age > 24) // your code
console.log(olderUsers);

// Should be: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// c) Find the user named 'Bob'
// Hint: use .find() and check the 'name' property
const bob = users.find(users => users.name === 'Bob') // your code // Should be: { name: 'Bob', age: 30 }
console.log(bob);


// d) Calculate average age
// Hint: use .reduce() to sum ages, then divide by length
const averageAge = users.reduce((total, user) => total + user.age, 0) / users.length;
console.log(averageAge);