import Axios from 'axios'
// import { baseURL } from '../env'
export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''

export const api = Axios.create({
  baseURL,
  timeout: 80000
})

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
  // api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
  // api.defaults.headers.authorization = ''
}
