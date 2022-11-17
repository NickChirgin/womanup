import { useState } from "react"

const Task = ({title, description, date}) => {
  const [active, setActive] = useState(false)
  return (
    <>
    <form action="submit">
      <input type="text" />
      <input type="text" name="" id="" />
      <input type="datetime" />
      {/* <button onSubmit={() =>}></button> */}
    </form>
    </>
  )
}

export default Task