import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Ghostman from './Ghostman';

describe('Ghostman component', () => {
  
  it('renders Ghostman', async () => {
    render(<Ghostman />);
    
    const url = screen.getByRole('textbox', { name: 'api-url' });
    userEvent.type(url, 'https://personal-ghosts.herokuapp.com/ghosts/');
    expect(url).toMatchSnapshot();

    const getRadio = screen.getByRole('radio', { name: 'get' });
    expect(getRadio).toMatchSnapshot();
    userEvent.click(getRadio);
    expect(getRadio).toBeChecked();

    const postRadio = screen.getByRole('radio', { name: 'post' });
    expect(postRadio).toMatchSnapshot();
    userEvent.click(postRadio);
    expect(postRadio).toBeChecked();

    const putRadio = screen.getByRole('radio', { name: 'put' });
    expect(putRadio).toMatchSnapshot();
    userEvent.click(putRadio);
    expect(putRadio).toBeChecked();

    const deleteRadio = screen.getByRole('radio', { name: 'delete' });
    expect(deleteRadio).toMatchSnapshot();
    userEvent.click(deleteRadio);
    expect(deleteRadio).toBeChecked();

    const jsonText = screen.getByRole('textbox', { name: 'json-input' });
    userEvent.type(jsonText, 'yikes!');
    expect(jsonText).toMatchSnapshot();

    screen.getByText('{}');
    screen.getByRole('list', { name: 'history' });

    const button = screen.getByRole('button', { name: 'submit' });
    expect(button).toMatchSnapshot();
    userEvent.type(url, 'https://personal-ghosts.herokuapp.com/ghosts/1/');
    //getRoute test
    userEvent.click(getRadio);
    await userEvent.click(button);
    await screen.getByText('your ghosts will be with you shortly');
    //postRoute 
    userEvent.type(url, 'https://personal-ghosts.herokuapp.com/ghosts/');
    userEvent.type(jsonText, `{ghost}`);
    userEvent.click(postRadio);
    await userEvent.click(button);
    //putRoute test
    userEvent.type(url, 'https://personal-ghosts.herokuapp.com/ghosts/100');
    userEvent.type(jsonText, `{ghost}`);
    userEvent.click(putRadio);
    await userEvent.click(button);
    //deleteRoute test
    userEvent.type(url, 'https://personal-ghosts.herokuapp.com/ghosts/100');
    userEvent.click(deleteRadio);
    await userEvent.click(button);

  });
});
