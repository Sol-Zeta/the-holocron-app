import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Home from '../pages';

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);

  });
});