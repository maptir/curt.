import axios from 'axios'
import config from '../config'

export default {
  async verifyToken() {
    const { data } = await axios.get(`${config.API_URL}/users/verify`)
    return !!data.success
  },
  async login({ username, password }) {
    const { data } = await axios.post(`${config.API_URL}/users/login`, {
      username,
      password,
    })
    console.log(data)
    return data
  },
  async register(registerInfo) {
    const { data } = await axios.post(
      `${config.API_URL}/users/register`,
      registerInfo,
    )
    return data.success
  },
  async fetchAllUsers() {
    const { data: userList } = await axios.get(`${config.API_URL}/users`)
    return userList
  },
}
