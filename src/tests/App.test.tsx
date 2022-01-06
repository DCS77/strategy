/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Main from '../pages/main';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders main component', () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.contains(<Main />)).toEqual(true);
  });

  it('ReadyCompete links to home page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /ReadyCompete/i });
    userEvent.click(link);
    await waitFor(() => expect(document.title).toMatch(/RC | ReadyCompete Home/i));
  });

  it('TV links to correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const link = screen.getAllByRole('link', { name: /Arena TV/i });

    userEvent.click(link[0]);
    expect(document.title).toMatch(/RC | Arena TV/i);

    userEvent.click(link[1]);
    expect(document.title).toMatch(/RC | Arena TV/i);
  });
});
