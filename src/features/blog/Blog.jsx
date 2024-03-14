import { useNavigate, useParams } from 'react-router-dom'
import useFetchBlog from './hooks/useFetchBlog'

const Blog = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { blog } = useFetchBlog(params.blogId)

  const handleEdit = () => {
    navigate('edit')
  }

  return (<>
  <button onClick={() => handleEdit()}>Edit</button>
  <div>
    <h1>{blog.title}</h1>
    <p>{blog.content}</p>
  </div>
  </>)
}

export default Blog
