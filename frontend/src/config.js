const config = {
  production: {
    FRONTEND_URL: '',
    API_URL: 'https://wsp-curt.appspot.com',
  },
  development: {
    FRONTEND_URL: 'http://localhost:3000',
    API_URL: 'http://localhost:8000',
    // API_URL: 'https://wsp-curt.appspot.com',
  },
}

module.exports = { ...config[process.env.NODE_ENV] }
