import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3000'
})

export default api
