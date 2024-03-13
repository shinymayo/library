const libraryDisplay = document.querySelector(".main");
// book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.isRead = isRead;
}

// create default books
const theHobbit = new Book("The Hobbit", "J.R.R.Tolkien", 310);
const deathlyHallows = new Book("Harry Potter and the Deathly Hallows", "J.K.Rowling", 784);

const darkTower = new Book("The Dark Tower", "Stephen King", 224);
// create library array, with default books inside
const library = [deathlyHallows];

// function to add books
function addBooktoLibrary(item) {
    library.push(item);
}

// function to display books on the page
function displayBooks(array) {
    for (let item of array) {
        // check its in the array
        console.log(item.title);
        // create card
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");
        // create parts of the card
        const bookTitle = document.createElement("p");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = item.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = item.author;

        const bookPagesNum = document.createElement("p");
        bookPagesNum.classList.add("book-pages");
        bookPagesNum.textContent = item.pages;

        const removeButton = document.createElement("button");
        removeButton.setAttribute("id", "remove-btn");
        removeButton.textContent = "REMOVE";

        const statusButton = document.createElement("button");
        statusButton.setAttribute("id", "status-btn");
        statusButton.textContent = "I HAVE READ IT";
        //append to the card
        bookCard.append(bookTitle, bookAuthor, bookPagesNum, removeButton, statusButton);
        //append card to the library
        libraryDisplay.append(bookCard);

    }
}
addBooktoLibrary(theHobbit);
addBooktoLibrary(darkTower);
displayBooks(library);

// create function for remove button


// create function for changing status button