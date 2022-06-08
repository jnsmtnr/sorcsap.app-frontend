import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
        },
        resetUser: (state) => {
            state.email = null
            state.token = null
        }
    }
})

export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer
