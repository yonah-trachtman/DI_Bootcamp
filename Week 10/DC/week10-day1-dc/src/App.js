import logo from './logo.svg';
import './App.css';
import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "TOGGLE_COMPLETE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "completed", "not-completed"

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim() === "") return;
    dispatch({ type: "EDIT_TODO", id: editingTodo.id, text: editText });
    setEditingTodo(null);
    setEditText("");
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
    setEditText("");
  };

  const handleToggleComplete = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", id });
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "not-completed") return !todo.completed;
    return true; // "all"
  });

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
      <button onClick={() => handleFilterChange("completed")}>Filter Complete</button>
      <button onClick={() => handleFilterChange("not-completed")}>Filter Incomplete</button>
      <button onClick={() => handleFilterChange("all")}>Show All</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : 'not-completed'}`}
          >
            {editingTodo?.id === todo.id ? (
              <div>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                {todo.text}
                <button onClick={() => handleToggleComplete(todo.id)}>
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => handleEditClick(todo)}>Edit</button>
                <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}




function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
