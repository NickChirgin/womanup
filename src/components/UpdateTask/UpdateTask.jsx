import { useState } from "react"
import dayjs from "dayjs"
import { doc, updateDoc, getDoc, collection, deleteDoc, Timestamp } from "firebase/firestore"
import { db } from "../../firebase"
import './UpdateTask.less'

const UpdateTask = ({title, description, date, id, clickHandler}) => {
  const [task, setTask] = useState({'title': title, 'description': description, 'date':dayjs()})
  const handleUpdate = async () => {
    const currentTask = doc(db, 'tasks', id)
    await updateDoc(currentTask, {
        // ...task,
        title: task.title,
        description: task.description,
        date: Timestamp.fromDate(new Date(task.date))
      })
    clickHandler()
  }
  const handleDelete = async () => {
    const currentTask = doc(db, 'tasks', id)
    await deleteDoc(currentTask)
    clickHandler()
  }
  return (
    <div>
      <input type="text" value={task.title} onChange={(e) => setTask(prev => ({...prev, 'title': e.target.value}))}/>
      <textarea type="text" rows="5"  className="form__desc" value={task.description} onChange={(e) => setTask(prev => ({...prev, 'description': e.target.value}))}/>
      <input type="date" value={task.date} onChange={(e) => setTask(prev => ({...prev, 'date': e.target.value}))}/>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default UpdateTask