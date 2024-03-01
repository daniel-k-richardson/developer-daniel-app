import { Route, Routes } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'
import AuthService from './services/AuthService.js'

import './App.css'
import Home from './features/home/Home.jsx'
import About from './features/about/About.jsx'
import Blog from './features/blog/Blog.jsx'
import Login from './features/login/Login.jsx'
import Header from './common/header/Header.jsx'

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
          <div className='header'>
            <Header />
          </div>
          <div className='content-wrapper'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='blogs' element={<Blog />} />
              <Route path='login' element={<Login />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
