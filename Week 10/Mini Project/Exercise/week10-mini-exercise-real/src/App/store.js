import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import booksReducer from "../Books/bookSlice"
import genreReducer from "../Genre/genreSlice"


const store = configureStore({
  reducer: {
    booksReducer,
    genreReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;