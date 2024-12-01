import { useState } from 'react'
import TasksManager from "./TasksManager"

function App() {
  const [user, setUser] = useState("Jemyll Ramoya")

  return (
    <>
      <TasksManager user={user}/>
    </>
  )
}

export default App
