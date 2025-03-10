import React from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const { bookId } = useParams();

  return (
    <div>
      <h1>Book Page</h1>
      <p>BookId: {bookId}</p>
    </div>
  );
};

export default Book;
