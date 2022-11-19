import { useState } from "react"
import { doc, setDoc, Timestamp } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, getBytes, getBlob } from "firebase/storage"
import dayjs from "dayjs"
import { db, storage } from "../../firebase"
import './NewTask.less'


const NewTask = () => {
  const [task, setTask] = useState({'title': '', 'description': '', 'date': ''})
  
  getDownloadURL(ref(storage, 'hey')).then(url => {
    console.log(url)
  })
  const downloadHandler = async () => {
    const storageRef = ref(storage, 'hey')
    await getBlob(storageRef)
    .then(res => {
      console.log(URL.createObjectURL(res))
    })
  }
  const addTask = async () => {
    const storageRef = ref(storage, task.title)
    await setDoc(doc(db, "tasks", task.title), {
      title: task.title,
      description: task.description,
      date: Timestamp.fromDate(new Date(task.date)),
      timestamp: Timestamp.now()
    });
    if (task.file.length !== 0) {
      uploadBytes(storageRef, task.file[0])
    }
    setTask({'title': '', 'description': '', 'date':dayjs(), 'file': ''})
  }
  return (
    <div className="form">
      <input type="text" placeholder="Название задачи" className="form__title" value={task.title} onChange={(e) => setTask(prev => ({...prev, 'title': e.target.value}))}/>
      <textarea type="text" rows="5" placeholder="Описание задачи" className="form__desc" value={task.description} name="" id="" onChange={(e) => setTask(prev => ({...prev, 'description': e.target.value}))}/>
      <div className="form__bottom">
        <input type="date" value={task.date} className="form__bottom-time" onChange={(e) => setTask(prev => ({...prev, 'date': e.target.value}))}/>
        <label className="form__bottom-label">
          <input type="file" className="form__bottom-file" onChange={(e) => setTask(prev => ({...prev, 'file': e.target.files}))}/>
          Attach file
        </label>
        <button onClick={addTask} disabled={!Object.values(task).every(value => !!value) ? true : false}>Добавить задачу</button> 
      </div>     
      <button onClick={downloadHandler}>
        <a href="blob:http://127.0.0.1:5173/c340c7fb-661b-4f07-b9f5-d451a750b75c" download>download</a>
      </button>
    </div>
  )
}

export default NewTask