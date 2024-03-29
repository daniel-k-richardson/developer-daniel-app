import { useParams } from 'react-router-dom'
import { doc, updateDoc } from 'firebase/firestore'
import useFetchBlog from './hooks/useFetchBlog'
import Input from '../../common/input/Input'
import { database } from '../../firebase'

const EditBlog = () => {
  const params = useParams()
  const { blog, setBlog } = useFetchBlog(params.blogId)

  const handleEdit = (event) => {
    const update = async () => {
      const blogRef = doc(database, 'blogs', blog.id)
      await updateDoc(blogRef, {
        title: blog.title,
        content: blog.content
      })
    }
    event.preventDefault()
    update()
  }

  const handleChange = (event) => {
    setBlog(s => ({ ...s, [event.target.name]: event.target.value }))
    console.log()
  }

  return (<>
    <h1>hello edit - { blog.title }</h1>
    <form onSubmit={ handleEdit }>
            <Input
              type='text'
              defaultValue={ blog.title }
              name='title'
              onChange={ handleChange } />
            <Input
              type='textarea'
              defaultValue={ blog.content }
              name='content'
              onChange={ handleChange } />
            <Input type='submit' value='Save'/>
        </form>
  </>)
}

export default EditBlog
