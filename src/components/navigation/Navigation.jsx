import { Link } from 'react-router-dom'
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
                <li><Link to='/' >Home</Link></li>
                <li><Link to='About' >About</Link></li>
                <li><Link to='Blogs' >Blog</Link></li>
                { isLoggedIn ? (<li><Link onClick={handleLogout}>Logout</Link></li>) : null}
            </ul>
       </nav>
    </>)
}
