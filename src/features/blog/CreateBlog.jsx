import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import Input from '../../common/input/Input'
import { database } from '../../firebase'

const CreateBlog = () => {
  const [blog, setBlog] = useState({})

  const handleEdit = (event) => {
    const create = async () => {
      const docRef = await addDoc(collection(database, 'blogs'), {
        ...blog
      })

      console.log(docRef)
    }
    event.preventDefault()
    create()
  }

  const handleChange = (event) => {
    setBlog(s => ({ ...s, [event.target.name]: event.target.value }))
    console.log(blog)
  }

  return (<>
    <h1>hello create</h1>
    <form onSubmit={ handleEdit }>
            <Input
              type='text'
              placeholder='title'
              name='title'
              onChange={ handleChange } />
            <Input
              type='textarea'
              placeholder='content'
              name='content'
              onChange={ handleChange } />
            <Input type='submit' value='Save'/>
        </form>
  </>)
}

export default CreateBlog
