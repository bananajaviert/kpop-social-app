import './css/App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { UsersProvider } from './utils/context/Users'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Login {...props} />
              )}
            />

            <Route
              path='/login'
              render={props => (
                <Login {...props} />
              )}
            />
            <Route
              path='/register'
              render={props => (
                <Register {...props} />
              )}
            />
            <UsersProvider>
              <Route
                path='/home'
                render={props => (
                  <Home {...props} />
                )} />
            </UsersProvider>
          </Switch>
        </Router>
      </div>
    </>
  );
}





export default App;
