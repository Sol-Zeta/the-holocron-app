import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Home from '..';

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);

  });
});