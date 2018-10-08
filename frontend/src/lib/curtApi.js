import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'

class CurtApi {
  auth = {
    async verifyToken() {
      const { data } = await axios.get(`${API_URL}/users/verify`)
      return !!data.success
    },
    async login({ username, password }) {
      const { data: token } = await axios.post(`${API_URL}/users/login`, {
        username,
        password,
      })
      return token
    },
    async register(registerInfo) {
      const { data } = await axios.post(
        `${API_URL}/users/register`,
        registerInfo,
      )
      return data.success
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
    async removeCartItem(productId) {
      const { data: cart } = await axios.post(`${API_URL}/cart/remove`, {
        productId,
      })
      return cart
    },
    async fetchCart() {
      const { data: cart } = await axios.get(`${API_URL}/cart`)
      return cart
    },
    async clearCart() {
      const { data: cart } = await axios.post(`${API_URL}/cart/clearAll`)
      return cart
    },
  }

  products = {
    async fetchAllProduct() {
      const { data: productList } = await axios.get(`${API_URL}/products`)
      return productList
    },
    async fetchProduct(slug) {
      const { data: product } = await axios.get(`${API_URL}/products/${slug}`)
      return product
    },
  }
}

export default new CurtApi()
