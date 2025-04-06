import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1>404 - Pagina non trovata</h1>
      <p>La pagina che stai cercando non esiste.</p>
      <Link to="/" className="btn btn-primary">
        Torna alla Home
      </Link>
    </div>
  );
};

export default NotFound;