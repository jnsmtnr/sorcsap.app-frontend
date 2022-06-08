import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    beers: []
}

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        setBeers: (state, action) => {
            state.beers = action.payload
        }
    }
})

export const { setBeers } = beersSlice.actions

export default beersSlice.reducer
