import '../css/Navbar.css'
import {
  AppBar,
  Toolbar,
  Button
} from '@material-ui/core'

const NavBar = () => {
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
        <Button
          variant='outlined'
          className='register-btn'>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  )
}


export default NavBar
