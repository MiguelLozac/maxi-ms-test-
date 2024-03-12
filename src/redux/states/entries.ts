import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    value: 0,
  },
  reducers: {
    setEntries: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEntries } = entriesSlice.actions;

export const selectEntries = (state: any) => state.entries.value;

export default entriesSlice.reducer;