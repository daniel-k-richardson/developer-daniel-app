import { useState, useEffect, useContext } from 'react'
import './blog.css'

import BlogService from '../../services/BlogService'
import BlogList from './BlogList.jsx'
import { UserContext } from '../../App'

export default function Blog () {
  const [posts, setPosts] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)

  const blogs = [
    { id: 1, title: 'first ever blog', content: 'this is my content asdfasdfasdf' },
    { id: 2, title: 'second ever blog', content: 'this is more content here ☕' },
    { id: 3, title: 'thrid ever blog', content: 'this is more content here ☕' }
  ]

  useEffect(() => {
    initBlogs()
  }, [])

  const initBlogs = async () => {
    try {
      const result = await BlogService.getBlogs()
      setPosts(p => (p = result))
    } catch (error) {
      console.log(error)
    }
  }

  return (<>
            <h1 className='header'>Blog</h1>
            {isLoggedIn ? (<button>Create new blog</button>) : null }
            <p className='contentText'>my blogs go here</p>
            <div className='blogWrapper' >
              <BlogList blogs={blogs} />
            </div>
          </>)
}
