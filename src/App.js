import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ComingSoon from './components/ComingSoon.js'
import Login from './components/Users/Login.js'
import SignUp from './components/Users/SignUp.js'
import Test from './components/Test.js'

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <ComingSoon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
