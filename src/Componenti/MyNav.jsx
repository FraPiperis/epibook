import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const MyNav = ({ searchQuery, onSearchChange }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Book App</Navbar.Brand>
      <Nav className="mr-auto">
        <Form inline>
          {/* Input di ricerca, il valore è gestito da App tramite searchQuery */}
          <FormControl
            type="text"
            placeholder="Cerca un libro"
            className="mr-sm-2"
            value={searchQuery}  // Valore preso da App
            onChange={onSearchChange}  // Funzione per aggiornare lo stato di App
          />
          <Button variant="outline-info">Cerca</Button>
        </Form>
      </Nav>
    </Navbar>
  );
};

export default MyNav;
