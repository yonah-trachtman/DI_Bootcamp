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
        complete: false
      })

    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload.id
)
    },
    completetodo: (state, action) => {
      state.todos = state.todos.map(
        todo => todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo )
    }      
        }

    
      },
);

export const { addtodo, removetodo, completetodo } = todosSlice.actions;

export default todosSlice.reducer;
