// SingleBook.jsx
import React from 'react';

const SingleBook = ({ book, setSelectedBook }) => {
  const handleBookClick = () => {
    setSelectedBook(book.asin); // Imposta il libro selezionato
  };

  return (
    <div
      className="card mb-4"
      style={{
        border: '1px solid #ddd', // Bordo standard
        cursor: 'pointer',
      }}
      onClick={handleBookClick} // Gestore del click
    >
      <img
        src={book.img}
        className="card-img-top"
        alt={book.title}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Price: ${book.price}</p>
        <p className="card-text">Category: {book.category}</p>
      </div>
    </div>
  );
};

export default SingleBook;