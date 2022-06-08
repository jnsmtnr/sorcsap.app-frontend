import { useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import api from '../api'
import RateBeerForm from '../components/RateBeer/RateBeerForm'
import ExistingRatingModel from "../components/RateBeer/ExistingRatingModal"

export default function RateBeer() {
    const navigate = useNavigate()
    const [existingRating, setExistingRating] = useState(null)
    const [newRating, setNewRating] = useState(null)

    const beers = useSelector(state => state.beers.beers)

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
            .catch((error) => {
                if (error.response && error.response.status === 409) {
                    setExistingRating({ rating: error.response.data.rating, id: error.response.data.id })
                    setNewRating(payload.rating)
                } else {
                    console.log(error.message)
                }
            })
    }

    function onSaveHandler() {
        api.patch('/ratings/' + existingRating.id, {
            rating: newRating
        }).then(() => {
            navigate('/my-ratings', { replace: true })
        }).catch((error) => {
            console.log(error)
        })
    }

    function onCancelHandler() {
        setExistingRating(null)
        setNewRating(null)
    }

    return (
        <>
            <RateBeerForm beers={beers} breweries={breweries} onSubmit={onSubmitHandler} />
            {existingRating && (
                <ExistingRatingModel 
                    rating={existingRating.rating}
                    onSave={onSaveHandler}
                    onCancel={onCancelHandler} 
                />
            )}
        </>
    )
}
