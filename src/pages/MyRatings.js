import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import Rating from "../components/MyRatings/Rating"
import api from "../api"

export default function MyRatings() {
    const allBeers = useSelector(state => state.beers)
    const [ratings, setRatings] = useState([])

    useEffect(() => {
        api.get('/ratings')
            .then((response) => {
                setRatings(response.data)
            })
            .catch(console.log)
    }, [])

    const beers = ratings
        .map(rating => {
            const beer = allBeers.find(beer => beer._id === rating.beerId)

            return {
                ...beer,
                rating: rating.rating,
                id: rating._id
            }
        })
        .sort((a,b) => a.name > b.name ? 1 : -1)

    return (
        <div className="p-2 bg-white w-full sm:w-auto">
            <table className="w-full">
                <tbody>
                    {beers.map(beer => (
                        <React.Fragment key={beer.id}>
                            <tr key={beer.id}>
                                <td className="p-2 font-bold">{beer.name}</td>
                                <td className="p-2 text-right" colSpan={2}><Rating rating={beer.rating} /></td>
                            </tr>
                            <tr className="border-b last:border-b-0 text-gray-400">
                                <td className="p-2">{beer.brewery}</td>
                                <td className="p-2">{beer.type}</td>
                                <td className="p-2">{beer.alc}%</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
