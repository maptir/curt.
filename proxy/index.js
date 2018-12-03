const express = require('express')
const proxy = require('http-proxy-middleware')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.post('/orders/payment', async (req, res) => {
  console.log(req.body)
  const { data } = await axios.post(
    'https://api.omise.co/charges',
    {
      description: 'Test payment',
      amount: req.body.price + '00' || 99900,
      currency: 'thb',
      card: req.body.token_id
    },
    {
      auth: {
        username: 'skey_test_5e4w5otnueqvo3uvs0s'
      }
    }
  )
  return res.send(data)
})

app.use(
  '/',
  (res, req, next) => {
    console.log('proxying')
    next()
  },
  proxy({ target: 'http://35.197.147.179', changeOrigin: true }),
  (res, req, next) => {
    console.log('proxyed')
    next()
  }
)

app.listen(process.env.PORT || 3000)

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
