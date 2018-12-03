import axios from 'axios'
import config from '../config'

export default {
  async fetchAllProduct() {
    const { data: productList } = await axios.get(`${config.API_URL}/products`)
    return productList
  },
  async fetchProduct(slug) {
    const { data: product } = await axios.get(
      `${config.API_URL}/products/${slug}`,
    )
    return product
  },
  async editProduct(edittedProduct) {
    const { data: product } = await axios.post(
      `${config.API_URL}/products/update/${edittedProduct._id}`,
      edittedProduct,
    )
    return product
  },
  async removeProduct(productId) {
    const { data: product } = await axios.post(
      `${config.API_URL}/products/remove/${productId}`,
    )
    return product
  },
  async addProduct(newProduct) {
    const { data: product } = await axios.post(
      `${config.API_URL}/products/add/`,
      newProduct,
    )
    return product
  },
}
