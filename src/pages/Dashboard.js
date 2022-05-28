import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className="flex flex-col items-stretch space-y-4">
            <Link to="/rate-beer" className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 text-white rounded-full text-xl text-center">Ittam egy sört</Link>
            <Link to="/my-ratings" className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 text-white rounded-full text-xl text-center">Ezeket ittam már</Link>
        </div>
    )
}
