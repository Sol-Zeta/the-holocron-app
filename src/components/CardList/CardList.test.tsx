import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from '.';
import { MOCK_CHARACTERS_LIST } from '../../__mocks__/charactersList';
import { renderWithRedux } from '../../utils/test-utils';

describe('<CardList />', () => {
  test('it should mount', () => {
    const initialState = {
      page: '1',
      total: 0,
      charactersPages: {},
    };
    renderWithRedux(<CardList cards={[]} page={'1'} total={1} />, {
      initialState,
    });
    screen.getByTestId('CardList');
  });
  test('it should render one card per item in cards props', () => {
    const initialState = {
      page: '1',
      total: 82,
      charactersPages: { '1': MOCK_CHARACTERS_LIST },
    };
    renderWithRedux(
      <CardList cards={MOCK_CHARACTERS_LIST} page={'1'} total={82} />,
      {
        initialState,
      }
    );
    const cards = screen.getAllByTestId('Card');
    expect(cards).toHaveLength(MOCK_CHARACTERS_LIST.length);
  });
});
