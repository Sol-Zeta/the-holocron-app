import React from 'react';
import { screen } from '@testing-library/react';
import SearchInput from '.';
import { renderWithRedux } from '../../utils/test-utils';

describe('<SearchInput />', () => {
  test('it should mount', () => {
    const initialState = {
      page: '1',
      total: 0,
      charactersPages: {},
    };
    renderWithRedux(<SearchInput />);
    const SearchInputEl = screen.getByTestId('SearchInput');
    expect(SearchInputEl).toBeInTheDocument();
  });
});
