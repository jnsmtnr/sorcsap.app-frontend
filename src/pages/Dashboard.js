import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className="text-center">
            <Link to="/rate-beer" className="block">Ittam egy sört</Link>
            <Link to="/my-ratings" className="block">Ezeket ittam már</Link>
        </div>
    )
}
