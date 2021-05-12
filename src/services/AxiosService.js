import Axios from 'axios'
// import { baseURL } from '../env'
export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
export const congApi = Axios.create({
  baseURL: 'https://api.quiverquant.com/beta/live/congresstrading',
  timeout: 8000
})
congApi.defaults.headers.common['X-CSRFToken'] = 'TyTJwjuEC7VV7mOqZ622haRaaUr0x0Ng4nrwSRFKQs7vdoBcJlK9qjAS69ghzhFu'
congApi.defaults.headers.common.Authorization = 'Token 8ee255181432f814c84145d3e989b3acaa41dd4c'
congApi.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
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
