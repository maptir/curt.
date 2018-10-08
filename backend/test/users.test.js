const axios = require('axios')

const link = 'http://localhost:8000/users'

describe('Test users path', () => {
  const mockUser = {
    firstName: 'Custom',
    lastName: 'RongTao',
    email: 'curt@ku.th',
    facebookId: 'Curt.',
    password: '123456',
    password2: '123456',
  }

  it('should register without any error', async () => {
    const response = await axios.post(link + '/register', mockUser)
    expect(response.status).toBe(201)
  })

  it('should be able to log in', async () => {
    const response = await axios.post(link + '/login', {
      username: mockUser.email,
      password: mockUser.password,
    })
    expect(response.status).toBe(200)
  })
})
