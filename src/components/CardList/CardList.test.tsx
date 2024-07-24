import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from '.';
import { MOCK_CHARACTERS_LIST } from '../../__mocks__/charactersList';

describe('<CardList />', () => {
  test('it should mount', () => {
    render(<CardList cards={[]} />);
    screen.getByTestId('CardList');
  });
  test('it should render one card per item in cards props', () => {
    render(<CardList cards={MOCK_CHARACTERS_LIST} />);
    const cards = screen.getAllByTestId('Card');
    expect(cards).toHaveLength(MOCK_CHARACTERS_LIST.length);
  });
});
