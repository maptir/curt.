import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'

export default {
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
