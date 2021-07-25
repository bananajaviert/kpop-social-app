import { validate_email } from "./emailregex"

export const validate_login_info = ({email, password}, set_errors, set_is_logging) => {
  if(!email) {
    set_errors('Email is missing')
    set_is_logging(false)
    return false
  }

  if(!validate_email(email, set_errors, set_is_logging)) return false

  if(!password) {
    set_errors('Password is missing')
    set_is_logging(false)
    return false
  }

  return true
}
export const validate_register_info = ({username, email, password}, set_errors, set_is_logging) => {
  if(!username) {
    set_errors('Username is missing')
    set_is_logging(false)
    return false
  }
  if(!email) {
    set_errors('Email is missing')
    set_is_logging(false)
    return false
  }

  if(!validate_email(email, set_errors, set_is_logging)) return false

  if(!password) {
    set_errors('Password is missing')
    set_is_logging(false)
    return false
  }

  return true
}