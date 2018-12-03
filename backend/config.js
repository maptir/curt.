const config = {
  production: {
    FRONTEND_URL: 'https://confident-hodgkin-17281d.netlify.com/',
    API_URL: 'http://35.197.147.179/',
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
