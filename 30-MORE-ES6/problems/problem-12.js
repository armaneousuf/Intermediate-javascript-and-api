// Create a `Rectangle` class with `width` and `height` properties. Add methods to:
// - `calculateArea()` - return the area (width × height)
// - `calculatePerimeter()` - return the perimeter (2 × (width + height))

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return (2 * (this.width + this.height));
    }
}

const result = new Rectangle(25, 85);
console.log(result.calculateArea());
console.log(result.calculatePerimeter());