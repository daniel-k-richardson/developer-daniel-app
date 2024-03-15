import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import useFetchBlogs from './hooks/useFetchBlogs'
import { UserAuth } from '../../contexts/authContext/AuthContext.jsx'
import BlogList from './components/BlogList.jsx'
import './blog.css'

export default function Blogs () {
  const navigate = useNavigate()
  const { blogs } = useFetchBlogs()
  const [query, setQuery] = useState('')
  const { user } = UserAuth()

  const filteredItems = useMemo(() =>
    blogs
      .filter(item => item.title
        .toLowerCase()
        .includes(query.toLowerCase())
      ), [blogs, query])

  const handleOpenBlog = (blogId) => {
    navigate(blogId)
  }

  return (<>
            <h1>Blog</h1>
            { user ? (<button onClick={() => navigate('create') }>Create new blog</button>) : null }
            <input
              placeholder='Seach...'
              value={query}
              onChange={e => setQuery(e.target.value)}
              type="search"
            />
            <div className='blogWrapper' >
              <BlogList items={filteredItems} handleClick={handleOpenBlog}/>
            </div>
          </>)
}
