import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categories: [],
  };

  const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      addCategories: (state, action) => {
        const {id, name} = action.payload
        state.categories.push({id, name})
        }
    },
    });
  
export const categories = (state) => state.categories.categories
export const tasks = (state) => state.categories.tasks
export const state = (state) => state.categories;

export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;