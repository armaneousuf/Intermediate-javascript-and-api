// You have an array of product objects with name and price properties. Find the first product that costs more than $50.

const products = [
  { name: "Keyboard", price: 25 },
  { name: "Mouse", price: 15 },
  { name: "Monitor", price: 120 },
  { name: "Webcam", price: 45 },
  { name: "Headphones", price: 80 },
  { name: "USB Cable", price: 8 },
  { name: "Laptop Stand", price: 35 },
];

const moreThan50 = products.find((x) => x.price > 50);
console.log(moreThan50);
