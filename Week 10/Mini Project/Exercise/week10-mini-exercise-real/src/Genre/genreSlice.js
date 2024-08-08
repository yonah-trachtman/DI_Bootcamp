import { createSlice } from '@reduxjs/toolkit';
import { genre } from '../Books/bookSlice';





  const genreSlice = createSlice({
    name: 'genres',
    initialState: [{
        id: 1,
        genre:'Dystopian'
    }, 
    {
        id: 2,
        genre:'Classic'
    },  
    {
        id: 3,
        genre:'Fantasy'
    },  
    {
        id: 4,
        genre:'Romance'
    }],
    reducers: {
    },
  });


  export default genreSlice.reducer;