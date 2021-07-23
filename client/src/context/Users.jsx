import { useState, useEffect, createContext } from 'react'

const UserContext = createContext()

const UsersProvider = () => {

  // UseEffect get users logic

  return (
    <UserContext.Provider>
    </UserContext.Provider>
  )
}

export default Users
