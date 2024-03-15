import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext/AuthContext'
import Home from './features/home/Home'
import About from './features/about/About'
import Blogs from './features/blog/Blogs'
import Blog from './features/blog/Blog'
import CreateBlog from './features/blog/CreateBlog'
import Login from './features/login/Login'
import Header from './common/header/Header'
import EditBlog from './features/blog/EditBlog'
import Protected from './common/Protected'
import './App.css'

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
              <Route path='blogs' element={<Blogs />} />
              <Route path='blogs/:blogId' element={<Blog />} />
              <Route path='blogs/:blogId/edit' element={
                <Protected>
                  <EditBlog />
                </Protected>
                }
              />
              <Route path='blogs/create' element={
                <Protected>
                  <CreateBlog />
                </Protected>
                }
              />
              <Route path='login' element={<Login />} />
            </Routes>
          </div>
        </AuthContextProvider>
      </div>
    </>
  )
}

export default App
