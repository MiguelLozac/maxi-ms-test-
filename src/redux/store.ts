// store.js
import { configureStore } from '@reduxjs/toolkit';
import { entriesSlice, firstSlice, rowsSlice, yearSlice } from './states';

export interface AppStore {
    rows: number
}

export const store = configureStore({
  reducer: {
    rows: rowsSlice.reducer,
    first: firstSlice.reducer,
    year: yearSlice.reducer,
    entries: entriesSlice.reducer
  },
});
