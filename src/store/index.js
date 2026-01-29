import { configureStore, createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    unit: 'Celsius' // Celsjusz/Fahrenheit/Kelvin [cite: 19]
  },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    }
  }
});

export const { setUnit } = weatherSlice.actions;
export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer
  }
});