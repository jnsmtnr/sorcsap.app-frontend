import { useRef } from 'react'

function SignUp() {
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        console.log('sign up')
    }

    return (
        <form className="flex flex-col space-y-2 rounded p-2 bg-white" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
                id="email"
                className="border p-1"
                ref={email}
            />
            {true && <span className="text-red-400 text-sm">Rossz e-mail cím</span>}
            <label htmlFor="password">Jelszó</label>
            <input
                id="password"
                type="password"
                className="border p-1"
                ref={password}
            />
            {true && <span className="text-red-400 text-sm">Legalább 8 karakter hosszúnak kell lennie!</span>}
            <label htmlFor="password-again">Jelszó újra</label>
            <input
                id="password-again"
                type="password"
                className="border p-1"
                ref={passwordAgain}
            />
            {true && <span className="text-red-400 text-sm">A két jelszó nem egyezik meg!</span>}
            <button
                type="submit"
                className="p-1 bg-yellow-200"
            >
                Regisztráció
            </button>
        </form>
    )
}

export default SignUp