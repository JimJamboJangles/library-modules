var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var listBooks = function() {
    for (var i = 0; i < books.length; i++) {
      console.log(books[i].getAttribute('title'));
    }
  }

  var checkOutBook = function(book) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].getAttribute('title') == book.getAttribute('title')) {
        console.log(books[i]['checkedOut']);
        books[i].setAttribute('checkedOut', true);
      }
    }

  };
  var returnBook = function(book) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].getAttribute('title') == book.getAttribute('title')) {

        books[i].setAttribute('checkedOut', false);
      }
    }
  }
  return {
    addBook: addBook,
    returnBook: returnBook,
    checkOutBook: checkOutBook,
    listBooks: listBooks
  };
};

var Book = function(title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };

  var getAttribute = function(attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }

  };
  var setAttribute = function(attribute, value) {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
};
var library = Library();
