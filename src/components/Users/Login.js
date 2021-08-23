import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { validateEmail } from '../../utils/validate.js'

function Login(props) {
  const email = useRef()
  const password = useRef()
  const [hasError, setHasError] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)

  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault()

    setHasError(false)
    setInvalidEmail(false)

    if (!validateEmail(email.current.value)) {
      setInvalidEmail(true)
      return
    }

    fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(data => {
        props.onSuccesfulLogin(data.token)
        history.replace('/test')
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