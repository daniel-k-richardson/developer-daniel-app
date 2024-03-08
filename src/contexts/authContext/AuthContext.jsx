import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

import { auth } from '../../firebase'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return unsubsribe
  }, [])

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    console.log(user)
    return signOut(auth)
  }

  return (
    <UserContext.Provider value={{ login, logout, user }}>
      { children }
    </UserContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export const UserAuth = () => {
  return useContext(UserContext)
}
