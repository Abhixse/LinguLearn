import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='w-full h-full m-0 p-0'> 
          <Header />
          <Home />
        </div>
    </>
  )
}

export default App
