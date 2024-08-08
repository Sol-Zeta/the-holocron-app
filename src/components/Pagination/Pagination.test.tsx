import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '.';
import { renderWithRedux } from '../../utils/test-utils';

describe('<Pagination />', () => {
  const paginationProps = {
    count: 82,
    page: '1'
  }

  it('it should mount', () => {
    renderWithRedux(<Pagination {...paginationProps}/>);
    const paginationEl = screen.getByTestId('Pagination');
    expect(paginationEl).toBeInTheDocument();
  });

  it('should render 1 page every 10 items', () => {
    renderWithRedux(<Pagination {...paginationProps}/>);
    const pages = screen.getAllByRole('listitem');
    expect(pages.length).toBe(9);
  });
});
