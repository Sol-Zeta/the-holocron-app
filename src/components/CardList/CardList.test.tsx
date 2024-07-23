import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from '.';

describe('<CardList />', () => {
  test('it should mount', () => {
    render(<CardList />);

    const CardList = screen.getByTestId('CardList');

    expect(CardList).toBeInTheDocument();
  });
});