import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  AppBar,
  Toolbar
} from '@material-ui/core'

const NavBar = () => {

  useEffect(() => {

  }, [])

  return (
    <AppBar
      className='appBar'
      position='sticky'>
      <Toolbar
        className='toolbar'>

        <img
          className='app-logo'
          src="https://seeklogo.com/images/T/talk-logo-D5A9333B30-seeklogo.com.png"
          alt="" />

        <div className="actions-tab">
          <Link
            to='/friends'
            className='nav-link'>
            Friends
          </Link>
          <Link
            to='notifications'
            className='nav-link'>
            Notifications
          </Link>
        </div>

      </Toolbar>
    </AppBar>
  )
}


export default NavBar
