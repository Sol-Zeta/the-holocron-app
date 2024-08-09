import { createSlice } from '@reduxjs/toolkit';
import type { Slice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Character } from '@/types/index';
import { AppState } from '@/store/index';
import { filterItems } from '../utils';

interface CharacterPages {
  [key: string]: Character[];
}
export interface CharactersState {
  page: string;
  total: number;
  next: string;
  previous: string;
  charactersPages: CharacterPages;
  filterTerm: string;
  error: string | null;
}

const initialState: CharactersState = {
  page: '1',
  total: 0,
  next: '',
  previous: '',
  charactersPages: {},
  filterTerm: '',
  error: '',
};

export const charactersSlice: Slice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharactersByPage: (state, action) => {
      const { characters, total, next, previous } = action.payload;
      state.charactersPages[state.page] = characters;
      state.total = total;
      state.next = next;
      state.previous = previous;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      const page = action.payload.characters.page;
      const total = action.payload.characters.total;
      const next = action.payload.characters.next;
      const previous = action.payload.characters.previous;
      const charactersPage = action.payload.characters.charactersPages[page];
      state.charactersPages[page] = charactersPage;
      state.total = total;
      state.next = next;
      state.previous = previous;
      state.page = page;
    });
  },
});

export const { setCharactersByPage, setPage, setFilterTerm } =
  charactersSlice.actions;

export const getCharacters = (state: AppState): CharactersState =>
  state.characters as CharactersState;

export const getFilteredCharacters = (state: AppState): Character[] =>
  filterItems(state.characters.filterTerm, state.characters.charactersPages[state.characters.page]);

export default charactersSlice.reducer;
