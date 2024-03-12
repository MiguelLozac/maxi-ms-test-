import { createSlice } from '@reduxjs/toolkit';

export const yearSlice = createSlice({
  name: 'year',
  initialState: {
    value: 2010,
  },
  reducers: {
    setYear: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setYear } = yearSlice.actions;

export const selectYear = (state: any) => state.year.value;

export default yearSlice.reducer;