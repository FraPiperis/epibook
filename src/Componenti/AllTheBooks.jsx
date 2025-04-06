import React from 'react';
import books from '../assets/Books/horror.json'; // Importa i dati dei libri
import SingleBook from './SingleBook'; // Importa il componente SingleBook

const AllTheBooks = ({ searchTerm, setSelectedBook, selectedBook }) => {
  // Filtra i libri in base al titolo usando il valore di searchTerm
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-4">All The Books</h2>
      <div className="row">
        {filteredBooks.map((book) => (
          <div key={book.asin} className="col-md-4">
            <SingleBook
              book={book}
              setSelectedBook={setSelectedBook}
              isSelected={selectedBook === book.asin} // Passa se il libro è selezionato
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTheBooks;