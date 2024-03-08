import { NavLink } from 'react-router-dom'
import { UserAuth } from '../../contexts/authContext/AuthContext'

import './Navigation.css'

export default function Navigation () {
  const { user, logout } = UserAuth()

  const handleLogout = async () => {
    try {
      await logout()
      console.log('logged out')
    } catch (error) {
      console.log(error)
    }
  }

  return (<>
        <nav className='nav-container'>
            <ul className='nav-list'>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to='About' >About</NavLink></li>
                <li><NavLink to='Blogs' >Blog</NavLink></li>
                { user ? (<li><NavLink onClick={() => handleLogout()}>Logout</NavLink></li>) : null }
            </ul>
       </nav>
    </>)
}
