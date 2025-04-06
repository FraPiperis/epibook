import React, { useState } from 'react';

const SingleBook = ({ book, setSelectedBook }) => {
  const [selected, setSelected] = useState(false); // Stato per la selezione visiva del libro

  const handleBookClick = () => {
    setSelected(!selected); // Cambia lo stato visivo
    setSelectedBook(book.asin); // Imposta il libro selezionato
  };

  return (
    <div
      className="card mb-4"
      style={{
        border: selected ? '2px solid red' : '1px solid #ddd', // Bordo rosso se selezionato
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