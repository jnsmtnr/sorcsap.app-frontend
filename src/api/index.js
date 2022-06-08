import { create } from 'axios'
import { store } from '../store'

import { resetUser } from '../store/user'

const api = create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

api.interceptors.request.use((config) => {
    const { user } = store.getState()

    if (user.token) {
        config.headers['Authorization'] = 'Bearer ' + user.token 
    }

    return config
})

api.interceptors.response.use(null, (error) => {
    if (error.response.status === 403) {
        store.dispatch(resetUser())

        localStorage.removeItem('login-data')
    }

    return Promise.reject(error)
})

export default api
