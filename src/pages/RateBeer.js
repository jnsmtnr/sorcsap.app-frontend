import { useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import api from '../api'

export default function RateBeer() {
    const navigate = useNavigate()

    const allBeers = useSelector(state => state.beers)

    const [selectedBrewery, setSelectedBrewery] = useState('')
    const [selectedBeer, setSelectedBeer] = useState('')
    const [rating, setRating] = useState('')

    const breweries = allBeers
        .reduce((breweries, beer) => {
            if (!breweries.includes(beer.brewery)) {
                breweries.push(beer.brewery)
            }

            return breweries
        }, [])
        .sort()

    const beers = allBeers
        .filter(beer => {
            if (selectedBrewery) {
                return beer.brewery === selectedBrewery
            }
            return true
        })
        .map(beer => beer.name)
        .sort()

    function onBreweryChange(event) {
        setSelectedBrewery(event.target.value)
        setSelectedBeer('')
    }

    function onBeerChange(event) {
        setSelectedBeer(event.target.value)
    }

    function onRatingChange(event) {
        setRating(event.target.value)
    }

    function onSubmitHandler(event) {
        event.preventDefault()

        const beer = allBeers.find(beer => beer.name === selectedBeer)

        api.post('/ratings', {
            beerId: beer._id,
            rating: +rating
        })
            .then(() => {
                navigate('/my-ratings')
            })
            .catch((error) => console.log(error))
    }

    return (
        <form onSubmit={onSubmitHandler} className="space-y-2">
            <div>
                <select value={selectedBrewery} onChange={onBreweryChange} className="w-full p-1">
                    <option value="" hidden>Válassz egy főzdét!</option>
                    {breweries.map(brewery => <option value={brewery} key={brewery}>{brewery}</option>)}
                </select>
            </div>
            <div>
                <select value={selectedBeer} onChange={onBeerChange} className="w-full p-1">
                    <option value="" hidden>Válassz egy sört!</option>
                    {beers.map(beer => <option value={beer} key={beer}>{beer}</option>)}
                </select>
            </div>
            <div>
                <select value={rating} onChange={onRatingChange} className="w-full p-1">
                    <option value="" hidden>Értékelés</option>
                    {[1, 2, 3, 4, 5].map(rating => <option value={rating} key={rating}>{rating}</option>)}
                </select>
            </div>
            <button type="submit" className="w-full p-1 bg-yellow-200">Küldés</button>
        </form>
    )
}