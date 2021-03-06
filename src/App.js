import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Hello from './pages/Hello.js'
import Login from './components/Users/Login.js'
import SignUp from './components/Users/SignUp.js'
import Dashboard from './pages/Dashboard.js'
import RateBeer from './pages/RateBeer.js'
import MyRatings from './pages/MyRatings.js'

import { getLoginData } from './utils/loginData'
import api from './api'

import { setUser } from './store/user'
import { setBeers } from './store/beers'

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)

  useEffect(() => {
    const loginData = getLoginData()

    if (loginData && loginData.expiresAt > new Date().getTime()) {
      dispatch(setUser({
        email: loginData.email,
        token: loginData.token
      }))
    }
  }, [dispatch])

  useEffect(() => {
    if (token) {
      api.get('/beers')
        .then((response) => dispatch(setBeers(response.data)))
        .catch(console.log)
    }
  }, [token, dispatch])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Routes>
        {!token && <Route path="/*" element={<Hello />} />}
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
