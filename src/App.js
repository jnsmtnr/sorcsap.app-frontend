import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ComingSoon from './components/ComingSoon.js'
import Login from './components/Users/Login.js'
import SignUp from './components/Users/SignUp.js'
import Test from './components/Test.js'

function App() {
  const [token, setToken] = useState(null)
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Router>
        <Switch>
          <Route path="/login">
            <Login onSuccesfulLogin={setToken} />
          </Route>
          <Route path="/signup">
            <SignUp onSuccesfulSignUp={setToken} />
          </Route>
          <Route path="/test">
            <Test token={token} />
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
