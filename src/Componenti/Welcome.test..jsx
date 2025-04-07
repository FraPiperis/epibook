
import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome'; // Importa il componente Welcome

test('renders Welcome component correctly', () => {
  // Renderizza il componente
  render(<Welcome />);

  // Verifica che il testo specifico sia presente nel DOM
  expect(screen.getByText(/Benvenuto/i)).toBeInTheDocument();
});