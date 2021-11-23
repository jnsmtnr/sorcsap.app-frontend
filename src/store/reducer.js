const initState = {
    email: null,
    token: null,
    beers: [],
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'set-user':
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
            }
        case 'reset-user':
            return {
                ...initState
            }
        case 'set-beers': {
            return {
                ...state,
                beers: action.payload.beers
            }
        }
        default:
            return state
    }
}
