import { useState, useEffect } from 'react'
import BlogService from '../../services/BlogService'
import blogStyle from './blog.module.css'

export default function Blog () {
  const [posts, setPosts] = useState([])

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
            <h1 className={blogStyle.header}>Blog</h1>
            <p className={blogStyle.contentText}>my blogs go here</p>
            <div className={blogStyle.blogWrapper} >
              { blogs.map((post) => (
                <div className={blogStyle.blogCard} key={post.id}>
                  <h1 className={blogStyle.blogTitle}>{post.title}</h1>
                  <p className={blogStyle.content}>{post.content.slice(0, 40) + '...'}</p>
                  <div className={blogStyle.blogFooter}>
                    <p>footer scontent</p>
                  </div>
                </div>
              ))}
            </div>
          </>)
}
