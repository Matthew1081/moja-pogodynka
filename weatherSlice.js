import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    unit: 'Celsius', // Domyślna jednostka 
  },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const { setUnit } = weatherSlice.actions;
export default weatherSlice.reducer;