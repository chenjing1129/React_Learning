const BookItem = ({ book, onDelete, onEdit, onViewDetail }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>作者: {book.author}</p>
      <p>出版年份: {book.year}</p>
      <div className="book-item-actions">
        <button onClick={() => onViewDetail(book)}>详情</button>
        <button onClick={() => onEdit(book)}>编辑</button>
        <button onClick={() => onDelete(book.id)}>删除</button>
      </div>
    </div>
  );
};

export default BookItem;
