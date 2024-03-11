import { useState, useEffect, useMemo } from 'react'
import { UserAuth } from '../../contexts/authContext/AuthContext'
import './blog.css'
import BlogList from './BlogList.jsx'
import { database } from '../../firebase'
import { getDocs, collection } from 'firebase/firestore'

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
    // onSnapshot(collection(database, 'blogs'), (snapshot) => {
    //   console.log(snapshot)
    // })
    initBlogs()
    // // initBlogs()
    // setPosts([
    //   { id: 1, title: 'first ever blog', content: 'this is my content asdfasdfasdf' },
    //   { id: 2, title: 'second ever blog', content: 'this is more content here ☕' },
    //   { id: 3, title: 'thrid ever blog', content: 'this is more content here ☕' }
    // ])
  }, [])

  const initBlogs = async () => {
    const querySnapshot = await getDocs(collection(database, 'blogs'))

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
  }

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
