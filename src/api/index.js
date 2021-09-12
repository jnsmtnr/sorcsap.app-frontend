import { create } from 'axios'

const api = create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

export default api