import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import itemsReducer from './items/itemsSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
