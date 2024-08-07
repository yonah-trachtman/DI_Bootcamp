
import { configureStore } from '@reduxjs/toolkit';
import ageReducer from '../src/componants/ageSlice'

const store = configureStore({
  reducer: {
    age: ageReducer,
  },
});

export default store;
