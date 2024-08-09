import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '.';
import { renderWithRedux } from '../../utils/test-utils';

describe('<Layout />', () => {
  it('it should mount', () => {
    renderWithRedux(
      <Layout>
        <div />
      </Layout>
    );
    const layoutEl = screen.getByTestId('Layout');
    expect(layoutEl).toBeInTheDocument();
  });

  it('it should render the header', () => {
    renderWithRedux(
      <Layout>
        <div />
      </Layout>
    );
    const headerEl = screen.getByTestId('Header');
    expect(headerEl).toBeInTheDocument();
  });

  it('it should render the title and subtitle', () => {
    renderWithRedux(
      <Layout>
        <div />
      </Layout>
    );
    expect(screen.getByText('The Holocron')).toBeInTheDocument();
    expect(screen.getByText("Unlock the Galaxy's Secrets")).toBeInTheDocument();
  });

  it('it should children props', () => {
    renderWithRedux(
      <Layout>
        <div data-testid="child-element">Child Element</div>
      </Layout>
    );
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });
});
