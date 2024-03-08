import { useState, useEffect, useContext, useMemo } from 'react'
import './blog.css'


import BlogList from './BlogList.jsx'
import { UserAuth } from '../../contexts/authContext/AuthContext'

export default function Blog () {
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState('')
  const [isLoggedIn] = useContext(UserAuth)

  const filteredItems = useMemo(() => {
    return posts.filter(item => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    })
  }, [posts, query])

  useEffect(() => {
    // initBlogs()
    setPosts([
      { id: 1, title: 'first ever blog', content: 'this is my content asdfasdfasdf' },
      { id: 2, title: 'second ever blog', content: 'this is more content here ☕' },
      { id: 3, title: 'thrid ever blog', content: 'this is more content here ☕' }
    ])
  }, [])

  // const initBlogs = async () => {
  //   try {
  //     const result = await BlogService.getBlogs()
  //     setPosts(p => (p = result))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (<>
            <h1>Blog</h1>
            { isLoggedIn ? (<button>Create new blog</button>) : null }
            <input
              placeholder='Seach...'
              value={query}
              onChange={e => setQuery(e.target.value)}
              type="search"
            />
            <div className='blogWrapper' >
              <BlogList blogs={filteredItems} />
            </div>
          </>)
}
