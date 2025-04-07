
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import books from '../assets/Books/horror.json';
import CommentArea from './CommentArea';
import './BookDetails.css';

const BookDetails = () => {
  const { asin } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const selectedBook = books.find((b) => b.asin === asin);
    setBook(selectedBook);
  }, [asin]);

  if (!book) {
    return <p>Caricamento dettagli del libro...</p>;
  }

  return (
    <div className="book-details-container">
      <h1 className="book-title">{book.title}</h1>
      <img
        src={book.img}
        alt={book.title}
        className="book-image"
      />
      <p><strong>Categoria:</strong> {book.category}</p>
      <p><strong>Prezzo:</strong> ${book.price}</p>
      <hr />
      <h3>Recensioni</h3>
      <CommentArea asin={asin} />
    </div>
  );
};

export default BookDetails;