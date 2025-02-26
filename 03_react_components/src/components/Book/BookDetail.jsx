import React, { useState } from "react";

function BookDetail({ book, onSave, isEditing }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [year, setYear] = useState(book.year);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(book.id, { title, author, year });
  };

  return (
    <div className="book-detail">
      <h2>{isEditing ? "编辑图书" : "图书详情"}</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <button type="submit">保存</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>书名:</strong> {book.title}
          </p>
          <p>
            <strong>作者:</strong> {book.author}
          </p>
          <p>
            <strong>出版年份:</strong> {book.year}
          </p>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
