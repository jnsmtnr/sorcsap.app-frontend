function Login() {
  function handleSubmit(event) {
    event.preventDefault()

    console.log('submit')
  }

  return (
    <form className="flex flex-col space-y-2 rounded p-2 bg-white" onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        className="border p-1"
      />
      <label htmlFor="password">Jelszó</label>
      <input
        id="password"
        type="password"
        className="border p-1"
      />
      <button
        type="submit"
        className="p-1 bg-yellow-200"
      >
        Bejelentkezés
      </button>
    </form>
  )
}

export default Login