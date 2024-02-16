import { useState, useEffect } from 'react'
import BlogService from '../services/BlogService'

export default function Blog () {
  const [posts, setPosts] = useState([])
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    initBlogs()
  }, [])

  const initBlogs = async () => {
    setIsPending(i => (i = true))

    try {
      const result = await BlogService.getBlogs()
      setPosts(p => (p = result))
    } catch (error) {
      console.log(error)
      setIsPending(i => (i = false))
    }

    setIsPending(i => (i = false))
  }

  return (<>
        <h1>Blog</h1>
        <p>my blogs go here</p>
        <div>
            { isPending && <div>Loading ..</div>}
            { posts.map((post) => (
                <p key={post.id}>{post.title} - {post.content}</p>
            ))}
        </div>

    </>)
}
