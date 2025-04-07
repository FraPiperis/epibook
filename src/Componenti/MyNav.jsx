// MyNav.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link da React Router

const MyNav = ({ searchTerm, setSearchTerm }) => {
  return (
    <Navbar bg="dark" className='navbar' variant="dark" expand="lg" fixed="top">
      <Container className='container' fluid>
        {/* Link per tornare alla home */}
        <Navbar.Brand as={Link} to="/">
          EPIBOOK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Link per tornare alla home */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;