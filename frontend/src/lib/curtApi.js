import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'

class CurtApi {
  auth = {
    async login({ username, password }) {
      const { data: token } = await axios.post(`${API_URL}/users/login`, {
        username,
        password,
      })
      return token
    },
  }

  cart = {
    async editCartItem(productId, quantity) {
      const { data: cart } = await axios.put(`${API_URL}/cart/edit`, {
        productId,
        quantity,
      })
      return cart
    },
    async removeCartItem(itemId) {
      const { data: cart } = await axios.delete(
        `${API_URL}/cart/remove`,
        itemId,
      )
      return cart
    },
    async fetchCart() {
      const { data: cart } = await axios.get(`${API_URL}/cart`)
      return cart
    },
  }

  products = {
    async fetchAllProduct() {
      const { data: productList } = await axios.get(`${API_URL}/products`)
      return productList
    },
  }
}

export default new CurtApi()
