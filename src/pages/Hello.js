import { Link } from 'react-router-dom'

function Hello() {
    return (
        <div className='space-y-12'>
            <div className="font-bold font-mono text-5xl relative">
                <div>
                    <span className="text-yellow-600">SÖRCS</span>
                    <span className="text-gray-600">APP</span>
                </div>
                <span className="absolute top-0 right-0 text-gray-400 text-2xl translate-x-6 -translate-y-5 rotate-20">Béta</span>
            </div>
            <div className="flex flex-col space-y-4 items-center">
                <Link to="/login" className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 text-white rounded-full text-xl">Bejelentkezés</Link>
                <Link to="/signup" className="text-gray-400 hover:text-gray-500 text-base">Regisztráció</Link>
            </div>
        </div>
    )
}

export default Hello
