import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Ghostman from './Ghostman';

describe('Ghostman component', () => {
  
  it('renders Ghostman', () => {
    render(<Ghostman />);
    
    // screen.getByText('your ghosts will be with you shortly');

    const url = screen.getByRole('textbox', { name: 'api-url' })
    userEvent.type(url, 'https://personal-ghosts.herokuapp.com/ghosts/')
    expect(url).toMatchSnapshot();

    const getRadio = screen.getByRole('radio', { name: 'get' })
    expect(getRadio).toMatchSnapshot();
    userEvent.click(getRadio);
    expect(getRadio).toBeChecked();

    const postRadio = screen.getByRole('radio', { name: 'post' })
    expect(postRadio).toMatchSnapshot();
    userEvent.click(postRadio);
    expect(postRadio).toBeChecked();

    const putRadio = screen.getByRole('radio', { name: 'put' })
    expect(putRadio).toMatchSnapshot();
    userEvent.click(putRadio);
    expect(putRadio).toBeChecked();

    const deleteRadio = screen.getByRole('radio', { name: 'delete' })
    expect(deleteRadio).toMatchSnapshot();
    userEvent.click(deleteRadio);
    expect(deleteRadio).toBeChecked();

    const jsonText = screen.getByRole('textbox', { name: 'json-input' })
    userEvent.type(jsonText, 'yikes!')
    expect(jsonText).toMatchSnapshot();

    const button = screen.getByRole('button', { name: 'submit' })
    expect(button).toMatchSnapshot();
    
  });
});
