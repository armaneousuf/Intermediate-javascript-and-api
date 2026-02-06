// Create a `Book` class with properties `title`, `author`, and `pages`. Add a method that returns a description like "Title by Author, Pages pages".

// For example, if you create a book with title "1984", author "George Orwell", and 328 pages, the method should return: "1984 by George Orwell, 328 pages"

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    description() {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    }
}

const list = new Book('1984', 'George Orwell', 328);
console.log(list.description());