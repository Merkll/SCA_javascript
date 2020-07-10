import BookList from "./BookList";
import Book from "./Books";

const bookList =  new BookList()

const bookA = new Book('Harry porter', 'adventure', 'JK');
const bookB = new Book('Harry porter', 'adventure', 'JK');


bookList.add(bookA)
bookList.add(bookB)
console.log(bookList.currentBook);
console.log(bookList.bookToRead);
bookList.readBook()
console.log(bookList.bookToRead);
console.log(bookList.currentBook);
bookList.finishCurrentBook()
bookList.readBook()
console.log(bookList.bookToRead);
console.log(bookList.currentBook);
