import { useState } from "react"
import { doc, setDoc, Timestamp } from "firebase/firestore"
import dayjs from "dayjs"
import { db } from "../../firebase"
import './NewTask.less'


const NewTask = () => {
  const [task, setTask] = useState({'title': '', 'description': '', 'date': ''})
  const addTask = async () => {
    await setDoc(doc(db, "tasks", task.title), {
      title: task.title,
      description: task.description,
      date: Timestamp.fromDate(new Date(task.date))
    });
    setTask({'title': '', 'description': '', 'date':dayjs()})
  }
  return (
    <div className="form">
      <input type="text" placeholder="Название задачи" className="form__title" value={task.title} onChange={(e) => setTask(prev => ({...prev, 'title': e.target.value}))}/>
      <textarea type="text" rows="5" placeholder="Описание задачи" className="form__desc" value={task.description} name="" id="" onChange={(e) => setTask(prev => ({...prev, 'description': e.target.value}))}/>
      <div className="form__bottom">
        <input type="date" value={task.date} className="form__bottom-time" onChange={(e) => setTask(prev => ({...prev, 'date': e.target.value}))}/>
        <label className="form__bottom-label">
          <input type="file" className="form__bottom-file"/>
          Attach file
        </label>
        <button onClick={addTask} disabled={!Object.values(task).every(value => !!value) ? true : false}>Добавить задачу</button> 
      </div>
      

      
    </div>
  )
}

export default NewTask