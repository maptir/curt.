const config = {
  production: {
    FRONTEND_URL: '',
    // API_URL: 'https://wsp-curt.appspot.com',
    API_URL: 'http://35.197.147.179',
  },
  development: {
    FRONTEND_URL: 'http://localhost:3000',
    API_URL: 'http://localhost:8000',
  },
}

module.exports = { ...config[process.env.NODE_ENV] }
