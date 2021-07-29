import { Route, Redirect } from 'react-router-dom'

const ProtectedRoutes = (
  { isAuth, component: Component, ...rest }
) => {

  return (
    <Route {...rest} render={props => (
      isAuth ?
        <Component /> :
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
    )} />
  )
}

export default ProtectedRoutes
