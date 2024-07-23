import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
import { MOCK_CHARACTER } from '../../__mocks__/character';

describe('<Card />', () => {
  it('it should mount', () => {
    render(<Card data={MOCK_CHARACTER} />);
    const card = screen.getByTestId('Card');
    expect(card).toBeInTheDocument();
  });
  it('it should render data.name', () => {
    render(<Card data={MOCK_CHARACTER} />);
    const characterName = screen.getByText(MOCK_CHARACTER.name);
    expect(characterName).toBeInTheDocument();
  });
});
