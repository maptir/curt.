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
    async fetchAllUsers() {
      const { data: userList } = await axios.get(`${API_URL}/users`)
      return userList
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
    async editProduct(edittedProduct) {
      const { data: product } = await axios.post(
        `${API_URL}/products/update/${edittedProduct._id}`,
        edittedProduct,
      )
      return product
    },
    async removeProduct(productId) {
      const { data: product } = await axios.post(
        `${API_URL}/products/remove/${productId}`,
      )
      return product
    },
    async addProduct(newProduct) {
<<<<<<< HEAD
      console.log('New product', newProduct)
=======
>>>>>>> 85927f77ea1f3792b49fb9fa85ebe7297bbb6f94
      const { data: product } = await axios.post(
        `${API_URL}/products/add/`,
        newProduct,
      )
<<<<<<< HEAD
      console.log(product)

=======
>>>>>>> 85927f77ea1f3792b49fb9fa85ebe7297bbb6f94
      return product
    },
  }
}

export default new CurtApi()
