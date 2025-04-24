import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
