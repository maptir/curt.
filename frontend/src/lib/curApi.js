import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'

const auth = {
  async login({ username, password }) {
    const { data: token } = await axios.post(`${API_URL}/users/login`, {
      username,
      password,
    })
    return token
  },
}

const cart = {
  editCartItem() {},
  removeCartItem() {},
}

export default {
  auth,
  cart,
}
