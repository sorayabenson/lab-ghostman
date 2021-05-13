import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Ghostman from './Ghostman';

describe('Ghostman component', () => {
  
  it('renders Ghostman', () => {
    render(<Ghostman />);
    
  });
});
