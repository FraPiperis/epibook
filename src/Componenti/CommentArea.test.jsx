import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentArea from './CommentArea';
import '@testing-library/jest-dom';

test('renders CommentArea component correctly', () => {
 
  render(<CommentArea asin="12345" />);

  // Verifico che il titolo "Comments" sia presente
  expect(screen.getByText(/Comments/i)).toBeInTheDocument();

  // Verifico che il componente mostri il caricamento iniziale
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});