import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
          <Signup />
          {/* <Login/> */}
    </>
  )
}

export default App
