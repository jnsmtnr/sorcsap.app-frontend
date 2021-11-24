import { useState } from "react"

import Trash from "../icons/Trash.js"
import Modal from "../Modal/Modal.js"

export default function DeleteRating(props) {
    const [open, setOpen] = useState(false)

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
    }

    function onConfirm() {
        props.onDelete(props.ratingId)
        closeModal()
    }

    return (
        <>
            <Trash className="cursor-pointer" onClick={openModal} />
            {open && <Modal onCancel={closeModal}>
                <div className="bg-white p-2 space-y-4">
                    <div>Biztosan törölni szeretnéd?</div>
                    <button className="w-full text-center bg-yellow-200 p-1" onClick={onConfirm}>Igen</button>
                </div>
            </Modal>}
        </>
    )
}
