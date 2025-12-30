import { useEffect, useState } from 'react'
import quotes from './quotes';
import './App.css'

function App() {
  const [userInput, setUserInput] = useState('');
  const [todoItem, setTodoItem] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    function getRandomQuote() {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      setQuote(randomQuote);
    }
    getRandomQuote();

    const interval = setInterval(getRandomQuote, 10000)
    return () => clearInterval(interval)
  }, [])

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
      <div className='todoListArea'>
        <h1>The Very Basic TODO LIST</h1>
        {quote && <h2 key={quote.text}>{quote.text}</h2>}
        <section className='inputArea'>
          <input id='text-input' type='text' value={userInput} onChange={handleUserInput} onKeyDown={(e) => e.key === 'Enter' && addTodoItem()} placeholder='Type here' />
          <button onClick={addTodoItem}>Add to List</button>
        </section>
        <section className='list-area'>

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
        </section>

      </div>
    </>
  )
}

export default App
