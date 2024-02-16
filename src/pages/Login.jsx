import { useState } from 'react'
import Input from '../components/input/Input'
import loginService from '../services/LoginService'

export default function Login () {
  const [loginCredentials, setloginCredentials] = useState({})

  function handleChange (event) {
    setloginCredentials(s => ({ ...s, email: event.target.value }))
  }

  function handleChange1 (event) {
    setloginCredentials(s => ({ ...s, password: event.target.value }))
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      console.log('indata', loginCredentials)
      const result = await loginService.login(loginCredentials)
      console.log('worked', result)
    } catch (error) {
      console.log('failed asdfa', error)
    }
  }

  return (
  <>
        <h1>This is a login page</h1>
        <form onSubmit={handleLogin}>
            <Input type="text" placeholder="Email" onChange={handleChange} />
            <Input type="password" placeholder="current-password" onChange={handleChange1} />
            <input type="submit" />
        </form>
    </>)
}
