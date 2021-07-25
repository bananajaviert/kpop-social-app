export const validate_email = (user_email, set_errors, set_is_logging) => { 

  const check_email = email => {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(String(email).toLowerCase());
  }
  
  if(!check_email(user_email)) {
    set_errors('Invalid email address')
    set_is_logging(false)
    return false
  }
  return true
}