import { createSlice } from '@reduxjs/toolkit';

export const rowsSlice = createSlice({
  name: 'rows',
  initialState: {
    value: 10,
  },
  reducers: {
    setRows: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRows } = rowsSlice.actions;

export const selectRows = (state: any) => state.rows.value;

export default rowsSlice.reducer;