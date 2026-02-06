const products = [
  { id: 1, name: "Laptop", price: 1000, inStock: true },
  { id: 2, name: "Phone", price: 500, inStock: false },
  { id: 3, name: "Tablet", price: 300, inStock: true },
  { id: 4, name: "Monitor", price: 200, inStock: true },
  { id: 5, name: "Keyboard", price: 50, inStock: false },
];

// A) Get an array of all product names
const productName = products.map((names) => names.name);
console.log(productName);

// B) Log each product's name to the console (don't need a new array)
products.forEach((product) => {
  console.log(product.name);
});
// C) Get all products that are in stock
const isInStock = products.filter((stock) => stock.inStock);
console.log(isInStock);

// D) Find the product with id 3
const thirdProduct = products.find((product) => product.id === 3);
console.log(thirdProduct);

// E) Get an array of prices with 10% discount applied
// const discountedPrice = products.map(x => x.price - (x.price * .10));
const discountedPrice = products.map((x) => x.price * 0.9);
console.log(discountedPrice);

// F) Find the first product that costs less than 100
const cheapProduct = products.find((product) => product.price < 100);
console.log(cheapProduct);