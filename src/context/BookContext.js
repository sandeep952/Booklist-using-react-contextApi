import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "book1",
      id: 1,
    },
    {
      name: "book2",
      id: 2,
    },
    {
      name: "book3",
      id: 3,
    },
  ]);

  const addBook = (bookName) => {
    if (!bookName) {
      return;
    }
    setBooks([
      ...books,
      {
        name: bookName,
        id: uuidv1(),
      },
    ]);
  };

  const removeBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks([...updatedBooks]);
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
