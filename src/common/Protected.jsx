import { Navigate } from 'react-router-dom'
import { UserAuth } from '../contexts/authContext/AuthContext'

const Protected = ({ children }) => {
  const { user } = UserAuth()

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}

export default Protected
