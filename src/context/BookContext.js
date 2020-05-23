import React, { createContext, useState, useReducer } from "react";
import { BookReducer } from "../reducer/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer,[
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

  return (
    <BookContext.Provider value={{books,dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
