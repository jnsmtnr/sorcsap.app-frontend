import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Test() {
    const [loggedIn, setLoggedIn] = useState(false)
    const token = useSelector(state => state.token)

    useEffect(() => {
        fetch('http://localhost:8000/test', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.ok) {
                setLoggedIn(true)
            }
            else {
                setLoggedIn(false)
            }
        })
    }, [token])

    return (
        <div>
            {loggedIn ? 'Bejelentkezve' : 'Nincs bejelentkezve'}
        </div>
    )
}

export default Test