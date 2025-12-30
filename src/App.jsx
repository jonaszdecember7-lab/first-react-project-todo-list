import { useState } from 'react'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState('');
  const [todoItem, setTodoItem] = useState([]);

  function handleUserInput(event) {
    setUserInput(event.target.value);
  }

  function addTodoItem() {
    if (userInput.trim().length > 0) {
      setTodoItem([userInput.trim(), ...todoItem]);
      setUserInput('')
    }
  }

  function handleDelete(index) {
    setTodoItem(todoItem.filter((_, i) => i !== index));
  }


  return (
    <>
      <div>
        <input type='text' value={userInput} onChange={handleUserInput} onKeyDown={(e) => e.key === 'Enter' && addTodoItem()} />
        <button onClick={addTodoItem}>Add to List</button>
        <ul>
          {todoItem.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" />
              {todo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          )
          )
          }
        </ul>
      </div>
    </>
  )
}

export default App
