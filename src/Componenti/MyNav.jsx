// MyNav.jsx
import React from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';

const MyNav = ({ searchTerm, setSearchTerm }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
          {/* Campo di ricerca */}
          <Form className="d-flex ms-3">
            <FormControl
              type="search"
              placeholder="Search books..."
              className="me-2"
              value={searchTerm} // Legge il valore dallo stato di App
              onChange={(e) => setSearchTerm(e.target.value)} // Aggiorna lo stato di App
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
