import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  books: [
        { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
        { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
        { id: 5, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian' },
        { id: 6, title: 'Moby Dick', author: 'Herman Melville', genre: 'Classic' },
        { id: 7, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
        { id: 8, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Romance' },
        { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Dystopian' },
        { id: 10, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Classic' },
        { id: 11, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 12, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Romance' },
        { id: 13, title: 'Neuromancer', author: 'William Gibson', genre: 'Dystopian' },
        { id: 14, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' },
        { id: 15, title: 'The Name of the Wind', author: 'Patrick Rothfuss', genre: 'Fantasy' },
        { id: 16, title: 'Gone with the Wind', author: 'Margaret Mitchell', genre: 'Romance' },
        { id: 17, title: 'A Clockwork Orange', author: 'Anthony Burgess', genre: 'Dystopian' },
        { id: 18, title: 'Little Women', author: 'Louisa May Alcott', genre: 'Classic' },
        { id: 19, title: 'The Silmarillion', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 20, title: 'Rebecca', author: 'Daphne du Maurier', genre: 'Romance' }
    ],
    
  status: 'idle',
  error: null,
  genre: -1,
};

  const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

        filterGenre: (state,action) => {
            state.genre = action.payload;
        }
    },
  });
  
export const books = (state) => state.booksReducer.books
export const status = (state) => state.booksReducer.status
export const error = (state) => state.booksReducer.error
export const genre = (state) => state.booksReducer.genre
export const state = (state) => state.booksReducer;

  export const { filterGenre } = bookSlice.actions;

  export default bookSlice.reducer;
