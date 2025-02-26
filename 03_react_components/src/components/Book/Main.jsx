import { useState } from "react";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./Main.css";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // 添加图书
  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  // 删除图书
  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    setSelectedBook(null);
  };

  // 编辑图书
  const handleEdit = (book) => {
    setSelectedBook(book);
    setIsEditing(true);
  };

  // 查看详情
  const handleViewDetail = (book) => {
    setSelectedBook(book);
    setIsEditing(false);
  };

  // 保存编辑
  const saveEdit = (id, updatedBook) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
    setSelectedBook(null);
    setIsEditing(false);
  };

  return (
    <div className="app">
      <h1>图书管理系统</h1>
      <BookInput addBook={addBook} />
      <BookList
        books={books}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onViewDetail={handleViewDetail}
      />
      {selectedBook && (
        <BookDetail
          book={selectedBook}
          onSave={saveEdit}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default Main;
