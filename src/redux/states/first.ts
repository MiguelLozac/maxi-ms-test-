import { createSlice } from '@reduxjs/toolkit';

export const firstSlice = createSlice({
  name: 'first',
  initialState: {
    value: 0,
  },
  reducers: {
    setFirst: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFirst } = firstSlice.actions;

export const selectFirst = (state: any) => state.first.value;

export default firstSlice.reducer;