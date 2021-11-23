import RatingStar from "./RatingStar.js"

export default function Rating(props) {
    const rating = new Array(props.rating).fill(1)

    return (
        <>
            {rating.map((_, index) => <RatingStar key={index} />)}
        </>
    )
}
