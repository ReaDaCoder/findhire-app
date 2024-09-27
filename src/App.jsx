import { useState } from 'react'
import './App.css'
import CreateUser from './pages/CreateUser'
import SignIn from './pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CreateUser/>
     <SignIn/>
    </>
  )
}

export default App
