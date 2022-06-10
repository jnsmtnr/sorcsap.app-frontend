export default function Loading(props) {
    const classes = "animate-spin stroke-2 fill-transparent" + (props.className ? " " + props.className : " h-5 w-5")

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={classes} viewBox="0 0 20 20" onClick={props.onClick}>
            <path d="M 10 1 A 9 9 0 0 1 19 10" className="stroke-yellow-600" />
            <path d="M 19 10 A 9 9 0 1 1 10 1" className="stroke-neutral-200" />
        </svg>
    )
}
