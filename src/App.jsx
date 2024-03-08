import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext/AuthContext'
import './App.css'
import Home from './features/home/Home'
import About from './features/about/About'
import Blog from './features/blog/Blog'
import Login from './features/login/Login'
import Header from './common/header/Header'

function App () {
  return (
    <>
      <div className='wrapper'>
        <AuthContextProvider>
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
        </AuthContextProvider>
      </div>
    </>
  )
}

export default App
