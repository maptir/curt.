import axios from 'axios'
import config from '../config'

export default {
  async fetchAllOrder() {
    const { data: orders } = await axios.get(`${config.API_URL}/orders`)
    return orders
  },

  async addOrder(order) {
    const { data: addedOrder } = await axios.post(
      `${config.API_URL}/orders/create`,
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
          console.log('sosossossososo')

          const { data } = await axios.post(
            `${config.API_URL}/orders/payment`,
            {
              token_id: response.id,
            },
          )
          console.log('resolve')

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
