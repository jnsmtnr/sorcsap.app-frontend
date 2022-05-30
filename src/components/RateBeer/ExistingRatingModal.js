import Modal from '../Modal/Modal'
import Rating from '../MyRatings/Rating'

export default function ExistingRatingModel(props) {
    function onSaveHandler() {
        props.onSave(props.rating)
    }

    return (
        <Modal onCancel={props.onCancel}>
            <div className="bg-white p-2 flex flex-col items-stretch space-y-6 text-center">
                <div>
                    <h1>Ezt a sört értékelted már:</h1>
                    <Rating rating={props.rating} />
                </div>
                <div className="space-y-2">
                    <h2>Szeretnéd módosítani?</h2>
                    <button onClick={onSaveHandler} className="w-full text-center bg-yellow-200 p-1">Igen</button>
                </div>
            </div>
        </Modal>
    )
}