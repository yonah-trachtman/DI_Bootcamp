import { useState, useRef } from 'react'
import './App.css'
import List from './Componant/List'


function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn TypeScript' },
    { id: 2, text: 'Build a React App' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null!)

  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: `${inputRef.current.value}`,
    };
    setTodos([...todos, newTodo]);
    inputRef.current.value = ""
  };

  return (
    <div>
      <h1>To do List</h1>
      <input
      placeholder='what would you like to do?'
      className='textInput'
        type="text"
        ref={inputRef}
        // onChange={(e) => {
        //   setInputValue(e.target.value)
        // }}
      />
      <button onClick={addTodo} className='CTA'>Add to list</button>
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
