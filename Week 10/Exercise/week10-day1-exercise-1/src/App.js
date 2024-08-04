import logo from './logo.svg';
import './App.css';
import { useRef, useReducer, useState } from "react";
import React from "react";
import { ThemeProvider, useTheme } from "./Componants/UseTheme";


function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
let css = {}

if (theme === "dark") {
  css = {
    backgroundColor: "black",
    color: "white"
  }
} else {
  css = {
    backgroundColor: "white",
    color: "black"
  }
}


  return (
      <div className="App"  style={css}>
      <h1>Theme Switcher Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
      <CharacterCounter />
      <TodoList />
    </div>
  );
}


function CharacterCounter() {
  const inputRef = useRef(null);
  const [finalLength, setFinal] = useState(0)
  let textLength = 0

  const handleInputChange = () => {
    textLength = inputRef.current.value.length;
  };


  const checkLength = () => {
    setFinal(textLength)
  }
  

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea><br/>
        <button onClick={checkLength}>Check Length</button>
      <p>Character Count: {finalLength}</p>
    </div>
  );
}

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {


  
  return (
    <>
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
    </>
  );
}

export default App;