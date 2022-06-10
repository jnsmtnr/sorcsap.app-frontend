import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

import Rating from "../components/MyRatings/Rating.js"
import EditRating from "../components/MyRatings/EditRating.js"
import DeleteRating from "../components/MyRatings/DeleteRating.js"
import Loading from '../components/icons/Loading.js'

import api from "../api"

export default function MyRatings() {
    const allBeers = useSelector(state => state.beers.beers)
    const [ratings, setRatings] = useState([])
    const [loading, setLoading] = useState(false)

    function loadRatings() {
        setLoading(true)

        api.get('/ratings')
            .then((response) => {
                setRatings(response.data)
            })
            .catch(console.log)
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        loadRatings()
    }, [])

    const beers = ratings
        .map(rating => {
            if (rating.beerId) {
                const beer = allBeers.find(beer => beer._id === rating.beerId)

                return {
                    ...beer,
                    rating: rating.rating,
                    id: rating._id
                }
            }

            return {
                name: rating.name,
                type: rating.type,
                alc: rating.alc,
                brewery: rating.brewery,
                rating: rating.rating,
                id: rating._id
            }

        })
        .sort((a, b) => a.name > b.name ? 1 : -1)

    function onRatingChange(id, rating) {
        api.patch('/ratings/' + id, {
            rating
        })
            .then(loadRatings)
            .catch(console.log)
    }

    function onDelete(id) {
        api.delete('/ratings/' + id)
            .then(loadRatings)
            .catch(console.log)
    }

    return (
        <>
            {loading && <Loading className="h-10 w-10" />}
            {!loading && beers.length > 0 && <div className="p-2 bg-white w-full sm:w-auto">
                <table className="w-full">
                    <tbody>
                        {beers.map(beer => (
                            <React.Fragment key={beer.id}>
                                <tr key={beer.id}>
                                    <td className="p-2 font-bold">{beer.name}</td>
                                    <td className="p-2 text-right" colSpan={2}>
                                        <Rating rating={beer.rating} />
                                    </td>
                                    <td className="p-2">
                                        <EditRating ratingId={beer.id} rating={beer.rating} onRatingChange={onRatingChange} />
                                    </td>
                                </tr>
                                <tr className="border-b last:border-b-0 text-gray-400">
                                    <td className="p-2">{beer.brewery}</td>
                                    <td className="p-2">{beer.type}</td>
                                    <td className="p-2">{beer.alc}%</td>
                                    <td className="p-2 text-black">
                                        <DeleteRating ratingId={beer.id} onDelete={onDelete} />
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>}
            {!loading && beers.length === 0 && <div className="flex flex-col items-center space-y-4">
                <div className="text-center">Úgy tűnik, még nem értékeltél egy sört sem</div>
                <Link to="/rate-beer" className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 text-white rounded-full text-center">Ittam egy sört</Link>
            </div>}
        </>
    )
}
