import './css/App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { UsersProvider } from './utils/context/Users'
import { AuthContext } from './utils/context/AuthContext'

import ProtectedRoutes from './components/ProtectedRoutes'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './pages/private/Home'
import Friends from './pages/private/Friends'

import { token } from './utils/api/users'

function App() {
  const [isAuth, setIsAuth] = useContext(AuthContext)

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route
            path='/login'
            render={props => (
              <Login {...props}
                isAuth={isAuth}
                setIsAuth={setIsAuth} />
            )}
          />

          <Route
            path='/register'
            render={props => (
              <Register {...props} />
            )}
          />

          <UsersProvider>
            <ProtectedRoutes
              exact
              path='/'
              isAuth={isAuth}
              component={Home}
            />

            <ProtectedRoutes
              path='/friends'
              isAuth={isAuth}
              component={Friends}
            />
          </UsersProvider>
        </Switch>
      </Router>
    </div>
  );
}





export default App;
