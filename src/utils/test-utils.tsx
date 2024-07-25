import { ReactNode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import charactersReducer, { CharactersState } from '@/store/slices/characters';
import { Store } from 'redux';

// Extend the default options for the render method.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: CharactersState;
  store?: Store<CharactersState>;
}

export const renderWithRedux = (
  ui: ReactNode,
  {
    initialState,
    store = configureStore({
      reducer: charactersReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: { children: ReactNode }): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
