import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const AddBook = () => {
  const { addBook } = useContext(BookContext);
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(name);
    setName("");
  };

  return (
    <div>
      <form>
        <div className="field">
          <label className="label"> Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Book name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button is-primary" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};
export default AddBook;
