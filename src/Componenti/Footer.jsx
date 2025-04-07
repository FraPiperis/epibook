import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container fluid className="text-center">
        <p className="mb-0">© 2025 Epibook. Tutti i diritti riservati.</p>
        <p className="mb-0">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="text-light">
            Privacy Policy
          </a>
          {' | '}
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="text-light">
            Termini e Condizioni
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
