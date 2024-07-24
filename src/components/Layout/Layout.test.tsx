import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '.';

describe('<CardList />', () => {
  test('it should mount', () => {
    render(<Layout>Layout</Layout>);
    screen.getByTestId('Layout');
  });
});