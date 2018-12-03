import axios from 'axios'
import config from '../config'

export default {
  async editCartItem(productId, quantity) {
    const { data: cart } = await axios.put(`${config.API_URL}/cart/edit`, {
      productId,
      quantity,
    })
    return cart
  },
  async removeCartItem(productId) {
    const { data: cart } = await axios.post(`${config.API_URL}/cart/remove`, {
      productId,
    })
    return cart
  },
  async fetchCart() {
    const { data: cart } = await axios.get(`${config.API_URL}/cart`)
    return cart
  },
  async clearCart() {
    const { data: cart } = await axios.post(`${config.API_URL}/cart/clearAll`)
    return cart
  },
}
