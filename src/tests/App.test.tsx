/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../pages/main';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders main component', () => {
  const wrapper = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(wrapper.contains(<Main />)).toEqual(true);
});

it('renders ReadyCompete text', () => {
  const layout = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const titleElement = layout.getByText(/ReadyCompete/i);
  expect(titleElement).toBeInTheDocument();
});
