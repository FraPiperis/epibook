import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Componenti/MyNav'; // Importa la Navbar
import AllTheBooks from './Componenti/AllTheBooks'; // Componente AllTheBooks
import CommentArea from './Componenti/CommentArea'; // Importa CommentArea

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Stato per il campo di ricerca
  const [selectedBook, setSelectedBook] = useState(null); // Stato per il libro selezionato (ASIN)

  return (
    <div>
      <MyNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mt-4">
        <div className="row">
          {/* Colonna sinistra: lista dei libri */}
          <div className="col-md-8">
            <AllTheBooks searchTerm={searchTerm} setSelectedBook={setSelectedBook} />
          </div>
          {/* Colonna destra: CommentArea */}
          <div className="col-md-4">
            {selectedBook ? (
              <CommentArea asin={selectedBook} />
            ) : (
              <p className="text-center">Seleziona un libro per vedere i commenti</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


