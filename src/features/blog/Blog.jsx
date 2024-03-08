import { useState, useEffect, useMemo } from 'react'
import { UserAuth } from '../../contexts/authContext/AuthContext'
import './blog.css'
import BlogList from './BlogList.jsx'
import { onSnapshot, collection } from 'firebase/firestore'
import { database } from '../../firebase'

export default function Blog () {
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState('')
  const { user } = UserAuth()

  const filteredItems = useMemo(() => {
    return posts.filter(item => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    })
  }, [posts, query])

  useEffect(() => {
    onSnapshot(collection(database, 'default'), (snapshot) => {
      console.log(snapshot.docs.map(d => d.data))
    })
    // // initBlogs()
    // setPosts([
    //   { id: 1, title: 'first ever blog', content: 'this is my content asdfasdfasdf' },
    //   { id: 2, title: 'second ever blog', content: 'this is more content here ☕' },
    //   { id: 3, title: 'thrid ever blog', content: 'this is more content here ☕' }
    // ])
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
            { user ? (<button>Create new blog</button>) : null }
            <input
              placeholder='Seach...'
              value={query}
              onChange={e => setQuery(e.target.value)}
              type="search"
            />
            <div className='blogWrapper' >
              <BlogList items={filteredItems} />
            </div>
          </>)
}
