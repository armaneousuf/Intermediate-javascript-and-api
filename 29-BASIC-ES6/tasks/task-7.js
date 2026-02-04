const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true }
];

// 1. Get names of products that are in stock
const availableProducts = products.filter(product => product.inStock === true);
console.log(availableProducts);

// 2. Calculate total value of in-stock products
const totalValue = products.filter(product => product.inStock === true)
    .reduce((sum, product) => sum + product.price, 0);
console.log(totalValue);

// 3. Check if any product costs more than 800
const hasExpensiveItem = products.some(product => product.price > 800);
console.log(hasExpensiveItem);