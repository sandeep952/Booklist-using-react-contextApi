import React from "react";
import Book from "./components/Book";
import BookContextProvider, { BookContext } from "./context/BookContext";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <BookContextProvider>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="title is-1">BookList App</h1>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <AddBook />
            <BookList />
          </div>
        </div>
      </div>
    </BookContextProvider>
  );
}

export default App;
