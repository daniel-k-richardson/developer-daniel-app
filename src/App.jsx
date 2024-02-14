
import {Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Login from './pages/Login.jsx'
import Navigation from './components/navigation/Navigation.jsx'

function App() {

  return (
    <>
      <div className='wrapper'>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </div>
    </>
  )
}

export default App
