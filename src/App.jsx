import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState(''); // State for input field
  const [todos, setTodos] = useState([]); // State for list of to-dos
  const [error, setError] = useState(''); // State for validation error

  const handleAddTodo = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError('Task cannot be empty or whitespace.');
      return;
    }
    setTodos([...todos, trimmedTitle]); // Add new task to the list
    setTitle(''); // Clear input field
    setError(''); // Clear error message
  };

  return (
 
    
    <div className="App">
      <h1 className='to-do-apph1'>To-Do App</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {error && <p className="error">{error}</p>}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;