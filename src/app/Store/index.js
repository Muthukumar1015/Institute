import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      category: categoryReducer,
    },
  });
