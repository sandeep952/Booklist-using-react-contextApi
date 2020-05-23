import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Book = ({ name, id }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <div className="block">
      <div className="notification">
        <button className="delete" onClick={() => removeBook(id)} />
        <div className="title is-2">{name}</div>
      </div>
    </div>
  );
};

export default Book;
