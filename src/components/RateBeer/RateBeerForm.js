import React, { useState } from 'react'

export default function RateBeerForm(props) {
    const [selectedBrewery, setSelectedBrewery] = useState('')
    const [selectedBeerId, setSelectedBeerId] = useState('')
    const [rating, setRating] = useState('')
    const [newBeer, setNewBeer] = useState({
        brewery: '',
        name: '',
        type: '',
        alc: ''
    })

    const beers = props.beers
        .filter(beer => {
            if (selectedBrewery) {
                return beer.brewery === selectedBrewery
            }
            return true
        })
        .sort((a, b) => a.name < b.name ? -1 : 1)

    function onBreweryChange(event) {
        setSelectedBrewery(event.target.value)
        setSelectedBeerId('')
    }

    function onBeerChange(event) {
        if (event.target.value === 'not-on-list') {
            setNewBeer(beer => {
                return {
                    ...beer,
                    brewery: selectedBrewery
                }
            })
        }
        setSelectedBeerId(event.target.value)
    }

    function onRatingChange(event) {
        setRating(event.target.value)
    }

    function onChangeHandler(event) {
        setNewBeer(beer => {
            return {
                ...beer,
                [event.target.id]: event.target.value
            }
        })
    }

    function onSubmitHandler(event) {
        event.preventDefault()

        if (selectedBrewery !== 'not-on-list' && selectedBeerId !== 'not-on-list') {
            props.onSubmit({
                beerId: selectedBeerId,
                rating: +rating
            })
        }
        else {
            props.onSubmit({
                name: newBeer.name,
                brewery: newBeer.brewery,
                type: newBeer.type,
                alc: +newBeer.alc,
                rating: +rating
            })
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className="space-y-2 p-2 bg-white w-64">
            {(selectedBrewery !== 'not-on-list' && selectedBeerId !== 'not-on-list') && <React.Fragment>
                <select value={selectedBrewery} onChange={onBreweryChange} className="w-full p-1 cursor-pointer border">
                    <option value="" hidden>Válassz egy főzdét!</option>
                    {props.breweries.map(brewery => <option value={brewery} key={brewery}>{brewery}</option>)}
                    <option value="not-on-list">Nincs a listán</option>
                </select>
                <select value={selectedBeerId} onChange={onBeerChange} className="w-full p-1 cursor-pointer border">
                    <option value="" hidden>Válassz egy sört!</option>
                    {beers.map(beer => <option value={beer._id} key={beer._id}>{beer.name}</option>)}
                    <option value="not-on-list">Nincs a listán</option>
                </select>
            </React.Fragment>}
            {(selectedBrewery === 'not-on-list' || selectedBeerId === 'not-on-list') && <React.Fragment>
                <label className="block" htmlFor="brewery">Főzde</label>
                <input className="w-full border p-1" value={newBeer.brewery} id="brewery" onChange={onChangeHandler} />
                <label className="block" htmlFor="name">Sör</label>
                <input className="w-full border p-1" value={newBeer.name} id="name" onChange={onChangeHandler} />
                <label className="block" htmlFor="type">Típus</label>
                <input className="w-full border p-1" value={newBeer.type} id="type" onChange={onChangeHandler} />
                <label className="block" htmlFor="alc">Alkohol %</label>
                <input className="w-full border p-1" type="number" step="any" value={newBeer.alc} id="alc" onChange={onChangeHandler} />
            </React.Fragment>}
            <select value={rating} onChange={onRatingChange} className="w-full px-1 py-1.5 cursor-pointer border">
                <option value="" hidden>Értékelés</option>
                {[1, 2, 3, 4, 5].map(rating => <option value={rating} key={rating}>{rating}</option>)}
            </select>
            <button type="submit" className="w-full p-1 bg-yellow-200">Küldés</button>
        </form>
    )
}
