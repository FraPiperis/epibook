// SingleBook.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleBook = ({ book, setSelectedBook, isSelected }) => {
  const navigate = useNavigate(); // Hook per navigare tra le rotte

  const handleBookClick = () => {
    setSelectedBook(book.asin);
  };

  return (
    <div
      className="card mb-4"
      style={{
        border: isSelected ? '2px solid red' : '1px solid #ddd', // Bordo rosso se selezionato
        cursor: 'pointer',
      }}
      onClick={handleBookClick} 
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
        {/* Pulsante per navigare a BookDetails */}
        <button 
          className="btn btn-outline-dark mt-2"
          onClick={() => navigate(`/book/${book.asin}`)}
        >
          Dettagli
        </button>
      </div>
    </div>
  );
};

export default SingleBook;