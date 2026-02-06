// Create a Product class with name and price properties. Then create an array of product instances and use array methods to find the total cost of all products.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const products = [
    new Product('PC', 3200),
    new Product('RAM', 900),
    new Product('Casing', 120),
    new Product('Monitor', 350)
];

const total = products.reduce((num, sum) => num + sum.price, 0);
console.log(total);