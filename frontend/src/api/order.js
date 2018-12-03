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
  async checkoutWithCreditCard(card) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      Omise.createToken('card', card, async (statusCode, response) => {
        console.log(response)
        if (statusCode == 200) {
          // Success: send back the TOKEN_ID to your server to create a charge.
          // The TOKEN_ID can be found in `response.id`.
          const { data } = await axios.post(`${API_URL}/orders/payment`, {
            token_id: response.id,
          })
          resolve(data)
        } else {
          // Error: display an error message. Note that `response.message` contains
          // a preformatted error message. Also note that `response.code` will be
          // "invalid_card" in case of validation error on the card.

          // Example Error displaying
          reject(response)
        }
      })
    })
  },
}
