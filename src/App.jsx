import { Route, Routes } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'
import AuthService from './services/AuthService.js'

import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Login from './pages/Login.jsx'
import Navigation from './components/navigation/Navigation.jsx'

export const UserContext = createContext()

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState()

  useEffect(() => {
    const user = AuthService.getUser()
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [isLoggedIn])

  return (
    <>
      <div className='wrapper'>
        <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </UserContext.Provider>
        </div>
    </>
  )
}

export default App
