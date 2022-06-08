import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { validateEmail } from '../../utils/validate.js'
import api from '../../api/'
import { setLoginData } from '../../utils/loginData.js'

import { setUser } from '../../store/user'

function Login() {
  const email = useRef()
  const password = useRef()
  const [hasError, setHasError] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()

    setHasError(false)
    setInvalidEmail(false)

    if (!validateEmail(email.current.value)) {
      setInvalidEmail(true)
      return
    }

    api.post('/users/login', {
      email: email.current.value,
      password: password.current.value
    })
      .then(response => {
        dispatch(setUser({
          token: response.data.token,
          email: email.current.value
        }))
        
        setLoginData({
          token: response.data.token, 
          email: email.current.value,
        })

        navigate('/', { replace: true })
      })
      .catch(() => setHasError(true))
  }

  return (
    <form className="flex flex-col space-y-2 rounded p-2 bg-white" onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        className="border p-1"
        ref={email}
      />
      {invalidEmail && <span className="text-red-400 text-sm">Rossz e-mail cím</span>}
      <label htmlFor="password">Jelszó</label>
      <input
        id="password"
        type="password"
        className="border p-1"
        ref={password}
      />
      <button
        type="submit"
        className="p-1 bg-yellow-200"
      >
        Bejelentkezés
      </button>
      {hasError && <span className="text-red-400 text-sm text-center">Rossz e-mail vagy jelszó</span>}
    </form>
  )
}

export default Login