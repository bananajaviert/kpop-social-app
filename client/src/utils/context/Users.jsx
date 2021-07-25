import { useState, useEffect, createContext } from 'react'
import { get_users } from '../api/users'

export const UsersContext = createContext()

export const UsersProvider = props => {
  const [users, set_users] = useState([])

  // Get all users
  useEffect(() => {
    get_users()
  }, [])

  return (
    <UsersContext.Provider value={[users, set_users]}>
      {props.children}
    </UsersContext.Provider>
  )
}
