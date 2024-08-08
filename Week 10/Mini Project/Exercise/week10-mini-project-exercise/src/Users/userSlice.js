import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUsers = createAsyncThunk('User/fetchUsers', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data;

  });


  const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
          return action.payload;
        })

    },
  });


  export default userSlice.reducer;