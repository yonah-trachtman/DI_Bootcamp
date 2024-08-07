
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  age: 0,
  loading: false,
};


export const ageUpAsync = createAsyncThunk(
  'age/ageUpAsync',
  async (amount) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(amount), 1000) 
    );
  }
);

export const ageDownAsync = createAsyncThunk(
  'age/ageDownAsync',
  async (amount) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(amount), 1000) 
    );
  }
);


const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.loading = false;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age -= action.payload;
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
