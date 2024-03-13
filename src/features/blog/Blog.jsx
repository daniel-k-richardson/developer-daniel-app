import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { database } from '../../firebase.js'

const Blog = () => {
  const params = useParams()
  const [blog, setBlog] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(database, 'blogs', params.blogId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setBlog({ ...docSnap.data(), id: docSnap.id })
      }
    }
    fetchData()
  }, [])

  return (<>
  {blog.id && <h1>test</h1>}
  {blog.id}
  </>)
}

export default Blog
