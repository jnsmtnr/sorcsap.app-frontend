import { Routes, Route } from 'react-router-dom'
import ComingSoon from './components/ComingSoon.js'
import Login from './components/Users/Login.js'
import SignUp from './components/Users/SignUp.js'
import Test from './components/Test.js'

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Routes>
        <Route path="/*" element={<ComingSoon />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
