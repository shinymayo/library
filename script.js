const libraryDisplay = document.querySelector(".main");
const addNewBook = document.querySelector("#add-btn");
const dialogBox = document.querySelector("dialog");
const submitBtn = document.querySelector(".dialog-submit-btn");
// for the card elements
let bookCard;
let bookTitle;
let bookAuthor;
let bookPagesNum;
let readStatus;
let removeButton;
let statusButton;

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// create function for changing status button
Book.prototype.changeRead = function() {
    this.read = !this.read;
}
function changeRead(index) {
    library[index].changeRead();
    displayBooks();
}

// create library array, with default books inside
const library = [];

// function to add books array
function addBooktoLibrary(item) {
    
    library.push(item);
}

// function to display books on the page
function displayBooks(array) {
    for (let item of array) {
        // check its in the array
        console.log(item.title);
        // create card
        bookCard = document.createElement("div");
        bookCard.classList.add("card");
        // create parts of the card
        bookTitle = document.createElement("p");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = item.title;

        bookAuthor = document.createElement("p");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = item.author;

        bookPagesNum = document.createElement("p");
        bookPagesNum.classList.add("book-pages");
        bookPagesNum.textContent =`${item.pages} pages`;

        readStatus = document.createElement("p");
        readStatus.classList.add("book-pages");
        readStatus.textContent = `${item.read}`;

        removeButton = document.createElement("button");
        removeButton.setAttribute("id", "remove-btn");
        removeButton.textContent = "REMOVE";

        statusButton = document.createElement("button");
        statusButton.setAttribute("id", "status-btn");
        statusButton.textContent = "I HAVEN'T READ IT";
        //append to the card
        bookCard.append(bookTitle, bookAuthor, bookPagesNum, removeButton, statusButton);
        //append card to the library
        libraryDisplay.append(bookCard);

    }
}

// add new book button function
addNewBook.addEventListener("click", () => {
    dialogBox.show();
    // submitBook();
})
submitBtn.addEventListener("click", (event) => {
    dialogBox.close();
    //not sure if this is needed
    event.preventDefault();
    //
    submitBook();
})

// function to upload the book onto the card
function submitBook() {
    // gather info
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    // pass through constructor
    let book = new Book(title, author, pages);
    // add and display
    addBooktoLibrary(book);
    displayBooks(library);
}

// create function for remove button
// doesn't work
function removeBook() {
    library.splice(1);
}
removeButton.addEventListener("click", removeBook(index));