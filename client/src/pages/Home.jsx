import { useContext } from 'react'
import { UsersContext } from '../utils/context/Users'

import NavBar from "../components/NavBar"

const Home = () => {


  const [users, set_users] = useContext(UsersContext)
  return (
    <div>
      <NavBar />
    </div>
  )
}


export default Home
