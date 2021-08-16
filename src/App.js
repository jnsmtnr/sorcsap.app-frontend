import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ComingSoon from './components/ComingSoon.js'
import Login from './components/Login/Login.js'

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
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
