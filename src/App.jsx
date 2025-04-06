import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './Componenti/MyNav';
import AllTheBooks from './Componenti/AllTheBooks';
import CommentArea from './Componenti/CommentArea';
import BookDetails from './Componenti/BookDetails';
import NotFound from './Componenti/NotFound';
import Footer from './Componenti/Footer'; // Importa il Footer

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <MyNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="container mt-4 flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <div className="row">
                  <div className="col-md-8">
                    <AllTheBooks
                      searchTerm={searchTerm}
                      setSelectedBook={setSelectedBook}
                      selectedBook={selectedBook}
                    />
                  </div>
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
            <Route path="/book/:asin" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer /> {/* Aggiungi il Footer */}
      </div>
    </Router>
  );
};

export default App;