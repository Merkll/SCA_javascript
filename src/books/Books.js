class Book {
  read = false;
  readDate = null;

  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
  }

  markAsRead() {
    this.read = true;
    this.readDate = new Date(Date.now())
  }
}

export default Book
