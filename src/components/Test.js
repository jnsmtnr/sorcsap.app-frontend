import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import api from '../api/'

function Test() {
	const [loggedIn, setLoggedIn] = useState(false)
	const token = useSelector(state => state.token)

	useEffect(() => {
		api.get('/beers', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(() => {
				setLoggedIn(true)
			})
			.catch(() => setLoggedIn(false))
	}, [token])

	return (
		<div className="text-center">
			<div>{loggedIn ? 'Bejelentkezve' : 'Nincs bejelentkezve'}</div>
		</div>
	)
}

export default Test