import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '.';

describe('<Card />', () => {
  test('it should mount', () => {
    render(<Card />);

    const Card = screen.getByTestId('Card');

    expect(Card).toBeInTheDocument();
  });
});