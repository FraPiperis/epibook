import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import horror from 'src/assets/Books/horror.json'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ThemeContext } from '../../modules/context';
import SingleBook from './Componenti/SingleBook.jsx'; 

export default function AllTheBooks({ books, selectedAsin, setSelectedAsin }) {
  const [theme, setTheme] = useContext(ThemeContext)
  const [visibleBooks, setvisibleBooks] = useState(8);
  
  const loadMoreBooks = () => {
  setvisibleBooks(prevVisibleBooks => prevVisibleBooks + 8 )}


  return (
    <>
    <Container className="mt-4">
        <Row className="mt-5 mb-4">
          <Col>
            <h2 className={`text-${theme === 'dark' ? 'dark' : 'light'} fw-bold text-center`}>Horror Section</h2>
          </Col>
        </Row>
        <Row>
          {books.slice(0, visibleBooks).map((book) => (
            <SingleBook key={book.asin} book={book} selectedAsin={selectedAsin} setSelectedAsin={setSelectedAsin} />
          ))}
        </Row>
        {visibleBooks < horrorbooks.length && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant={theme} onClick={loadMoreBooks}>
                <span><i className="bi bi-download me-2"></i></span>Set More</Button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}