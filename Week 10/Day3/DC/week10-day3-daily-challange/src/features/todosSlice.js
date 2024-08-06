import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
  ],
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload.text,
        date: action.payload.date,
        edit: false
      })

    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload.id
)
    },
    edittodo: (state, action) => {
      state.todos = state.todos.map(
        todo => todo.id === action.payload.id ? { edit: !todo.edit } : todo )
    }      
        }

    
      },
);

export const { addtodo, removetodo, edittodo } = todosSlice.actions;

export default todosSlice.reducer;
