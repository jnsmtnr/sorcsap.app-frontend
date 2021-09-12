import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import api from '../api/'

function Test() {
	const [loggedIn, setLoggedIn] = useState(false)
	const [email, setEmail] = useState(null)
	const token = useSelector(state => state.token)

	useEffect(() => {
		api.get('/test', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(response => {
				setLoggedIn(true)
				setEmail(response.data)
			})
			.catch(() => setLoggedIn(false))
	}, [token])

	return (
		<div>
			<div>{loggedIn ? 'Bejelentkezve' : 'Nincs bejelentkezve'}</div>
			{email && <div>{email}</div>}
		</div>
	)
}

export default Test