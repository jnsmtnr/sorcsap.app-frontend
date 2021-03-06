import { useRef, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { validateEmail } from '../../utils/validate.js'
import api from '../../api/'
import { setLoginData } from '../../utils/loginData.js'

import { setUser } from '../../store/user'

function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidLength, setInvalidLength] = useState(false)
  const [notEqual, setNotEqual] = useState(false)

  const [hasError, setHasError] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    setInvalidEmail(false)
    setInvalidLength(false)
    setNotEqual(false)

    if (!validateEmail(email.current.value)) {
      setInvalidEmail(true)
      return
    }

    if (password.current.value.length < 8) {
      setInvalidLength(true)
      return
    }

    if (password.current.value !== passwordAgain.current.value) {
      setNotEqual(true)
      return
    }

    api.post('/users/signup', {
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
      {invalidLength && <span className="text-red-400 text-sm">Legalább 8 karakter hosszúnak kell lennie!</span>}
      <label htmlFor="password-again">Jelszó újra</label>
      <input
        id="password-again"
        type="password"
        className="border p-1"
        ref={passwordAgain}
      />
      {notEqual && <span className="text-red-400 text-sm">A két jelszó nem egyezik meg!</span>}
      <button
        type="submit"
        className="p-1 bg-yellow-200"
      >
        Regisztráció
      </button>
      {hasError && <span className="text-red-400 text-sm text-center">Valami hiba történt, próbálja meg újra később</span>}
    </form>
  )
}

export default SignUp