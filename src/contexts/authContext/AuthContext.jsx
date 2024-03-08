import { createContext, useContext } from 'react'
import {
  signInWithEmailAndPassword
} from 'firebase/auth'

import { auth } from '../../firebase'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <UserContext.Provider value={{ userLogin }}>
      { children }
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
