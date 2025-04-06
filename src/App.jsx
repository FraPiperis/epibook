import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa React Router
import MyNav from './Componenti/MyNav'; // Importa la Navbar
import AllTheBooks from './Componenti/AllTheBooks'; // Componente AllTheBooks
import CommentArea from './Componenti/CommentArea'; // Importa CommentArea
import BookDetails from './Componenti/BookDetails'; // Importa BookDetails
import NotFound from './Componenti/NotFound'; // Importa il componente NotFound

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Stato per il campo di ricerca
  const [selectedBook, setSelectedBook] = useState(null); // Stato per il libro selezionato (ASIN)

  return (
    <Router>
      <MyNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mt-4">
        <Routes>
          {/* Rotta per l'homepage */}
          <Route
            path="/"
            element={
              <div className="row">
                {/* Colonna sinistra: lista dei libri */}
                <div className="col-md-8">
                  <AllTheBooks
                    searchTerm={searchTerm}
                    setSelectedBook={setSelectedBook}
                    selectedBook={selectedBook} // Passa il libro selezionato
                  />
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
            }
          />
          {/* Rotta per BookDetails */}
          <Route path="/book/:asin" element={<BookDetails />} />
          {/* Rotta per gestire tutte le altre rotte */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;