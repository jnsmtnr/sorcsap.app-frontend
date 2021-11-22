import { useEffect } from 'react'
import api from '../api'

export default function Dashboard() {
    useEffect(() => {
        api.get('/beers')
            .then((response) => console.log(response.data))
            .catch(console.log)
    }, [])

    return (
        <div>Dashboard</div>
    )
}
