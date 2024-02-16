import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/input/Input'
import AuthService from '../services/AuthService'
import { UserContext } from '../App'

export default function Login () {
  const [loginCredentials, setloginCredentials] = useState({})
  const [, setIsLoggedIn] = useContext(UserContext)
  const navigate = useNavigate()

  function handleChange (event) {
    setloginCredentials(s => ({ ...s, email: event.target.value }))
  }

  function handleChange1 (event) {
    setloginCredentials(s => ({ ...s, password: event.target.value }))
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      await AuthService.login(loginCredentials)
      setIsLoggedIn(true)
      navigate('/')
    } catch (error) {
      setIsLoggedIn(false)
    }
  }

  return (<>
        <h1>This is a login page</h1>
        <form onSubmit={handleLogin}>
            <Input type="text" placeholder="Email" onChange={handleChange} />
            <Input type="password" placeholder="current-password" onChange={handleChange1} />
            <input type="submit" />
        </form>
    </>)
}
