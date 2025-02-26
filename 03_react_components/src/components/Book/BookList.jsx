import BookItem from "./BookItem";
const BookList = ({ books, onDelete, onEdit, onViewDetail }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  );
};

export default BookList;
