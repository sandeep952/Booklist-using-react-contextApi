import React from "react";
import Book from "./components/Book";
import BookContextProvider, { BookContext } from "./context/BookContext";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <BookContextProvider>
      <div className="container">
        <h1 className="title is-1">BookList App</h1>
        <AddBook/>
        <BookList />
      </div>
    </BookContextProvider>
  );
}

export default App;
