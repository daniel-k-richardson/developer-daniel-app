import Logo from '../logo/Logo'
import Navigation from '../navigation/Navigation'

import headerStyles from './header.module.css'

const Header = () => {
  return (
      <div className={headerStyles.headerFlexWrapper}>
        <div>
          <Logo />
        </div>
        <div className={headerStyles.center}>
          <Navigation />
        </div>
      </div>
  )
}

export default Header
