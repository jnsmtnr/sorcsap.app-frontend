function ComingSoon() {
    return (
        <div>
            <div className="font-bold font-mono text-5xl">
                <span className="text-yellow-600">SÖRCS</span>
                <span className="text-gray-600">APP</span>
            </div>
            <div className="text-gray-400 font-bold text-4xl flex justify-between">
                { 'Hamarosan...'.split('').map((letter, index) => <span key={index}>{letter}</span>) }
            </div>
        </div>
    )
}

export default ComingSoon
