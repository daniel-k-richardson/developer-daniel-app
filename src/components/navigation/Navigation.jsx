import { Link } from 'react-router-dom'
import './Navigation.css'
export default function Navigation () {
  return (<>
        <nav className='nav-container'>
            <ul className='nav-list'>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='About' >About</Link></li>
                <li><Link to='Blogs' >Blog</Link></li>
            </ul>
       </nav>
    </>)
}
