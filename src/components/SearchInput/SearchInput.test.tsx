import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import SearchInput from '.';
import { renderWithRedux } from '../../utils/test-utils';

describe('<SearchInput />', () => {
  const placeholderText = 'Enter a value to filter';

  it('it should mount', () => {
    renderWithRedux(<SearchInput />);
    const searchInputEl = screen.getByTestId('SearchInput');
    expect(searchInputEl).toBeInTheDocument();
  });

  it('it should have an input with the correct placeholder text', () => {
    renderWithRedux(<SearchInput />);
    const inputEl = screen.getByPlaceholderText(placeholderText);
    expect(inputEl).toBeInTheDocument();
  });

  it('it should update value on change', () => {
    renderWithRedux(<SearchInput />);
    const inputEl = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(inputEl, { target: { value: 'test' } });
    expect((inputEl as HTMLInputElement).value).toBe('test');
  });
});
