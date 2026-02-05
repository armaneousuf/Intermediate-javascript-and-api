const product = {
  name: "Laptop",
  price: 1000,
  "in-stock": true, // Property with hyphen - MUST use brackets
  "product-id": "LP123",
};

// 6. Access 'in-stock' (can't use dot notation because of hyphen)
const inStock = product["in-stock"]; // your code
console.log(inStock);
// 7. Dynamic property access
const propertyName = "price";
const productPrice = product[propertyName];
console.log(productPrice); // your code - use bracket notation with variable
