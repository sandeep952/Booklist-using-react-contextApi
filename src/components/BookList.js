import React, { useContext } from "react";
import Book from "./Book";
import { BookContext } from "../context/BookContext";

const BookList = () => {
    const {books} = useContext(BookContext)
    return (
    <React.Fragment>
      {books.map((book) => (
        <Book key={book.id} name={book.name} id={book.id}/>
      ))}
    </React.Fragment>
  );
};

export default BookList;
