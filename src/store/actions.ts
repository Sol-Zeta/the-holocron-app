import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { Action } from "redux";
import charactersReducer from "./slices/characters";
import { createWrapper } from "next-redux-wrapper";

export const store = () =>
  configureStore({
    reducer: {
      characters: charactersReducer,
    },
    devTools: true
  });

// export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const storeWrapper = createWrapper<AppStore>(store);