import Axios from 'axios'
// import { baseURL } from '../env'
export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
export const congApi = Axios.create({
  baseURL: 'https://api.propublica.org/congress/v1/{congress}/',
  timeout: 8000
})
// export const api = Axios.create({
//   baseURL: 'https://bcw-sandbox.herokuapp.com/',
//   timeout: 8000
// })

export const setBearer = function(bearer) {
  congApi.defaults.headers.authorization = bearer
  // api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  congApi.defaults.headers.authorization = ''
  // api.defaults.headers.authorization = ''
}
