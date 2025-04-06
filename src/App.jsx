import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponents from './Componenti/MyNav.jsx';
import FooterComponent from './Componenti/Footer.jsx';
import allBooks from './assets/Books/allBooks';
import { ThemeContext } from './modules/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import NotFoundComponent from './Componenti/NotFound.jsx';
import DetailPage from './assets/pages/DetailPage.jsx';


function App() {

  const [books, setBooks] = useState(allBooks)
  const [search, setSearch] = useState('')
  const [theme, setTheme] = useState('light')
  const [selectedAsin, setSelectedAsin] = useState(null)
  
  const handleSearch = (searchValue) => {
      setSearch (searchValue)
      
      const filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))
      setBooks(filteredBooks)  
    }
  

  return (
    <div className="app-container">
      <BrowserRouter>
      <ThemeContext.Provider value={[ theme, setTheme ]}>
      <NavbarComponents search={search} onSearchChange={handleSearch} />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage books={books} selectedAsin={selectedAsin} setSelectedAsin={setSelectedAsin} />} />
        <Route path="/details/:asin" element={<DetailPage />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
      </main>
      <FooterComponent />
      </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
