import { useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ComingSoon from './pages/ComingSoon.js'
import Login from './components/Users/Login.js'
import SignUp from './components/Users/SignUp.js'
import Dashboard from './pages/Dashboard.js'
import RateBeer from './pages/RateBeer.js'
import MyRatings from './pages/MyRatings.js'

import { getLoginData } from './utils/loginData'
import api from './api'

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

  useEffect(() => {
    if (token) {
      api.get('/beers')
          .then((response) => dispatch({ type: 'set-beers', payload: { beers: response.data } }))
          .catch(console.log)
    }
}, [token, dispatch])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Routes>
        {!token && <Route path="/*" element={<ComingSoon />} />}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {token && <Route path="/" element={<Dashboard />} />}
        {token && <Route path="rate-beer" element={<RateBeer />} />}
        {token && <Route path="my-ratings" element={<MyRatings />} />}
      </Routes>
    </div>
  )
}

export default App
