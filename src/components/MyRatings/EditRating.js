import { useState } from "react"

import Pencil from "../icons/Pencil.js"
import Modal from "../Modal/Modal.js"

export default function EditRating(props) {
    const [open, setOpen] = useState(false)

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
    }

    function onRatingChange(event) {
        props.onRatingChange(props.ratingId, +event.target.value)
        closeModal()
    }

    return (
        <>
            <Pencil className="cursor-pointer" onClick={openModal} />
            {open && <Modal onCancel={closeModal}>
                <form className="bg-white p-2">
                    <select defaultValue={props.rating} onChange={onRatingChange} className="w-full p-1 cursor-pointer border">
                        {[1, 2, 3, 4, 5].map(rating => <option value={rating} key={rating}>{rating}</option>)}
                    </select>
                </form>
            </Modal>}
        </>
    )
}
