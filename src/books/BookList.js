class BookList {
  currentBook = null;
  bookList = [];

  add(book) {
    this.bookList = this.bookList.push(book)
  }

  get bookToRead() {
    if (!this.currentBook) this.currentBook = 0;

    return this.currentBook
  }

  get numberOfBooks() {
    return this.bookList.length
  }

  get numberNotRead() {
    return this.numberOfBooks - this.numberRead
  }

  get numberRead() {
    return this.currentBook
  }
  
  get lastBookRead() {
    const lastBook = this.currentBook - 1

    return lastBook >= 0 ? lastBook : null 
  }

  addFromTitle(bookTitle, author, genre) {
    // TODO: implement functionality
  }

  finishCurrentBook() {
    const currentBook = this.bookList[this.currentBook]

    if (currentBook) currentBook.markAsRead()

    const nextBook =  this.currentBook + 1 

    this.currentBook = (this.bookList.length - 1) >= nextBook ? nextBook : null
  }

}

export default BookList;
