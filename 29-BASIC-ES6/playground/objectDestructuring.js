const user = {
  name: "Bob",
  age: 30,
  email: "bob@example.com",
  country: "USA",
};

// 1. Get name and email
const { name: person, email } = user;
console.log(person, email);

// 2. Rename while destructuring (alias)
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // Should be: Bob 30

// 3. Get name and put the rest in an object
const { name, ...otherInfo } = user; // Bob
console.log(otherInfo); // { age: 30, email: '...', country: 'USA' }

// 4. Destructure with default value
const { name: person2, role = "guest" } = user; // your code (user doesn't have 'role') // Should be: guest */
console.log(role);