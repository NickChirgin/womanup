import { useEffect, useState } from "react"
import { collection, doc, setDoc, getDocs, query, onSnapshot, QuerySnapshot } from "firebase/firestore"; 
import Task from "./Task/Task";
import { db } from "../firebase";


const TaskList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    void async function fetchTasks() {
      setData([])
      const tasks = query(collection(db, 'tasks'))
      onSnapshot(tasks, snap => {
        setData(snap.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    }()
  }, [])
  return (
    <>
      {data.map(task => 
      <Task key={task.data.title} title={task.data.title} description={task.data.description} id={task.id} date={task.data.date}/>
      )}
    </>
  )
}

export default TaskList