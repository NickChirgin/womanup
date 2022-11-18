import { useState } from "react"
import dayjs from "dayjs"
import { doc, updateDoc, getDoc, collection, deleteDoc } from "firebase/firestore"
import { db } from "../firebase"

const UpdateTask = ({title, description, date, id, clickHandler}) => {
  const [task, setTask] = useState({'title': title, 'description': description, 'date':dayjs()})
  console.log(id)
  const handleUpdate = async () => {
    const currentTask = doc(db, 'tasks', id)
    await updateDoc(currentTask, {
        // ...task,
        title: task.title,
        description: task.description
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
      <input type="text" value={task.description} onChange={(e) => setTask(prev => ({...prev, 'description': e.target.value}))}/>
      <input type="date" value={dayjs(task.date).format('DD/MM/YYYY')} onChange={(e) => setTask(prev => ({...prev, 'date': dayjs(e.target.value).format('DD/MM/YYYY').toString()}))}/>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default UpdateTask