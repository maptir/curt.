const config = {
  production: {
    FRONTEND_URL: '',
    API_URL: '',
  },
  development: {
    FRONTEND_URL: 'http://localhost:3000',
    API_URL: 'http://localhost:8000',
  },
  test: {},
}

module.exports = { ...config[process.env.NODE_ENV] }
