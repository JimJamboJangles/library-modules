var Library = function() {
  var books = []

  var addBook = function(book) {
    books.push(book);

  }
  var checkOutBook = function(book) {

    if (Library[book]) {
      book[checkedOut] = true;
    } else {
      console.log("Error");
    }
  }
  var returnBook = function(book) {

  }
  return {
    addBook: addBook,
    returnBook: returnBook,
    checkOutBook: checkOutBook
  }
};

var Book = function() {
  var attributes {

  }
  var getAttribute = function(attribute) {
    if (Book[attribute]) {
      return Book[attribute];
    }
  };
  var setAttribute = function(attribute) {
    if (Book[attribute]) {
      Book[attribute] = attribute;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
};
