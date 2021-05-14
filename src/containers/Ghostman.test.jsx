import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Ghostman from './Ghostman';

describe('Ghostman component', () => {
  
  it('renders Ghostman', () => {
    render(<Ghostman />);
    
    // screen.getByText('your ghosts will be with you shortly');

    const url = screen.getByRole('textbox', {name: 'api-url'})
    userEvent.type(url, 'https://personal-ghosts.herokuapp.com/ghosts/')
    expect(url).toMatchSnapshot();
    
  });
});
