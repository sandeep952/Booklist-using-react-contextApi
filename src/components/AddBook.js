import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { addBook } from "../reducer/bookActions";

const AddBook = () => {
  const { dispatch } = useContext(BookContext);
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      return;
    }
    dispatch(addBook(name));
    setName("");
  };

  return (
    <div className="block">
      <form>
        <div className="columns is-centered is-vcentered">
          <div className="column ">
            <div className="field">
              <input
                type="text"
                className="input"
                placeholder="Enter Book name"
                value={name}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="button is-primary"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddBook;
