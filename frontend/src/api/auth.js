import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'

export default {
  async verifyToken() {
    const { data } = await axios.get(`${API_URL}/users/verify`)
    return !!data.success
  },
  async login({ username, password }) {
    const { data } = await axios.post(`${API_URL}/users/login`, {
      username,
      password,
    })
    console.log(data)
    return data
  },
  async register(registerInfo) {
    const { data } = await axios.post(`${API_URL}/users/register`, registerInfo)
    return data.success
  },
  async fetchAllUsers() {
    const { data: userList } = await axios.get(`${API_URL}/users`)
    return userList
  },
}
