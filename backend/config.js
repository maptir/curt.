const config = {
  production: {
    FRONTEND_URL: '',
    API_URL: '',
    OMISE_KEY_SECRET: 'skey_test_5e4w5otnueqvo3uvs0s',
  },
  development: {
    FRONTEND_URL: 'http://localhost:3000',
    API_URL: 'http://localhost:8000',
    OMISE_KEY_SECRET: 'skey_test_5e4w5otnueqvo3uvs0s',
  },
  test: {},
}

module.exports = { ...config[process.env.NODE_ENV] }
