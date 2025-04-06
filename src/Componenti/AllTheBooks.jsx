import React, { useState, useEffect } from 'react';
import SingleBook from './SingleBook'; // Assicurati di importare SingleBook
import { Container, Row, Col, Form } from 'react-bootstrap';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Stato per gestire il valore dell'input

  // Caricamento dei libri dal file JSON
  useEffect(() => {
    fetch('./horror.json') // Assicurati che il percorso sia corretto
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error loading books:', error));
  }, []);

  // Funzione per gestire il cambiamento dell'input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Aggiorna lo stato con il valore dell'input
  };

  // Filtra i libri in base al titolo
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) // Ignora maiuscole/minuscole
  );

  return (
    <Container>
      {/* Campo di input per la ricerca */}
      <Form.Group controlId="search">
        <Form.Label>Cerca un libro</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Cerca per titolo" 
          value={searchQuery} // Il valore dell'input è controllato
          onChange={handleSearchChange} // Gestisce il cambiamento dell'input
        />
      </Form.Group>

      <Row>
        {filteredBooks.map((book, index) => (
          <Col key={index} md={4} className="mb-4">
            {/* Per ogni libro, rendi il componente SingleBook */}
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );

  
};

export default AllTheBooks;


 

