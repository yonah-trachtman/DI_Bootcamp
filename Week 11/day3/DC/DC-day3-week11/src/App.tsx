import { useState } from 'react'
import './App.css'
import List from './Componant/List'


function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn TypeScript' },
    { id: 2, text: 'Build a React App' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: `${inputValue}`,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <List
        items={todos}
        renderItem={(todo) => (
          <span>{todo.text}</span>
        )}
      />
    </div>
  );
};

export default App
