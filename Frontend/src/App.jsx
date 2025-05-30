import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
          <Signup />
          {/* <Login/> */}
          <Footer />
    </>
  )
}

export default App
