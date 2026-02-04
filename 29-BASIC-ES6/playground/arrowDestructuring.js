const users = [
  { name: "Alice", age: 25, country: "USA" },
  { name: "Bob", age: 30, country: "UK" },
  { name: "Charlie", age: 22, country: "Canada" },
];

// 1. Destructure in the arrow function parameter
const names = users.map(({ name }) => name);
console.log(names);

// Now you try:
// 2. Filter users from USA (destructure 'country' in the parameter)
const usaUsers = users.filter(({ country }) => country === "USA");
console.log(usaUsers);

// 3. Create greeting function (destructure name and country)
const greet = ({ name, country }) => `Hello ${name} from ${country}`;
console.log(greet(users[0]));