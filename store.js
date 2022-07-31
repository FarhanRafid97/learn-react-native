import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slice/navSlice';

const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export default store;
