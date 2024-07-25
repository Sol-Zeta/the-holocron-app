import { createReducer, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, Slice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Character } from '@/types/index';
import { AppState } from '@/store/index';

interface CharacterPages {
  [key: string]: Character[];
}
export interface CharactersState {
  page: string;
  total: number;
  next: string;
  previous: string;
  charactersPages: CharacterPages;
  filteredCharacters: Character[];
  error: string | null;
}

const initialState: CharactersState = {
  page: '1',
  total: 0,
  next: '',
  previous: '',
  charactersPages: {},
  filteredCharacters: [],
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

export const { setCharactersByPage, setPage } = charactersSlice.actions;

export const getCharacters = (state: AppState): CharactersState =>
  state.characters as CharactersState;

export default charactersSlice.reducer;
