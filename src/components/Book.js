import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { removeBook } from "../reducer/bookActions";

const Book = ({ name, id }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div className="block">
      <div className="notification">
        <button className="delete" onClick={() => dispatch(removeBook(id))} />
        <div className="title is-2">{name}</div>
      </div>
    </div>
  );
};

export default Book;
