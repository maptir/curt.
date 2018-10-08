const axios = require('axios')

const link = 'http://localhost:8000/products'

describe('Test product path', () => {
  const mock = {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 7,
  }

  it('should POST new products to db', async () => {
    const response = await axios.post(link + '/add', mock)
    expect(response.status).toBe(201)
  })

  it('should response the GET method', async () => {
    const response = await axios.get(link + '/')
    expect(response.data[0]).toMatchObject({
      ...mock,
      quantity: 1,
    })
  })

  it('should return products with same slug', async () => {
    const response = await axios.get(link + '/air-max-97-men')
    await axios.post(link + '/clearAll')
    expect(response.data[0].slug).toBe('air-max-97-men')
  })
})
