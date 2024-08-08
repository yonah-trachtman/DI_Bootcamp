import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import postsReducer from '../posts/postsSlice';
import userReducer from '../Users/userSlice';

const store = configureStore({
  reducer: {
    postsReducer,
    userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;