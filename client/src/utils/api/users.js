import axios from 'axios'

export const register_user = async ([user_credentials, set_register_info], set_errors, set_is_logging) => {
  set_is_logging(true)

  try {
    const res = await axios.post('/api/register', user_credentials)
    const data = await res.data
    console.log(data)

    set_errors('')
    set_is_logging(false)
    set_register_info({
      username: '',
      email: '',
      password: ''
    })

  } catch(err) {
    set_errors(err.response.data)
    set_is_logging(false)
  }
}

export const login_user = async ([user_credentials, set_login_info], set_errors, set_is_logging) => {
  set_is_logging(true)

  try {
    const res = await axios.post('/api/login', user_credentials)
    const data = await res.data
    console.log(data)
    
    set_errors('')
    set_is_logging(false)
    set_login_info({
      email: '',
      password: ''
    })
  } catch(err) {
    set_errors(err.response.data)
    set_is_logging(false)
  }
}

// Private API calls
export const get_users = async set_users => {
  try {
    const res = await axios.get('/api/users')
    const data = await res.data

  set_users(data)
  } catch(err) {
    console.log(err)
  }
}