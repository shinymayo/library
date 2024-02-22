class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

Book.prototype.info = function() {
    console.log(`${this.title} by ${this.author}, and ${this.read}.`);
}

//  function to add to the library
// function addBookToLibrary(newBook) {
//     myLibrary.push(newBook)
// }
Book.prototype.addBooktoLibrary = function(newBook) {
    myLibrary.push(newBook);
}

// create default books
const theHobbit = new Book("The Hobbit", "J.R.R.Tolkien", "not read");
const deathlyHallows = new Book("Harry Potter and the Deathly Hallows", "J.K.Rowling", "read");

// create library array, with default books inside
const myLibrary = [deathlyHallows, theHobbit];