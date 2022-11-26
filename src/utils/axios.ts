import _axios from 'axios'

const axios = _axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v0`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json;charset=utf-8'
  }
})

export default axios
