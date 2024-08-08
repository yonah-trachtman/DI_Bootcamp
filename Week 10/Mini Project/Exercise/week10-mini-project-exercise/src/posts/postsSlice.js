import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
  auther: -1,
};

export const fetchPost = createAsyncThunk('post/fetchPosts', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return response.data;

  });

  const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addReaction: (state, action) => {
            const {id, name} = action.payload
            const post = state.posts.find(post=> post.id === id) 
            if(post) {
                post.reactions[name]++;
            }
        },
        filterAuther: (state,action) => {
            state.auther = action.payload;
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchPost.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
          state.status = 'succeeded';
          const loadedPosts = action.payload.map(post => {
            post.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            }
            return post
           })
          state.posts = action.payload;
          state.error = null;
        })
        .addCase(fetchPost.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
export const posts = (state) => state.postsReducer.posts
export const status = (state) => state.postsReducer.status
export const error = (state) => state.postsReducer.error
export const auther = (state) => state.postsReducer.auther
export const state = (state) => state.postsReducer;

  export const { addReaction, filterAuther } = postSlice.actions;

  export default postSlice.reducer;
