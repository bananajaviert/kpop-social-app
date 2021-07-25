import '../../css/Auth.css'
import { Link } from 'react-router-dom'
import {
  TextField,
  Button
} from '@material-ui/core'
import { useState } from 'react'

import { validate_register_info } from '../../utils/validation'
import { register_user } from '../../utils/api/users'

const Register = () => {
  const [is_logging, set_is_logging] = useState(false)
  const [errors, set_errors] = useState('')
  const [register_info, set_register_info] = useState({
    username: '',
    email: '',
    password: ''
  })

  const submit_form = e => {
    e.preventDefault()

    if (!validate_register_info({
      username: register_info.username,
      email: register_info.email,
      password: register_info.password
    },
      set_errors,
      set_is_logging
    )) return

    register_user(
      [{ ...register_info }, set_register_info],
      set_errors,
      set_is_logging
    )
  }

  return (
    <div className='container'>
      <h1 style={{ color: 'rgb(0, 80, 80)' }}>
        Register
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
          value={register_info.username}
          onChange={e => set_register_info({ ...register_info, username: e.target.value })}
          label='Username'
          className='textfield' />
        <TextField
          value={register_info.email}
          onChange={e => set_register_info({ ...register_info, email: e.target.value })}
          label='Email'
          type='email'
          className='textfield' />
        <TextField
          value={register_info.password}
          onChange={e => set_register_info({ ...register_info, password: e.target.value })}
          label='Password'
          type='password'
          className='textfield' />
        <Button
          type='submit'
          variant='contained'
          disabled={is_logging ? true : false}
          className={`submit-btn ${is_logging && 'disable'}`}>
          {is_logging ? 'Creating an account...' : 'Register'}
        </Button>
      </form>
      <p className='register-text'>
        Already have an account?
        <Link
          to='/login'
          className='register-link'>Login</Link>
      </p>
    </div >
  )
}

export default Register
