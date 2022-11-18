import { useState } from 'react'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask/NewTask'
import './App.less'

function App() {

  return (
    <>
    <NewTask />
    <TaskList />
    </>
  )
}

export default App
