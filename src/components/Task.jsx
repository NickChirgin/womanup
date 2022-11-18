import UpdateTask from './UpdateTask'
import { useState } from 'react'

const Task = ({title, description, id, date}) => {
  const [active, setActive] = useState(false)
  const clickHandler = () => {
    setActive(prev => !prev)
  }
  return (
    active ? <UpdateTask title={title} description={description} id={id} clickHandler={clickHandler}/> : 
    <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{date}</p>
        <button onClick={clickHandler}>change</button>
    </div>
  )
}

export default Task