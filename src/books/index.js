import BookList from "./BookList";
import Book from "./Books";

const bookList =  new BookList()

const bookA = new Book('Harry porter', 'adventure', 'JK');

bookList.add(bookA)

console.log(bookList.bookToRead);