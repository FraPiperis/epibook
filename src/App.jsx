import React, { useState } from 'react';
import MyNav from './Componenti/MyNav';
import AllTheBooks from './Componenti/AllTheBooks';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Stato per il valore di ricerca
  const [searchQuery, setSearchQuery] = useState('');

  // Funzione per aggiornare il valore di ricerca
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Passa il valore di searchQuery e la funzione per aggiornare lo stato a MyNav */}
      <MyNav searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      
      {/* Passa searchQuery a AllTheBooks per filtrare i libri */}
      <AllTheBooks searchQuery={searchQuery} />
    </div>
  );
};

export default App;
