export default function Modal(props) {
    function handleClick(event) {
        event.stopPropagation()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={props.onCancel}>
            <div onClick={handleClick}>
                {props.children}
            </div>
        </div>
    )
}
