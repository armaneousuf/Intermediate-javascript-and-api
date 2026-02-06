const users = [
  { name: "John", age: 17, isActive: true },
  { name: "Sarah", age: 25, isActive: true },
  { name: "Mike", age: 30, isActive: false },
  { name: "Emma", age: 22, isActive: true },
  { name: "Tom", age: 16, isActive: true },
  { name: "Lisa", age: 28, isActive: true }
];
// Create a new array with only active users who are 18 or older.

const olderThan18 = users.filter(x => x.age >= 18 && x.isActive);
console.log(olderThan18);