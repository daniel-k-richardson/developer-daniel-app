import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import AuthService from '../../services/AuthService'
import { UserContext } from '../../App'

import './Navigation.css'

export default function Navigation () {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)

  const handleLogout = () => {
    AuthService.logout()
    setIsLoggedIn(false)
  }

  return (<>
        <nav className='nav-container'>
            <ul className='nav-list'>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to='About' >About</NavLink></li>
                <li><NavLink to='Blogs' >Blog</NavLink></li>
                { isLoggedIn ? (<li><NavLink onClick={handleLogout}>Logout</NavLink></li>) : null}
            </ul>
       </nav>
    </>)
}
