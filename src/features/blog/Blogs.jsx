import { useState, useEffect, useMemo } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { UserAuth } from '../../contexts/authContext/AuthContext.jsx'
import BlogList from './components/BlogList.jsx'
import { database } from '../../firebase.js'
import './blog.css'

export default function Blogs () {
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState('')
  const { user } = UserAuth()

  const filteredItems = useMemo(() =>
    posts
      .filter(item => item.title
        .toLowerCase()
        .includes(query.toLowerCase())
      ), [posts, query])

  useEffect(() => {
    const unsub = onSnapshot(collection(database, 'blogs'), (snapshot) => {
      const data = snapshot.docs.map(x => ({ ...x.data(), id: x.id }))
      setPosts(prev => data)
    })

    return unsub
  }, [])

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
