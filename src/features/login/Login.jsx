import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../common/input/Input'
import AuthService from '../../services/AuthService'
import { UserContext } from '../../App'

export default function Login () {
  const [loginCredentials, setloginCredentials] = useState({})
  const [, setIsLoggedIn] = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (event) =>
    setloginCredentials(s => ({ ...s, [event.target.name]: event.target.value }))

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
            <Input
              type='text'
              placeholder='Email'
              name='email'
              onChange={handleChange} />
            <Input
              type='password'
              placeholder='current-password'
              name='password'
              onChange={handleChange} />
            <input type='submit' />
        </form>
    </>)
}
