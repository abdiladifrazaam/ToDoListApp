import { useState } from 'react'
import ToDoListApp from './components/ToDoListApp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToDoListApp/>
    
    </>
  )
}

export default App
