import { useState, useEffect } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { database } from '../../../firebase.js'

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(database, 'blogs'), (snapshot) => {
      const data = snapshot.docs.map(x => ({ ...x.data(), id: x.id }))
      setBlogs(prev => data)
    })

    return unsub
  }, [])

  return { blogs }
}

export default useFetchBlogs
