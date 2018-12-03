import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'

export default {
  async fetchAllOrder() {
    const { data: orders } = await axios.get(`${API_URL}/orders`)
    return orders
  },

  async addOrder(order) {
    const { data: addedOrder } = await axios.post(
      `${API_URL}/orders/create`,
      order,
    )
    return addedOrder
  },
}
