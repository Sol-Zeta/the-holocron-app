import React from 'react';
import { screen } from '@testing-library/react';
import Card from '.';
import { MOCK_CHARACTER } from '../../utils/__mocks__/character';
import { renderWithRedux } from '../../utils/test-utils';
import { getDateString } from '../../utils';

describe('<Card />', () => {
  it('it should mount', () => {
    renderWithRedux(<Card data={MOCK_CHARACTER} />);
    const cardEl = screen.getByTestId('Card');
    expect(cardEl).toBeInTheDocument();
  });

  it('it should render the correct character datadata', () => {
    renderWithRedux(<Card data={MOCK_CHARACTER} />);
    const created = getDateString(MOCK_CHARACTER.created);
    const edited = getDateString(MOCK_CHARACTER.edited);
    expect(screen.getByText(MOCK_CHARACTER.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Gender: ${MOCK_CHARACTER.gender}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Created on ${created}`)).toBeInTheDocument();
    expect(screen.getByText(`Update on ${edited}`)).toBeInTheDocument();
  });

  it('it should render a link with the correct href', () => {
    renderWithRedux(<Card data={MOCK_CHARACTER} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/${MOCK_CHARACTER.id}`);
  });
});
