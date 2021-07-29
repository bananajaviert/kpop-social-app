import '../../css/Home.css'
import { Fab } from '@material-ui/core'
import { useContext } from 'react'
import { withRouter } from 'react-router-dom'

import { UsersContext } from '../../utils/context/Users'

import NavBar from '../../components/NavBar'

const Home = () => {
  const [users, set_users] = useContext(UsersContext)

  return (
    <div className='home'>
      <NavBar />
      <Fab className='floating-btn'>
        <i className="fas fa-bars"></i>
      </Fab>
      <h1 style={{ color: 'white' }}>Users</h1>
      <br />
      {
        users?.map(user => (
          <h3 style={{ color: 'white' }}>{user.username}</h3>
        ))
      }
      <a href='/friends'>return</a>
    </div>
  )
}


export default withRouter(Home)
