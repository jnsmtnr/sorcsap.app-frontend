import { configureStore } from '@reduxjs/toolkit'

import userReducer from './user'
import beersReducer from './beers'

export const store = configureStore({
    reducer: {
        user: userReducer,
        beers: beersReducer,
    }
})
