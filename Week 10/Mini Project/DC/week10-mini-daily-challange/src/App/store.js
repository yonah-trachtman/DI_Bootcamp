import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from "../Tasks/taskSlice"
import categoriesReducer from '../Categories/catogoriesSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
  },
});

export default store;
