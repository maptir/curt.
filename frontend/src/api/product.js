import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'

export default {
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
    const { data: product } = await axios.post(
      `${API_URL}/products/add/`,
      newProduct,
    )
    return product
  },
}
