const axios = require('axios')

axios
  .get('http://localhost:8000/reset')
  .then(() => {
    console.log('Reseting database')
  })
  .catch(err => console.log(err))

require('./product')
require('./register')
