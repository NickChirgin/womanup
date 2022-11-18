import UpdateTask from '../UpdateTask/UpdateTask'
import { useState } from 'react'
import dateConverter from '../../helpers/dateConverter'
import './Task.less'
const Task = ({title, description, id, date}) => {
  const [active, setActive] = useState(false)
  console.log(dateConverter(date))
  const deadline = dateConverter(date)
  const clickHandler = () => {
    setActive(prev => !prev)
  }
  return (
    active ? <UpdateTask title={title} description={description} id={id} clickHandler={clickHandler}/> : 
    <div className='task'>
        <p className="task__title">{title}</p>
        <p className="task__desc">{description}</p>
        <p className="task__time">{deadline}</p>
        <button onClick={clickHandler}>change</button>
    </div>
  )
}

export default Task