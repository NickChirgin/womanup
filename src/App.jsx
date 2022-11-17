import { useState } from 'react'
import Task from './components/Task'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Task />
  )
}

export default App
