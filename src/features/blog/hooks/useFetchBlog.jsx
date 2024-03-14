import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { database } from '../../../firebase.js'

const useFetchBlog = (blogId) => {
  const [blog, setBlog] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(database, 'blogs', blogId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setBlog({ ...docSnap.data(), id: docSnap.id })
      }
    }
    fetchData()
  }, [])

  return { blog, setBlog }
}

export default useFetchBlog
