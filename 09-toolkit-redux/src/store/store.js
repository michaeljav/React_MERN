import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';

// step 1
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
