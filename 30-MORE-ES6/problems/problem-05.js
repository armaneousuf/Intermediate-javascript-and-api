const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 88 },
];

// Calculate the average score of all students.

const average = students.reduce((sum, student) => sum + student.score, 0) / students.length;
console.log(average);