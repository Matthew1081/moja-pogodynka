// src/store/weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: { unit: 'C' }, // C, F, lub K [cite: 19]
  reducers: {
    toggleUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const { toggleUnit } = weatherSlice.actions;
export default weatherSlice.reducer;