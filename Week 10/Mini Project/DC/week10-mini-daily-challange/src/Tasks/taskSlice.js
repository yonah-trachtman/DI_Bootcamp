

  // tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { tasks } from '../Categories/catogoriesSlice';

const initialState = {
    tasks: [],
  };
 
  const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
    },
  });


  export default tasksSlice.reducer;