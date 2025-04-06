
// App.jsx
import React from 'react';
import MyNav from './Componenti/MyNav';  // Importa la Navbar
import MyFooter from './Componenti/MyFooter';  // Importa il Footer
import Welcome from './Componenti/Welcome';  // Importa il componente Welcome

const App = () => {
  return (
    <div>
      <MyNav />  {/* Inserisci la Navbar */}
      <Welcome />  {/* Inserisci il componente Welcome */}
      <MyFooter />  {/* Inserisci il Footer */}
    </div>
  );
};

export default App;

