import { create } from 'axios'
import store from '../store'

const api = create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

api.interceptors.request.use((config) => {
    const { token } = store.getState()

    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token 
    }

    return config
})

api.interceptors.response.use(null, (error) => {
    if (error.response.status === 403) {
        store.dispatch({ type: 'reset-user' })

        localStorage.removeItem('login-data')
    }

    return Promise.reject(error)
})

export default api
