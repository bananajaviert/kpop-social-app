import '../../css/AuthStyle.css'
import '../../css/Auth.css'
import { Link } from 'react-router-dom'
import {
  TextField,
  Button
} from '@material-ui/core'
import { useState } from 'react'

import { validate_login_info } from '../../utils/validation'
import { login_user } from '../../utils/api/users'

const Login = ({ setIsAuth }) => {
  const [is_logging, set_is_logging] = useState(false)
  const [errors, set_errors] = useState('')
  const [login_info, set_login_info] = useState({
    email: '',
    password: ''
  })

  const submit_form = e => {
    e.preventDefault()
    set_is_logging(true)

    if (!validate_login_info({
      email: login_info.email,
      password: login_info.password
    },
      set_errors,
      set_is_logging
    )) return

    login_user(
      [{ ...login_info }, set_login_info],
      set_errors,
      set_is_logging
    )
  }

  return (
    <div className="auth-pages">
      <div className='container'>
        <h1 style={{ color: 'rgb(0, 80, 80)' }}>
          Login
        </h1>
        <div
          style={{ display: `${!errors ? 'none' : 'block'}` }}
          className="error-section">
          <p>
            {errors}
          </p>
        </div>
        <form
          className='form'
          noValidate
          onSubmit={submit_form}>
          <TextField
            value={login_info.email}
            onChange={e => set_login_info({ ...login_info, email: e.target.value })}
            label='Email'
            type='email'
            className='textfield' />
          <TextField
            value={login_info.password}
            onChange={e => set_login_info({ ...login_info, password: e.target.value })}
            label='Password'
            type='password'
            className='textfield' />
          <div className='error-display'>

          </div>
          <Button
            type='submit'
            variant='contained'
            disabled={is_logging ? true : false}
            className={`submit-btn ${is_logging && 'disable'}`}>
            {is_logging ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        <p className='register-text'>
          Dont' have an account?
          <Link
            to='/register'
            className='register-link'>Register</Link>
        </p>
      </div >
    </div>
  )
}

export default Login
