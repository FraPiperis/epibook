// App.jsx
import React from 'react';
import MyNav from './MyNav';  // Importa la Navbar
import MyFooter from './MyFooter';  // Importa il Footer

const App = () => {
  return (
    <div>
      <MyNav />  {/* Inserisci la Navbar */}
      <div style={{ minHeight: '80vh' }}>
        {/* Altri contenuti dell'app */}
        <h1 className="text-center mt-5">Welcome to MyApp</h1>
      </div>
      <MyFooter />  {/* Inserisci il Footer */}
    </div>
  );
};

export default App;
