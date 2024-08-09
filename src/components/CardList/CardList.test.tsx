import React from 'react';
import { screen } from '@testing-library/react';
import CardList from '.';
import { MOCK_CHARACTERS_LIST } from '../../utils/__mocks__/charactersList';
import { renderWithRedux } from '../../utils/test-utils';

describe('<CardList />', () => {
  it('it should mount', () => {
    let cardListProps = {
      cards: [],
      page: '1',
      total: 1,
    };
    renderWithRedux(<CardList {...cardListProps} />);
    expect(screen.getByTestId('CardList')).toBeInTheDocument();
  });

  it('it should render one card per item in cards props', () => {
    const cardListProps = {
      cards: MOCK_CHARACTERS_LIST,
      page: '1',
      total: 82,
    };
    renderWithRedux(<CardList {...cardListProps} />);
    const cards = screen.getAllByTestId('Card');
    expect(cards).toHaveLength(MOCK_CHARACTERS_LIST.length);
  });

  it('should render Pagination component when total is greater than 0', () => {
    const cardListProps = {
      cards: MOCK_CHARACTERS_LIST,
      page: '1',
      total: 82,
    };
    renderWithRedux(<CardList {...cardListProps} />);
    expect(screen.getByTestId('Pagination')).toBeInTheDocument();
  });

  it('should not render Pagination component when total is 0', () => {
    const cardListProps = {
      cards: [],
      page: '1',
      total: 0,
    };
    renderWithRedux(<CardList {...cardListProps} />);
    expect(screen.queryByTestId('Pagination')).not.toBeInTheDocument();
  });
});
