import axios from "axios"

export const congApi = axios.create({
    baseURL: 'https://api.quiverquant.com/beta/',
    timeout: 80000
  })
  congApi.defaults.headers.common['X-CSRFToken'] = 'TyTJwjuEC7VV7mOqZ622haRaaUr0x0Ng4nrwSRFKQs7vdoBcJlK9qjAS69ghzhFu'
  congApi.defaults.headers.common.Authorization = 'Token 8ee255181432f814c84145d3e989b3acaa41dd4c'
  