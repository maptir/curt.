const axios = require('axios')

const link = 'http://localhost:8000/cart'
var token

describe('Test cart path', () => {
  it('should be able to log in', async () => {
    const response = await axios.post('http://localhost:8000/users/login', {
      username: 'curt@ku.th',
      password: '123456',
    })
    token = response.data
  })

  //   it('should successfully add item to cart', async () => {
  //     const response = await axios.put(link + '/edit', {
  //       headers: { authorization: 'Bearer ' + token },
  //       productId: 'shoe1',
  //       quantity: 1,
  //     })
  //     console.log(response)
  //   })

  it("it should return user's cart ", async () => {
    const response = await axios.get(link, {
      headers: { authorization: 'Bearer ' + token },
    })
    expect(response.data).toEqual([])
  })
})
