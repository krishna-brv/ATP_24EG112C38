// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise


class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow(){
        this.isAvailable=false;
    }
    returnBook(){
        this.isAvailable=true;
    }
    getInfo(){
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }
    isLongBook(){
        return this.pages>300;
    }
}

// create 5 books
let books=[new Book("Book1","Author","500",true),
new Book("Book2","Author","200",true),
new Book("Book3","Author","400",true),
new Book("Book4","Author","600",true),
new Book("Book5","Author","100",true)];

//   2. Perform the following operations:
//       i. Display info of all books
    
for(let i=0;i<books.length;i++){
    console.log(books[i].getInfo());
}

//       ii. Borrow 2 books and show their availability status
    books[0].borrow();
    console.log(books[0].isAvailable);
    books[2].borrow();
    console.log(books[2].isAvailable);
    
//       iii. Return 1 book and show updated status
    books[0].returnBook();
    console.log(books[0].isAvailable);
    
//       iv. Count how many books are "long books" (more than 300 pages)
    
    let count=0;
    for(let i=0;i<books.length;i++){
        if(books[i].pages>300)count++;
    }
    console.log(count);

//       v. List all available books
    for(let i=0;i<books.length;i++){
        if(books[i].isAvailable)console.log(books[i].getInfo());
    }
