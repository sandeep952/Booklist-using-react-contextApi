import { v1 as uuidv1 } from "uuid";
export const addBook = (bookName) => {
  return {
    type: "ADD_BOOK",
    book: {
      name: bookName,
      id: uuidv1(),
    }
  };
};

export const removeBook = (id) => {
  return {
      type:'REMOVE_BOOK',
      id
  }
};
