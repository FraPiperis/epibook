// MyNav.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaSearch } from 'react-icons/fa'; // Icone per la navbar

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="" // Sostituisci con il tuo logo
            alt="Logo"
            className="d-inline-block align-top"
          />{' '}
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link href="#about">
              <FaInfoCircle /> About
            </Nav.Link>
            <Nav.Link href="#browse">
              <FaSearch /> Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
