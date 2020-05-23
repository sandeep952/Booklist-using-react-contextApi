export const BookReducer = (books, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...books,
        action.book,
      ];

    case "REMOVE_BOOK":
      const updatedBooks = books.filter((book) => book.id !== action.id);
      return [
        ...updatedBooks,
      ];

    default:
      return books;
  }
};
