import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import api from '../api'
import RateBeerForm from '../components/RateBeer/RateBeerForm'

export default function RateBeer() {
    const navigate = useNavigate()

    const beers = useSelector(state => state.beers)

    const breweries = beers
        .reduce((breweries, beer) => {
            if (!breweries.includes(beer.brewery)) {
                breweries.push(beer.brewery)
            }

            return breweries
        }, [])
        .sort()

    function onSubmitHandler(payload) {
        const url = payload.beerId ? '/ratings' : '/ratings/new-beers' 

        api.post(url, payload)
            .then(() => {
                navigate('/my-ratings', { replace: true })
            })
            .catch((error) => console.log(error))
    }

    return (
        <RateBeerForm beers={beers} breweries={breweries} onSubmit={onSubmitHandler} />
    )
}
