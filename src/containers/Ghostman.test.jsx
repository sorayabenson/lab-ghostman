import React from 'react';
import { render, screen } from '@testing-library/react';
import Ghostman from './Ghostman';

describe('Ghostman component', () => {
  
  it('renders Ghostman', () => {
    render(<Ghostman />);
    
    screen.getByText('your ghosts will be with you shortly');
  });
});
