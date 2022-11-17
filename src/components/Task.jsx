import { useEffect, useState } from "react"
import { collection, doc, setDoc, getDocs, query } from "firebase/firestore"; 

import { db } from "../firebase";


const Task = () => {
  const [data, setData] = useState([])
  const [active, setActive] = useState(false)
  useEffect(() => {
    void async function fetchTasks() {
      let result = []
      const tasks = await getDocs(collection(db, "tasks"))
      tasks.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setData(prev => ([...prev, doc.data()]))
      })    
    }()
    console.log(data)
  }, [])
  return (
    <>
      <p>123</p>
      {data.map(task => 
      <div key={task.title}>
        <p>{task.title}</p>
        <p>{task.description}</p>
        <button>change</button>
      </div>)}
      </>
  )
}

export default Task