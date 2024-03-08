import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../common/input/Input'
import { UserAuth } from '../../contexts/authContext/AuthContext'

import './login.css'

export default function Login () {
  const navigate = useNavigate()
  const [loginCredentials, setloginCredentials] = useState({ email: '', password: '' })

  const { userLogin } = UserAuth()

  const handleChange = (event) =>
    setloginCredentials(s => ({ ...s, [event.target.name]: event.target.value }))

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      await userLogin(loginCredentials.email, loginCredentials.password)
    } catch (e) {
      console.log(e)
    }
  }

  return (<>
        <h2>Sign in</h2>
        <form className='login-form' onSubmit={handleLogin}>
            <Input
              type='text'
              placeholder='Email'
              name='email'
              onChange={handleChange} />
            <Input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange} />
            <input type='submit' value='Login'/>
        </form>
    </>)
}
