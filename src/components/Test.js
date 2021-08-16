import { useState, useEffect } from 'react'

function Test(props) {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/test', {
            headers: {
                Authorization: `Bearer ${props.token}`
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
    }, [props])

    return (
        <div>
            {loggedIn ? 'Bejelentkezve' : 'Nincs bejelentkezve'}
        </div>
    )
}

export default Test