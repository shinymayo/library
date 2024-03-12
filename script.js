// book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// create default books
const theHobbit = new Book("The Hobbit", "J.R.R.Tolkien", "not read");
const deathlyHallows = new Book("Harry Potter and the Deathly Hallows", "J.K.Rowling", "read");

// create library array, with default books inside
const library = [deathlyHallows, theHobbit];

// function to add books
function addBooktoLibrary(item) {
    library.push(item);
}

// function to display books on the page
function displayBooks(array) {
    for (let item of array) {
      console.log(item.title);
    }
}