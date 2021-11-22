import { useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ComingSoon from './pages/ComingSoon.js'
import Login from './components/Users/Login.js'
import SignUp from './components/Users/SignUp.js'
import Dashboard from './pages/Dashboard.js'

import { getLoginData } from './utils/loginData'

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)

  useEffect(() => {
    const loginData = getLoginData()

    if (loginData && loginData.expiresAt > new Date().getTime()) {
      dispatch({
        type: 'set-user',
        payload: {
          email: loginData.email,
          token: loginData.token
        }
      })
    }
  }, [dispatch])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Routes>
        {!token && <Route path="/*" element={<ComingSoon />} />}
        {token && <Route path="/" element={<Dashboard />} />}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
