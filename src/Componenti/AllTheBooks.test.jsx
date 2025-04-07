import React from 'react';
import { render, screen } from '@testing-library/react';
import AllTheBooks from './AllTheBooks'; 
import books from '../assets/Books/horror.json'; 

test('renders the correct number of cards', () => {
 
  render(<AllTheBooks searchTerm="" setSelectedBook={() => {}} />);

  // Verifica che il numero di card corrisponde al numero di libri nel file JSON
  const cards = screen.getAllByRole('img'); 
  expect(cards.length).toBe(books.length);
});