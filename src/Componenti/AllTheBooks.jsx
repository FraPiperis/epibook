import React, { useState } from 'react';
import books from '../assets/Books/horror.json'; 
import SingleBook from './SingleBook'; 

const AllTheBooks = ({ searchTerm, setSelectedBook }) => {
  const [visibleBooks, setVisibleBooks] = useState(9); 

  
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Funzione per caricare altri 10 libri
  const loadMoreBooks = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 9);
  };

  return (
    <div>
      <h2 className="mb-4">All The Books</h2>
      <div className="row">
        {filteredBooks.slice(0, visibleBooks).map((book) => (
          <div key={book.asin} className="col-md-4">
            <SingleBook book={book} setSelectedBook={setSelectedBook} />
          </div>
        ))}
      </div>
      {visibleBooks < filteredBooks.length && (
        <div className="text-center mt-4">
          <button
            className="btn btn-dark my-4"
            onClick={loadMoreBooks}
          >
            Vedi di più
          </button>
        </div>
      )}
    </div>
  );
};

export default AllTheBooks;