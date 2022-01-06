/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('ReadyCompete links to home page', async () => {
    setup();

    const link = screen.getByRole('link', { name: /ReadyCompete/i });
    userEvent.click(link);
    await waitFor(() => expect(document.title).toMatch(/RC | ReadyCompete Home/i));
  });

  it('TV links to correct page', () => {
    setup();

    const link = screen.getAllByRole('link', { name: /Arena TV/i });

    userEvent.click(link[0]);
    expect(document.title).toMatch(/RC | Arena TV/i);

    userEvent.click(link[1]);
    expect(document.title).toMatch(/RC | Arena TV/i);
  });
});
